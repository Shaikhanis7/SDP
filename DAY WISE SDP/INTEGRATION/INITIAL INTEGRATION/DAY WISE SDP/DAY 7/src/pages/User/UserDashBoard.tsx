import React, { useState } from 'react';
import { Briefcase, User, ClipboardList, Edit2, Trash2 } from 'lucide-react';

const UserDashboard: React.FC = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        profilePicture: 'https://example.com/profile.jpg',
    });

    const [editProfile, setEditProfile] = useState(false);
    const [jobApplications, setJobApplications] = useState([
        { id: 1, title: 'Frontend Developer', company: 'TechCorp', status: 'Pending', dateApplied: '2023-07-20' },
        { id: 2, title: 'Backend Developer', company: 'CodeBase', status: 'Accepted', dateApplied: '2023-07-15' },
        { id: 3, title: 'UX Designer', company: 'Designify', status: 'Rejected', dateApplied: '2023-07-10' },
    ]);

    const handleEditProfile = () => {
        setEditProfile(true);
    };

    const handleSaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setUser({
            name: formData.get('name')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            profilePicture: formData.get('profilePicture')?.toString() || '',
        });
        setEditProfile(false);
    };

    const handleDeleteApplication = (id: number) => {
        setJobApplications(jobApplications.filter(app => app.id !== id));
    };

    return (
        <div className="p-6">
            <div className="flex items-center mb-6">
                <img src={user.profilePicture} alt={user.name} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                    <h2 className="text-2xl font-bold text-primary">{user.name}</h2>
                    <p className="text-primary">{user.email}</p>
                    <button onClick={handleEditProfile} className="text-blue-500 hover:underline ml-2">
                        <Edit2 size={16} /> Edit Profile
                    </button>
                </div>
            </div>

            {editProfile && (
                <form onSubmit={handleSaveProfile} className="mb-6">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="profilePicture">Profile Picture URL</label>
                        <input
                            type="url"
                            id="profilePicture"
                            name="profilePicture"
                            defaultValue={user.profilePicture}
                            className="w-full px-4 py-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Save</button>
                    </div>
                </form>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <ClipboardList size={24} /> Recent Activity
                </h3>
                <ul className="mt-2">
                    {jobApplications.map(app => (
                        <li key={app.id} className="mb-2">
                            <div className="flex justify-between">
                                <div>
                                    <h4 className="font-semibold text-primary">{app.title}</h4>
                                    <p className="text-primary">{app.company}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary">{app.status}</span>
                                    <span className="text-sm text-gray-500">{app.dateApplied}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Briefcase size={24} /> Job Applications
                </h3>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 text-left text-primary">Job Title</th>
                            <th className="py-2 text-left text-primary">Company</th>
                            <th className="py-2 text-left text-primary">Status</th>
                            <th className="py-2 text-left text-primary">Date Applied</th>
                            <th className="py-2 text-left text-primary">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobApplications.map(app => (
                            <tr key={app.id} className="border-b">
                                <td className="py-2 text-primary">{app.title}</td>
                                <td className="py-2 text-primary">{app.company}</td>
                                <td className="py-2 text-primary">{app.status}</td>
                                <td className="py-2 text-primary">{app.dateApplied}</td>
                                <td className="py-2">
                                    <button onClick={() => handleDeleteApplication(app.id)} className="text-red-500 hover:underline">
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {jobApplications.length === 0 && (
                    <div className="text-center text-gray-500">No job applications found.</div>
                )}
            </div>
        </div>
    );
};

export default UserDashboard;
