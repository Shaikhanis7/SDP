import React, { useState } from 'react';
import { Briefcase, PlusCircle, Search, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const JobPostings: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobPostings, setJobPostings] = useState([
        { id: 1, title: 'Frontend Developer', company: 'TechCorp', status: 'Active' },
        { id: 2, title: 'Backend Developer', company: 'CodeBase', status: 'Closed' },
        { id: 3, title: 'UX Designer', company: 'Designify', status: 'Active' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editJob, setEditJob] = useState<any>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleAddNewJob = () => {
        setEditJob(null);
        setShowModal(true);
    };

    const handleEditJob = (job: any) => {
        setEditJob(job);
        setShowModal(true);
    };

    const handleDeleteJob = (jobId: number) => {
        setJobPostings(jobPostings.filter(job => job.id !== jobId));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const newJob = {
            id: editJob ? editJob.id : Date.now(),
            title: formData.get('title')?.toString() || '',
            company: formData.get('company')?.toString() || '',
            status: formData.get('status')?.toString() || 'Active',
        };
        if (editJob) {
            setJobPostings(jobPostings.map(job => (job.id === editJob.id ? newJob : job)));
        } else {
            setJobPostings([...jobPostings, newJob]);
        }
        setShowModal(false);
    };

    const filteredJobPostings = jobPostings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-2'>
                    <Briefcase size={24} className="text-primary" />
                    <h1 className='text-2xl font-bold text-primary'>Job Postings</h1>
                </div>
                <button
                    onClick={handleAddNewJob}
                    className='flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                >
                    <PlusCircle size={20} /> Add New Job
                </button>
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div className='relative w-full'>
                    <input
                        type='text'
                        placeholder='Search jobs...'
                        value={searchTerm}
                        onChange={handleSearch}
                        className='pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-primary'
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={20} />
                </div>
            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredJobPostings.map(job => (
                    <Card key={job.id} className='shadow-lg'>
                        <CardHeader className='flex justify-between items-center'>
                            <div>
                                <CardTitle className='text-lg font-bold text-primary'>{job.title}</CardTitle>
                                <CardDescription className='text-gray-600'>{job.company}</CardDescription>
                            </div>
                            <div className='text-gray-500'>
                                <button
                                    onClick={() => handleEditJob(job)}
                                    className='mr-2 text-blue-500 hover:underline'
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteJob(job.id)}
                                    className='text-red-500 hover:underline'
                                >
                                    Delete
                                </button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>Status: <span className={`font-semibold ${job.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{job.status}</span></p>
                        </CardContent>
                    </Card>
                ))}
                {filteredJobPostings.length === 0 && (
                    <div className='col-span-full text-center text-gray-500'>No job postings found.</div>
                )}
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-primary p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary-foreground'>
                                {editJob ? 'Edit Job' : 'Add New Job'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary-foreground " /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='title'>Job Title</label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    defaultValue={editJob?.title || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='company'>Company</label>
                                <input
                                    type='text'
                                    id='company'
                                    name='company'
                                    defaultValue={editJob?.company || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='status'>Status</label>
                                <select
                                    id='status'
                                    name='status'
                                    defaultValue={editJob?.status || 'Active'}
                                    className='w-full px-4 py-2 border rounded'
                                >
                                    <option value='Active'>Active</option>
                                    <option value='Closed'>Closed</option>
                                </select>
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary-foreground text-primary px-4 py-2 rounded shadow hover:bg-primary-dark'>
                                    {editJob ? 'Update' : 'Add'} Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPostings;
