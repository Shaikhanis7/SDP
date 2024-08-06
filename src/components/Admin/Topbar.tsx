import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { ModeToggle } from '../ui/mode-toggle';

const Topbar: React.FC = () => {
    return (
        <div className='h-[6vh] w-full flex justify-between items-center bg-gray-900 text-white shadow-md px-6 py-2'>
            {/* Logo and Search */}
            <div className='flex items-center w-1/2 gap-4'>
                <h1 className='text-xl font-bold'>JobPortal</h1>
                
            </div>

            {/* Actions */}
            <div className='flex items-center gap-4'>
                {/* Notifications */}
                <button className='relative flex items-center'>
                    <Bell className='text-white' size={24} />
                    <span className='absolute top-0 right-0 w-3 h-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>3</span>
                    <span className='sr-only'>Notifications</span>
                </button>
                
                {/* Dark Mode Toggle */}
                <ModeToggle />

               
            </div>
        </div>
    );
};

export default Topbar;
