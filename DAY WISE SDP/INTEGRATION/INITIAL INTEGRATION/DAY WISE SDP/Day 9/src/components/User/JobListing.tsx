import React from 'react';

interface JobListingProps {
    title: string;
    company: string;
    location: string;
    description: string;
    datePosted: string;
    imageUrl: string;
    onApply: () => void;
}

const JobListing: React.FC<JobListingProps> = ({
    title,
    company,
    location,
    description,
    datePosted,
    imageUrl,
    onApply,
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-4">
            <div className="flex items-center mb-4">
                <img src={imageUrl} alt={`${company} logo`} className="h-16 w-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-2xl font-bold mb-1 text-primary">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Company:</strong> {company}</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Location:</strong> {location}</p>
                    <p className="text-gray-600 dark:text-gray-300"><strong>Date Posted:</strong> {datePosted}</p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            <button
                onClick={onApply}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-hover dark:bg-primary-light dark:text-primary-light-foreground dark:hover:bg-primary-light-hover"
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobListing;
