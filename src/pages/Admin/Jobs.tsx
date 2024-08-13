import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { CreateApplication, GetAllJobs, AddApplication } from '../services/api'; // Import your API functions
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle, Trash, X } from 'lucide-react';

interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    salary: number;
    jobType: string;
}

const Jobs: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<number | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await GetAllJobs();
            setJobs(response.data);
        } catch (error: any) {
            console.error('Error fetching jobs:', error.response?.data || error.message || error);
            toast.error("Failed to fetch jobs");
        }
    };

    const handleAddApplication = async (jobId: number) => {
        setSelectedJob(jobId);
        setShowModal(true);
    };

    const handleApplicationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (selectedJob === null) {
            toast.error("No job selected");
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        const applicationData = {
            status: formData.get('status') as string,
            jobId: selectedJob,
            coverLetter: formData.get('coverLetter') as string,
            resumeLink: formData.get('resumeLink') as string,
            applicationDate: formData.get('applicationDate') as string,
            interviewDate: formData.get('interviewDate') as string
        };

        try {
            await AddApplication(applicationData);
            toast.success("Application added successfully");
            setShowModal(false);
            fetchJobs();
        } catch (error: any) {
            console.error('Error adding application:', error.response?.data || error.message || error);
            toast.error("Failed to add application");
        }
    };

    return (
        <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {jobs.map(job => (
                    <Card key={job.id} className='shadow-lg'>
                        <CardHeader>
                            <CardTitle className='text-lg font-bold text-primary'>{job.title}</CardTitle>
                            <CardDescription className='text-gray-600'>{job.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Location: {job.location}</p>
                            <p>Salary: ${job.salary}</p>
                            <p>Type: {job.jobType}</p>
                            <button
                                onClick={() => handleAddApplication(job.id)}
                                className='bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark'
                            >
                                <PlusCircle size={20} /> Add Application
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Add Application Modal */}
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded shadow-lg w-full max-w-md'>
                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-2 right-2 text-gray-500'
                        >
                            <X size={24} />
                        </button>
                        <h2 className='text-2xl mb-4'>Add Application</h2>
                        <form onSubmit={handleApplicationSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Status</label>
                                <input
                                    name='status'
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Cover Letter</label>
                                <textarea
                                    name='coverLetter'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Resume Link</label>
                                <input
                                    name='resumeLink'
                                    type='text'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Application Date</label>
                                <input
                                    name='applicationDate'
                                    type='date'
                                    required
                                    className='w-full border border-gray-300 px-4 py-2 rounded'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-1'>Interview Date</label>
                                <input
                                    name='interviewDate'
                                    type='date'
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
        </div>
    );
};

export default Jobs;
