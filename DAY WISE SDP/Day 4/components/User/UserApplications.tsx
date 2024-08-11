import React from 'react';

type Application = {
    id: number;
    jobTitle: string;
    company: string;
    dateApplied: string;
    status: 'pending' | 'accepted' | 'rejected';
};

type UserApplicationsProps = {
    applications: Application[];
};

const UserApplications: React.FC<UserApplicationsProps> = ({ applications }) => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">My Applications</h2>
            {applications.length === 0 ? (
                <p className="text-gray-600">You have not applied for any jobs yet.</p>
            ) : (
                <ul className="space-y-4">
                    {applications.map((application) => (
                        <li
                            key={application.id}
                            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-semibold">{application.jobTitle}</h3>
                            <p className="text-gray-600">Company: {application.company}</p>
                            <p className="text-gray-600">Date Applied: {application.dateApplied}</p>
                            <p
                                className={`text-sm font-medium mt-2 ${
                                    application.status === 'accepted'
                                        ? 'text-green-600'
                                        : application.status === 'rejected'
                                        ? 'text-red-600'
                                        : 'text-yellow-600'
                                }`}
                            >
                                Status: {application.status}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserApplications;
