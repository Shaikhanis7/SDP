import React, { useState, useEffect, useRef } from 'react';
import { PlusCircle, X, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from 'react-toastify';
import { CreateCompany, GetAllCompanies, CreateJob } from '../services/api'; // Import API functions

interface Company {
    id: number;
    name: string;
    contactEmail: string;
    contactPhone: string;
}

const CompanyManagement: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showJobModal, setShowJobModal] = useState(false);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            setShowJobModal(false);
            fetchCompanies();
        } catch (error: any) {
            console.error('Error adding job:', error.response?.data || error.message || error);
            toast.error("Failed to add job");
        }
    };

    const fetchCompanies = async () => {
        try {
            const response = await GetAllCompanies();
            setCompanies(response.data);
        } catch (error: any) {
            console.error('Error fetching companies:', error.response?.data || error.message || error);
            toast.error("Failed to fetch companies");
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
            <button
                onClick={() => setShowModal(true)}
                className='flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
            >
                <PlusCircle size={20} /> Add Company
            </button>

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
                            <button
                                onClick={() => { setSelectedCompany(company.id); setShowJobModal(true); }}
                                className='mt-4 bg-secondary text-secondary-foreground px-4 py-2 rounded shadow hover:bg-secondary-dark'
                            >
                                Add Job
                            </button>
                        </CardContent>
                    </Card>
                ))}
                {filteredCompanies.length === 0 && (
                    <div className='col-span-full text-center text-gray-500'>No companies found.</div>
                )}
            </div>

            {/* Add Company Modal */}
            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary-foreground'>Add New Company</h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary-foreground" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='name'>Company Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    ref={nameRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='contactEmail'>Contact Email</label>
                                <input
                                    type='email'
                                    id='contactEmail'
                                    name='contactEmail'
                                    ref={contactEmailRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='contactPhone'>Contact Phone</label>
                                <input
                                    type='text'
                                    id='contactPhone'
                                    name='contactPhone'
                                    ref={contactPhoneRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary-foreground text-primary px-4 py-2 rounded shadow hover:bg-primary-dark'>
                                    Add Company
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Job Modal */}
            {showJobModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary-foreground'>Add New Job</h2>
                            <button onClick={() => setShowJobModal(false)}><X size={20} className="text-primary-foreground" /></button>
                        </div>
                        <form onSubmit={handleJobSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='title'>Job Title</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    ref={jobTitleRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='description'>Description</label>
                                <textarea
                                    id='description'
                                    name='description'
                                    ref={jobDescriptionRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='location'>Location</label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    ref={jobLocationRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='salary'>Salary</label>
                                <input
                                    type='number'
                                    id='salary'
                                    name='salary'
                                    ref={jobSalaryRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='jobType'>Job Type</label>
                                <input
                                    type='text'
                                    id='jobType'
                                    name='jobType'
                                    ref={jobTypeRef}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary-foreground text-primary px-4 py-2 rounded shadow hover:bg-primary-dark'>
                                    Add Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyManagement;
