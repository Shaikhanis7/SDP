import React, { useState } from 'react';
import { Briefcase, PlusCircle, Search, X } from 'lucide-react';

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
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Briefcase size={24} className="text-primary" />
                    <h1 className='text-2xl font-bold text-primary'>Job Postings</h1>
                </div>
                <button
                    onClick={handleAddNewJob}
                    className='flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded'
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
                        className='pl-10 pr-4 py-2 border border-gray-300 rounded w-full'
                    />
                    <Search className='absolute left-2 top-2.5 text-gray-400' size={20} />
                </div>
            </div>
            <div className='mt-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='border-b'>
                            <th className='py-2 text-left text-primary'>Job Title</th>
                            <th className='py-2 text-left text-primary'>Company</th>
                            <th className='py-2 text-left text-primary'>Status</th>
                            <th className='py-2 text-left text-primary'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredJobPostings.map(job => (
                            <tr key={job.id} className='border-b'>
                                <td className='py-2 text-primary'>{job.title}</td>
                                <td className='py-2 text-primary'>{job.company}</td>
                                <td className='py-2 text-primary'>{job.status}</td>
                                <td className='py-2'>
                                    <button
                                        onClick={() => handleEditJob(job)}
                                        className='text-blue-500 hover:underline'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteJob(job.id)}
                                        className='text-red-500 hover:underline ml-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredJobPostings.length === 0 && (
                    <div className='text-center text-gray-500'>No job postings found.</div>
                )}
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary'>
                                {editJob ? 'Edit Job' : 'Add New Job'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='title'>Job Title</label>
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
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='company'>Company</label>
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
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='status'>Status</label>
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
                                <button type='submit' className='bg-primary text-primary-foreground px-4 py-2 rounded'>
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
