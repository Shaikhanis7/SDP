// Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBriefcase, FaPhone } from 'react-icons/fa'; // Importing icons including a phone icon
import { BorderBeam } from '../magicui/border-beam';
import { ModeToggle } from '../ui/mode-toggle'; // Importing the ModeToggle component

const Header = () => {
  const NavLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
    { title: 'Contact Us', path: '/contact'},
  ];

  return (
    <div className="w-full h-[8vh] flex justify-between items-center bg-primary dark:bg-gray-800 shadow-sm px-4 sticky top-0 z-10">
      <BorderBeam className='h-[8vh]' />
      <div className="w-1/4 h-full flex items-center gap-2">
        <div className="text-3xl font-bold text-primary-foreground dark:text-white font-poppins">
          JobIn
        </div>
      </div>
      <div className="w-2/4 h-full flex justify-end items-center gap-8">
        <NavLink to="/jobs">
          <FaBriefcase className="text-primary-foreground dark:text-white text-xl cursor-pointer hover:text-accent-foreground transition-colors duration-300" />
        </NavLink>
        {NavLinks.map((link, index) => (
          <li key={index} className='list-none'>
            <NavLink
              to={link.path}
              className="text-primary-foreground dark:text-white text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
            >
              {link.title}
            </NavLink>
          </li>
        ))}
        <ModeToggle /> {/* Using the ModeToggle component for dark mode toggle */}
     
      </div>
    </div>
  );
}

export default Header;
