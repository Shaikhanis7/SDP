import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaSearch } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'; // Importing an example icon from React Icons

export function InputWithButton() {
  return (
    <div className="flex flex-col items-center w-full max-w-sm space-y-4 ">
   
        <Input type="email" placeholder="Email" className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <FaSearch  className="absolute h-6 w-7 text-stone-900 m-2 transform left" />
      </div>
  );
}
