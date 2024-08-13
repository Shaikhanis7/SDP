import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { User, Briefcase, ClipboardList, Power, Home } from 'lucide-react'; // Added Home icon
import { Button } from '../ui/button';

const Leftbar: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const UserLinks = [
        {
            title: 'Dashboard',
            link: '/user/dashboard',
            icon: Home,
        },
        {
            title: 'Profile',
            link: '/user/profile',
            icon: User,
        },
        {
            title: 'Job Listings',
            link: '/user/job-listings',
            icon: Briefcase,
        },
    ];

    const handleLogout = () => {
        // Handle logout logic here if necessary
        // e.g., clear user data, token, etc.

        navigate('/'); // Navigate to the home page
    };

    return (
        <div className='h-screen w-1/6 flex flex-col shadow-sm shadow-primary pt-10'>
            <div className='h-[5%] text-primary font-bold text-2xl flex justify-center items-center'>
                JobPortal
            </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2'>
                {UserLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className='p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full flex flex-row items-center gap-2'
                    >
                        {React.createElement(data.icon, { size: 20 })}
                        {data.title}
                    </NavLink>
                ))}
            </div>
            <div className='h-[5%] w-full flex flex-col justify-center items-center'>
                <Button 
                    className='p-5 bg-red-500/5 hover:bg-red-500/10 font-bold w-full'
                    onClick={handleLogout} // Attach handleLogout function
                >
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-red-500'>
                        <Power size={20} /> Logout
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Leftbar;
