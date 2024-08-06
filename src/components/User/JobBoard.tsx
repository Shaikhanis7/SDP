import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'; // Import Shadcn Card components
import JobApplication from './JobApplication';

const JobBoard: React.FC = () => {
    const [applying, setApplying] = useState(false);
    const [applicationSubmitted, setApplicationSubmitted] = useState(false);
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setApplying(true);
        setApplicationSubmitted(false);
    };

    const handleCloseApplication = () => {
        setApplying(false);
        setSelectedJob(null);
    };

    const handleSubmitApplication = (applicationData: { name: string; email: string; resume: File | null }) => {
        console.log(applicationData);
        setApplicationSubmitted(true);
        setApplying(false);
    };

    const jobListings = [
        {
            title: 'Frontend Developer',
            company: 'Tech Corp',
            location: 'Remote',
            description: 'We are looking for a skilled frontend developer to join our team...',
            datePosted: '2024-07-28',
            imageUrl: 'https://example.com/tech-corp-logo.png',
        },
        {
            title: 'Backend Developer',
            company: 'Web Solutions',
            location: 'San Francisco, CA',
            description: 'Join our backend team to build scalable web applications...',
            datePosted: '2024-07-27',
            imageUrl: 'https://example.com/web-solutions-logo.png',
        },
        {
            title: 'Full Stack Developer',
            company: 'Innovatech',
            location: 'New York, NY',
            description: 'We need a versatile full stack developer to handle our web projects...',
            datePosted: '2024-07-26',
            imageUrl: 'https://example.com/innovatech-logo.png',
        },
        {
            title: 'UI/UX Designer',
            company: 'Creative Minds',
            location: 'Austin, TX',
            description: 'Looking for a talented UI/UX designer to enhance our user experiences...',
            datePosted: '2024-07-25',
            imageUrl: 'https://example.com/creative-minds-logo.png',
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobListings.map((job, index) => (
                    <Card key={index} className="shadow-md border border-gray-200">
                        <CardHeader className="flex items-center space-x-4 p-4">
                            <img src={job.imageUrl} alt={`${job.company} logo`} className="w-12 h-12 object-cover rounded-full" />
                            <div>
                                <CardTitle className="text-lg font-semibold text-gray-800">{job.title}</CardTitle>
                                <p className="text-sm text-gray-600">{job.company}</p>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-gray-700">{job.description}</p>
                            <p className="mt-2 text-sm text-gray-500">{job.location} | {job.datePosted}</p>
                        </CardContent>
                        <CardFooter className="p-4">
                            <button
                                onClick={() => handleApply(job.title)}
                                className="bg-primary text-primary-foreground px-4 py-2 rounded shadow hover:bg-primary-dark"
                            >
                                Apply Now
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {applying && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 relative w-full max-w-lg">
                        <button
                            onClick={handleCloseApplication}
                            className="absolute top-2 right-2 text-primary-foreground dark:text-gray-400 hover:text-black dark:hover:text-white"
                        >
                            ×
                        </button>
                        <JobApplication jobTitle={selectedJob} onSubmit={handleSubmitApplication} />
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
