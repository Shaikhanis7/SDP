import React, { useState } from 'react';

interface JobApplicationProps {
    jobTitle: string;
    onSubmit: (data: { name: string; email: string; resume: File | null }) => void;
}

const JobApplication: React.FC<JobApplicationProps> = ({ jobTitle, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, email, resume });
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Apply for {jobTitle}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="resume">Resume</label>
                    <input
                        type="file"
                        id="resume"
                        onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                        className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobApplication;
