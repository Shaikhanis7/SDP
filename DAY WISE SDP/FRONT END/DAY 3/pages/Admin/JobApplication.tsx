import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const JobApplication: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [applications, setApplications] = useState([
        { id: 1, applicant: 'John Doe', position: 'Frontend Developer', status: 'Reviewed' },
        { id: 2, applicant: 'Jane Smith', position: 'Backend Developer', status: 'Pending' },
        { id: 3, applicant: 'Alice Johnson', position: 'UX Designer', status: 'Accepted' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editApplication, setEditApplication] = useState<any>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleEditApplication = (application: any) => {
        setEditApplication(application);
        setShowModal(true);
    };

    const handleDeleteApplication = (applicationId: number) => {
        setApplications(applications.filter(app => app.id !== applicationId));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const updatedApplication = {
            id: editApplication ? editApplication.id : Date.now(),
            applicant: formData.get('applicant')?.toString() || '',
            position: formData.get('position')?.toString() || '',
            status: formData.get('status')?.toString() || 'Pending',
        };
        if (editApplication) {
            setApplications(applications.map(app => (app.id === editApplication.id ? updatedApplication : app)));
        }
        setShowModal(false);
    };

    const filteredApplications = applications.filter(app =>
        app.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-bold text-primary'>Job Applications</h1>
                </div>
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div className='relative w-full'>
                    <input
                        type='text'
                        placeholder='Search applications...'
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
                            <th className='py-2 text-left text-primary'>Applicant</th>
                            <th className='py-2 text-left text-primary'>Position</th>
                            <th className='py-2 text-left text-primary'>Status</th>
                            <th className='py-2 text-left text-primary'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map(app => (
                            <tr key={app.id} className='border-b'>
                                <td className='py-2 text-primary'>{app.applicant}</td>
                                <td className='py-2 text-primary'>{app.position}</td>
                                <td className='py-2 text-primary'>{app.status}</td>
                                <td className='py-2'>
                                    <button
                                        onClick={() => handleEditApplication(app)}
                                        className='text-blue-500 hover:underline'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteApplication(app.id)}
                                        className='text-red-500 hover:underline ml-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredApplications.length === 0 && (
                    <div className='text-center text-gray-500'>No applications found.</div>
                )}
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary'>
                                {editApplication ? 'Edit Application' : 'Application Details'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='applicant'>Applicant Name</label>
                                <input
                                    type='text'
                                    id='applicant'
                                    name='applicant'
                                    defaultValue={editApplication?.applicant || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='position'>Position</label>
                                <input
                                    type='text'
                                    id='position'
                                    name='position'
                                    defaultValue={editApplication?.position || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='status'>Status</label>
                                <select
                                    id='status'
                                    name='status'
                                    defaultValue={editApplication?.status || 'Pending'}
                                    className='w-full px-4 py-2 border rounded'
                                >
                                    <option value='Pending'>Pending</option>
                                    <option value='Reviewed'>Reviewed</option>
                                    <option value='Accepted'>Accepted</option>
                                    <option value='Rejected'>Rejected</option>
                                </select>
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary text-primary-foreground px-4 py-2 rounded'>
                                    {editApplication ? 'Update' : 'Save'} Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobApplication;
