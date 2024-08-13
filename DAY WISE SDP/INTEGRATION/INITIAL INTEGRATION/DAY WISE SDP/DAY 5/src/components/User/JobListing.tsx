import React from 'react';

interface JobListingProps {
    title: string;
    company: string;
    location: string;
    description: string;
    datePosted: string;
    onApply: () => void;
}

const JobListing: React.FC<JobListingProps> = ({
    title,
    company,
    location,
    description,
    datePosted,
    onApply
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
                <strong>Company:</strong> {company}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                <strong>Location:</strong> {location}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
                <strong>Date Posted:</strong> {datePosted}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
            <div className="mt-4">
                <button
                    onClick={onApply}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover dark:bg-primary-light dark:text-primary-light-foreground dark:hover:bg-primary-light-hover"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobListing;
