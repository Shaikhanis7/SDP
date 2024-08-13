import React, { useState } from 'react';

interface JobApplicationProps {
    onSubmit: (applicationData: {
        name: string;
        email: string;
        resume: File | null;
    }) => void;
}

const JobApplication: React.FC<JobApplicationProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState<File | null>(null);

    const handleSubmit = () => {
        onSubmit({ name, email, resume });
        setName('');
        setEmail('');
        setResume(null);
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Apply for this Job</h2>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-light"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-light"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Resume</label>
                <input
                    type="file"
                    onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary-light"
                />
            </div>
            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover dark:bg-primary-light dark:text-primary-light-foreground dark:hover:bg-primary-light-hover"
                >
                    Submit Application
                </button>
            </div>
        </div>
    );
};

export default JobApplication;
