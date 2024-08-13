import React, { useState } from 'react';
import { Search, X, Edit, Trash2, PlusCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
    Table,
    TableCaption,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from '../../components/ui/table';

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([
        { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'Admin' },
        { id: 2, name: 'Sita Patel', email: 'sita@example.com', role: 'User' },
        { id: 3, name: 'Amit Sharma', email: 'amit@example.com', role: 'User' },
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
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-2xl font-bold text-primary'>User Management</h1>
                <Button onClick={handleAddNewUser} className='bg-primary text-primary-foreground flex items-center gap-2'>
                    <PlusCircle size={20} />
                    Add New User
                </Button>
            </div>

            <div className='mb-4 flex items-center relative'>
                <input
                    type='text'
                    placeholder='Search users...'
                    value={searchTerm}
                    onChange={handleSearch}
                    className='pl-10 pr-4 py-2 border border-gray-300 rounded w-full'
                />
                <Search className='absolute left-2 top-2.5 text-gray-400' size={20} />
            </div>

            <div className='mt-4'>
                <Table>
                    <TableCaption>A list of users in the system.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant='outline'
                                            className='mr-2'
                                            onClick={() => handleEditUser(user)}
                                        >
                                            <Edit size={16} className='mr-1' />
                                            Edit
                                        </Button>
                                        <Button
                                            variant='outline'
                                            color='danger'
                                            onClick={() => handleDeleteUser(user.id)}
                                        >
                                            <Trash2 size={16} className='mr-1' />
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className='text-center text-gray-500'>
                                    No users found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
                    <div className='bg-primary p-6 rounded shadow-lg w-[90%] max-w-md'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-lg font-bold text-primary-foreground'>
                                {editUser ? 'Edit User' : 'Add New User'}
                            </h2>
                            <button onClick={() => setShowModal(false)}><X size={20} className="text-primary-foreground" /></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='name'>Name</label>
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
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='email'>Email</label>
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
                                <label className='block text-sm font-bold mb-2 text-primary-foreground' htmlFor='role'>Role</label>
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
                                <Button type='submit' className='text-primary bg-primary-foreground px-4 py-2 rounded'>
                                    {editUser ? 'Update' : 'Add'} User
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
