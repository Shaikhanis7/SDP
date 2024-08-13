import React, { useState, useEffect, useRef } from 'react';
import { PlusCircle, X, Search, Eye, Trash, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from 'react-toastify';
import { CreateCompany, GetAllCompanies, CreateJob, GetJobsByCompanyId, DeleteCompany } from '../services/api'; // Import API functions

interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    salary: number;
    jobType: string;
}

interface Company {
    id: number;
    name: string;
    contactEmail: string;
    contactPhone: string;
    jobs?: Job[]; // Add optional jobs property
}

const CompanyManagement: React.FC = () => {
    const [showModal, setShowModal] = useState<'company' | 'job' | false>(false);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
    const [viewJobs, setViewJobs] = useState<Job[] | null>(null); // State to store jobs of selected company
    const [showJobs, setShowJobs] = useState<boolean>(false); // State to toggle job visibility

    // Form references
    const nameRef = useRef<HTMLInputElement>(null);
    const contactEmailRef = useRef<HTMLInputElement>(null);
    const contactPhoneRef = useRef<HTMLInputElement>(null);

    const jobTitleRef = useRef<HTMLInputElement>(null);
    const jobDescriptionRef = useRef<HTMLTextAreaElement>(null);
    const jobLocationRef = useRef<HTMLInputElement>(null);
    const jobSalaryRef = useRef<HTMLInputElement>(null);
    const jobTypeRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await GetAllCompanies();
            setCompanies(response.data);
        } catch (error: any) {
            console.error('Error fetching companies:', error.response?.data || error.message || error);
            toast.error("Failed to fetch companies");
        }
    };

    const handleCompanySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = nameRef.current?.value || '';
        const contactEmail = contactEmailRef.current?.value || '';
        const contactPhone = contactPhoneRef.current?.value || '';

        try {
            await CreateCompany(name, contactEmail, contactPhone);
            toast.success("Company added successfully");
            setShowModal(false);
            fetchCompanies();
        } catch (error: any) {
            console.error('Error adding company:', error.response?.data || error.message || error);
            toast.error("Failed to add company");
        }
    };

    const handleJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (selectedCompany === null) {
            toast.error("No company selected");
            return;
        }

        const title = jobTitleRef.current?.value || '';
        const description = jobDescriptionRef.current?.value || '';
        const location = jobLocationRef.current?.value || '';
        const salary = parseFloat(jobSalaryRef.current?.value || '0');
        const jobType = jobTypeRef.current?.value || '';

        try {
            await CreateJob({
                title,
                description,
                location,
                salary,
                jobType,
                companyId: selectedCompany
            });
            toast.success("Job added successfully");
            setShowModal(false);
            fetchCompanies();
        } catch (error: any) {
            console.error('Error adding job:', error.response?.data || error.message || error);
            toast.error("Failed to add job");
        }
    };

    const handleViewJobs = async (companyId: number) => {
        try {
            const response = await GetJobsByCompanyId(companyId);
            setViewJobs(response.data);
            setSelectedCompany(companyId);
            setShowJobs(true); // Show jobs when the button is clicked
        } catch (error: any) {
            console.error('Error fetching jobs:', error.response?.data || error.message || error);
            toast.error("Failed to fetch jobs");
        }
    };

    const handleToggleJobs = () => {
        setShowJobs(prev => !prev); // Toggle jobs visibility
    };

    const handleDeleteCompany = async (companyId: number) => {
        try {
            await DeleteCompany(companyId); // Implement this API call in your `services/api` file
            toast.success("Company deleted successfully");
            fetchCompanies(); // Refresh the list of companies after deletion
        } catch (error: any) {
            console.error('Error deleting company:', error.response?.data || error.message || error);
            toast.error("Failed to delete company");
        }
    };

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='p-6'>
            {/* Search bar */}
            <div className='mb-4'>
                <div className='flex items-center border border-gray-300 rounded'>
                    <input
                        type='text'
                        placeholder='Search companies...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full px-4 py-2 border-none rounded-l'
                    />
                    <button className='px-4 py-2 bg-gray-200 rounded-r'>
                        <Search size={20} />
                    </button>
                </div>
            </div>

            {/* Add Company Button */}
            <div className='mb-4'>
                <button
                    onClick={() => setShowModal('company')}
                    className='flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                >
                    <PlusCircle size={20} /> Add Company
                </button>
            </div>

            {/* Companies List */}
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredCompanies.map(company => (
                    <Card key={company.id} className='shadow-lg'>
                        <CardHeader>
                            <CardTitle className='text-lg font-bold text-primary'>{company.name}</CardTitle>
                            <CardDescription className='text-gray-600'>{company.contactEmail}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Contact Phone: <span className='font-semibold'>{company.contactPhone}</span></p>
                            <div className='flex gap-2 mt-4'>
                                <button
                                    onClick={() => handleViewJobs(company.id)}
                                    className='bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                                >
                                    <Eye size={20} /> View Jobs
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedCompany(company.id);
                                        setShowModal('job');
                                    }}
                                    className='bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                                >
                                    <PlusCircle size={20} /> Add Job
                                </button>
                                <button
                                    onClick={() => handleDeleteCompany(company.id)} // Call the delete function
                                    className='bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600'
                                >
                                    <Trash size={20} /> Delete
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Add Company Modal */}
            {showModal === 'company' && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-2 right-2 text-gray-500'
                        >
                            <X size={24} />
                        </button>
                        <h2 className='text-2xl mb-4'>Add Company</h2>
                        <form onSubmit={handleCompanySubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Name</label>
                                <input
                                    ref={nameRef}
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Contact Email</label>
                                <input
                                    ref={contactEmailRef}
                                    type='email'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Contact Phone</label>
                                <input
                                    ref={contactPhoneRef}
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='flex gap-2'>
                                <button
                                    type='submit'
                                    className='bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                                >
                                    Add
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setShowModal(false)}
                                    className='bg-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-400'
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Job Modal */}
            {showModal === 'job' && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-2 right-2 text-gray-500'
                        >
                            <X size={24} />
                        </button>
                        <h2 className='text-2xl mb-4'>Add Job</h2>
                        <form onSubmit={handleJobSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Title</label>
                                <input
                                    ref={jobTitleRef}
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Description</label>
                                <textarea
                                    ref={jobDescriptionRef}
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Location</label>
                                <input
                                    ref={jobLocationRef}
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Salary</label>
                                <input
                                    ref={jobSalaryRef}
                                    type='number'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Job Type</label>
                                <input
                                    ref={jobTypeRef}
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='flex gap-2'>
                                <button
                                    type='submit'
                                    className='bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                                >
                                    Add
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setShowModal(false)}
                                    className='bg-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-400'
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

           {/* View Jobs */}
{showJobs && viewJobs && (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
            <button
                onClick={handleToggleJobs}
                className='absolute top-2 right-2 text-gray-500'
            >
                <X size={24} />
            </button>
            <h2 className='text-2xl mb-4'>Jobs</h2>
            <ul className='list-disc pl-5'>
                {viewJobs.map(job => (
                    <li key={job.id} className='mb-2'>
                        <div className='font-semibold'>{job.title}</div>
                        <div className='text-gray-600'>{job.description}</div>
                        <div className='text-gray-600'>Location: {job.location}</div>
                        <div className='text-gray-600'>Salary: ${job.salary}</div>
                        <div className='text-gray-600'>Type: {job.jobType}</div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)}

        </div>
    );
};

export default CompanyManagement;
