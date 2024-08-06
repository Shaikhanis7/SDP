import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaBriefcase, FaHome, FaSignInAlt, FaUserPlus, FaCogs } from 'react-icons/fa';
import { ModeToggle } from '../ui/mode-toggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when window width is greater than sm
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Tailwind's sm breakpoint is 640px
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavLinks = [
    { title: 'Home', path: '/', icon: <FaHome /> },
    { title: 'Jobs', path: '/jobs', icon: <FaBriefcase /> },
    { title: 'Login', path: '/login', icon: <FaSignInAlt /> },
    { title: 'Register', path: '/register', icon: <FaUserPlus /> },
    { title: 'Services', path: '/services', icon: <FaCogs /> }
  ];

  return (
    <div className="w-full bg-primary-foreground text-primary shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 flex justify-between items-center h-[8vh]">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-primary">Logo</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex md:items-center space-x-4">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex items-center gap-2 text-md font-semibold text-primary hover:text-accent transition-colors"
            >
              {link.icon}
              {link.title}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden sm:flex">
          <ModeToggle />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-primary-foreground shadow-md transform transition-transform duration-300 ease-in-out z-30 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 px-4 ">
          <button onClick={toggleMenu} className="self-end text-2xl">
            <FaTimes />
          </button>
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex items-center gap-2 text-md font-semibold text-primary hover:text-primary-foreground hover:bg-primary transition-colors w-[20vw]"
              onClick={() => setMenuOpen(false)} // Close the menu on link click
            >
              {link.icon}
              {link.title}
            </NavLink>
          ))}
          <ModeToggle />
        </div>
      </div>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setMenuOpen(false)} // Close the menu when clicking outside
        />
      )}
    </div>
  );
};

export default Navbar;
