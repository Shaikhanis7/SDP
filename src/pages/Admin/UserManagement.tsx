import React, { useState, useEffect, useRef } from 'react';
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
import { getAllUsers, CreateUser, UpdateUserByID, DeleteUserByID } from '../services/api'; // Update with the correct path

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editUser, setEditUser] = useState<any>(null);

    // Refs for form inputs
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Fetch users when component mounts
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

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

    const handleDeleteUser = async (userId: number) => {
        console.log('Deleting user with ID:', userId);
        try {
            await DeleteUserByID(userId);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser = {
            id: editUser ? editUser.id : Date.now(),
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            phone: phoneRef.current?.value || '',
            address: addressRef.current?.value || '',
            password: passwordRef.current?.value || '',
        };

        console.log('Submitting user:', newUser);

        try {
            if (editUser) {
                await UpdateUserByID(editUser.id, newUser);
                setUsers(users.map(user => (user.id === editUser.id ? newUser : user)));
            } else {
                await CreateUser(newUser.name, newUser.email, newUser.phone, newUser.address, newUser.password);
                setUsers([...users, newUser]);
            }
        } catch (error) {
            console.error('Failed to save user:', error);
        }
        setShowModal(false);
    };

    const handleRowClick = (user: any) => {
        setEditUser(user);
        setShowModal(true);
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
                            <TableHead>Phone</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(user => (
                                <TableRow key={user.id} onClick={() => handleRowClick(user)} className='cursor-pointer'>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
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
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents triggering row click event
                                                handleDeleteUser(user.id);
                                            }}
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
                                <label className='block text-sm font-medium text-primary-foreground' htmlFor='name'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    ref={nameRef}
                                    defaultValue={editUser?.name || ''}
                                    className='mt-1 block w-full border border-gray-300 rounded p-2'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium text-primary-foreground' htmlFor='email'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    ref={emailRef}
                                    defaultValue={editUser?.email || ''}
                                    className='mt-1 block w-full border border-gray-300 rounded p-2'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium text-primary-foreground' htmlFor='phone'>
                                    Phone
                                </label>
                                <input
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    ref={phoneRef}
                                    defaultValue={editUser?.phone || ''}
                                    className='mt-1 block w-full border border-gray-300 rounded p-2'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium text-primary-foreground' htmlFor='address'>
                                    Address
                                </label>
                                <input
                                    type='text'
                                    id='address'
                                    name='address'
                                    ref={addressRef}
                                    defaultValue={editUser?.address || ''}
                                    className='mt-1 block w-full border border-gray-300 rounded p-2'
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium text-primary-foreground' htmlFor='password'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    ref={passwordRef}
                                    defaultValue={editUser?.password || ''}
                                    className='mt-1 block w-full border border-gray-300 rounded p-2'
                                    required
                                />
                            </div>
                            <div className='flex justify-end'>
                                <Button type='submit' className='bg-primary text-primary-foreground'>
                                    {editUser ? 'Update User' : 'Add User'}
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
