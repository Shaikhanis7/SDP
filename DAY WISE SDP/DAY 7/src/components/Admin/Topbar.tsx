import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../ui/mode-toggle';
import { Bell, Search } from 'lucide-react';

const Topbar: React.FC = () => {
    return (
        <div className='h-[6vh] w-full flex justify-between items-center shadow-sm shadow-primary px-6'>
           
            <div className='flex items-center w-1/2'>
               
            </div>
            <div className='flex items-center gap-4'>
                <button className='relative'>
                    <Bell className='text-gray-600' size={24} />
                    <span className='absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full'></span>
                </button>
                <ModeToggle />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Topbar;
