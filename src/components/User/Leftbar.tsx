import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User, Briefcase, Home, Power, Settings, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import {Button} from '@/components/ui/button'

const Leftbar: React.FC = () => {
    const navigate = useNavigate();
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const AdminLinks = [
        { title: 'Dashboard', link: '/user/dashboard', icon: Home },
        { title: 'Profile', link: '/user/profile', icon: User },
        { title: 'Job Listings', link: '/user/job-listings', icon: Briefcase },
        { title: 'Settings', link: '/user/settings', icon: Settings },
        { title: 'Help', link: '/user/help', icon: HelpCircle },
    ];

    const handleLogout = () => {
        // Handle logout logic here if necessary
        // e.g., clear user data, token, etc.

        navigate('/'); // Navigate to the home page
    };

    const confirmLogout = () => {
        setShowLogoutConfirm(true);
    };

    const handleConfirmLogout = () => {
        handleLogout();
        setShowLogoutConfirm(false);
    };

    const handleCancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    return (
        <div className='h-screen w-1/5 bg-white dark:bg-gray-800 shadow-lg flex flex-col'>
            <div className='p-4 border-b flex items-center justify-between'>
         
            </div>
            <div className='flex-1 overflow-auto p-4'>
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                                isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-primary-foreground hover:text-primary'
                            }`
                        }
                    >
                        {React.createElement(data.icon, { size: 20 })}
                        {data.title}
                    </NavLink>
                ))}
            </div>
            <div className='p-4 border-t'>
                <Button
                    className='w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-100'
                    onClick={confirmLogout}
                >
                    <Power size={20} />
                    Logout
                </Button>
            </div>

            {/* Logout confirmation modal */}
            {showLogoutConfirm && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <Card className='bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
                        <CardContent className='p-6 text-center'>
                            <h2 className='text-xl font-bold mb-4 text-primary'>Confirm Logout</h2>
                            <p className='text-gray-600 dark:text-gray-300 mb-6'>Are you sure you want to logout?</p>
                            <div className='flex justify-center gap-4'>
                                <Button
                                    onClick={handleConfirmLogout}
                                    className='bg-primary text-primary-foreground hover:bg-primary-hover'
                                >
                                    Confirm
                                </Button>
                                <Button
                                    onClick={handleCancelLogout}
                                    className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                >
                                    Cancel
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Leftbar;
