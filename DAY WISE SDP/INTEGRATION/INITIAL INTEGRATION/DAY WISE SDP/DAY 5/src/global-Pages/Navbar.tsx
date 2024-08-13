import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust path according to your structure
import { ModeToggle } from '../components/ui/mode-toggle';
import { FaBriefcase } from 'react-icons/fa'; // Import the briefcase icon
import { BorderBeam } from '../components/magicui/border-beam';

const Navbar: React.FC = () => {
  const { username, password } = useSelector((state: RootState) => state.auth);

  // Determine the state of navigation links based on credentials
  const renderNavLinks = () => {
    if (username === 'admin' && password === '2647') {
      // Admin user
      return (
        <li className='list-none'>
          <NavLink
            to="/admin/dashboard"
            className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
          >
            Admin Dashboard
          </NavLink>

          <NavLink to='/'
           className="ml-3 text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300">
              Back
          </NavLink>
        </li>
      );
    } else if (username && password) {
      // Logged in user
      return (
        <>
          <li className='list-none'>
            <NavLink
              to="/profile"
              className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
            >
              Profile
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink
              to="/services"
              className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
            >
              Services
            </NavLink>
          </li>
          <li className='list-none'>
            <NavLink
              to="/user/dashboard"
              className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
            >
              UserDashBoard
            </NavLink>
          </li>
        </>
      );
    } else {
      // Guest user
      return (
        <>
          {[
            { title: 'Home', path: '/' },
            { title: 'Login', path: '/login' },
            { title: 'Register', path: '/register' },
            { title: 'Services', path: '/services' }
          ].map((link, index) => (
            <li key={index} className='list-none'>
              <NavLink
                to={link.path}
                className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </>
      );
    }
  };

  return (
    <div className="w-full h-[8vh] flex flex-row justify-between items-center bg-primary shadow-sm px-4 sticky top-0 z-10">
      <BorderBeam className='h-[8vh]' />
      <div className="w-1/4 h-full flex items-center gap-2">
        {/* JobIn Text */}
        <div className="text-3xl font-bold text-primary-foreground font-poppins">
          JobIn
        </div>
      </div>
      <div className="w-2/4 h-full flex flex-row justify-end items-center gap-8">
        <NavLink to="/jobs">
          <FaBriefcase className="text-primary-foreground text-xl cursor-pointer hover:text-accent-foreground transition-colors duration-300" />
        </NavLink>
        {renderNavLinks()}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
