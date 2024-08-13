import React, { useState } from 'react';
import { Search, X, PlusCircle } from 'lucide-react';

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState<any>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleAddNewUser = () => {
        setEditUser(null);
        setShowModal(true);
    };

    const handleEditUser = (user: any) => {
        setEditUser(user);
        setShowModal(true);
    };

    const handleDeleteUser = (userId: number) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const newUser = {
            id: editUser ? editUser.id : Date.now(),
            name: formData.get('name')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            role: formData.get('role')?.toString() || 'User',
        };
        if (editUser) {
            setUsers(users.map(user => (user.id === editUser.id ? newUser : user)));
        } else {
            setUsers([...users, newUser]);
        }
        setShowModal(false);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='p-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-2xl font-bold text-primary'>User Management</h1>
                </div>
                <button onClick={handleAddNewUser} className='flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded'>
                    <PlusCircle size={20} /> Add New User
                </button>
            </div>
            <div className='mt-4 flex justify-between items-center'>
                <div className='relative w-full'>
                    <input
                        type='text'
                        placeholder='Search users...'
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
                            <th className='py-2 text-left text-primary'>Name</th>
                            <th className='py-2 text-left text-primary'>Email</th>
                            <th className='py-2 text-left text-primary'>Role</th>
                            <th className='py-2 text-left text-primary'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className='border-b'>
                                <td className='py-2 text-primary'>{user.name}</td>
                                <td className='py-2 text-primary'>{user.email}</td>
                                <td className='py-2 text-primary'>{user.role}</td>
                                <td className='py-2'>
                                    <button
                                        onClick={() => handleEditUser(user)}
                                        className='text-blue-500 hover:underline'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className='text-red-500 hover:underline ml-2'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredUsers.length === 0 && (
                    <div className='text-center text-gray-500'>No users found.</div>
                )}
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary'>
                                {editUser ? 'Edit User' : 'Add New User'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    defaultValue={editUser?.name || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    defaultValue={editUser?.email || ''}
                                    className='w-full px-4 py-2 border rounded'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary' htmlFor='role'>Role</label>
                                <select
                                    id='role'
                                    name='role'
                                    defaultValue={editUser?.role || 'User'}
                                    className='w-full px-4 py-2 border rounded'
                                >
                                    <option value='Admin'>Admin</option>
                                    <option value='User'>User</option>
                                </select>
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='bg-primary text-primary-foreground px-4 py-2 rounded'>
                                    {editUser ? 'Update' : 'Add'} User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
