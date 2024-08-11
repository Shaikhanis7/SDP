import React, { useState } from 'react';
import JobListing from './JobListing';
import JobApplication from './JobApplication';

const JobBoard: React.FC = () => {
    const [applying, setApplying] = useState(false);
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);

    const handleApply = () => {
        setApplying(true);
        setApplicationSubmitted(false);
    };

    const handleCloseApplication = () => {
        setApplying(false);
    };

    const handleSubmitApplication = (applicationData: { name: string; email: string; resume: File | null }) => {
        // Simulate sending application data to an API
        console.log(applicationData);
        setApplicationSubmitted(true);
        setApplying(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <JobListing
                title="Frontend Developer"
                company="Tech Corp"
                location="Remote"
                description="We are looking for a skilled frontend developer..."
                datePosted="2024-07-28"
                onApply={handleApply}
            />
            {applying && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 relative">
                        <button
                            onClick={handleCloseApplication}
                            className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            ×
                        </button>
                        <JobApplication onSubmit={handleSubmitApplication} />
                    </div>
                </div>
            )}
            {applicationSubmitted && (
                <div className="bg-green-100 text-green-800 p-4 mt-6 rounded-md">
                    Your application has been submitted successfully!
                </div>
            )}
        </div>
    );
};

export default JobBoard;
