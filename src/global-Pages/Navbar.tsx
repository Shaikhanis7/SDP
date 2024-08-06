import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust path according to your structure
import { ModeToggle } from '../components/ui/mode-toggle';
import { FaBriefcase } from 'react-icons/fa';
import { BorderBeam } from '../components/magicui/border-beam';

const Navbar: React.FC = () => {
  const { username, password } = useSelector((state: RootState) => state.auth);

  const renderNavLinks = () => {
    if (username === 'admin' && password === '2647') {
      return (
        <>
          <li className="list-none">
            <NavLink
              to="/admin/dashboard"
              className="text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
            >
              Admin Dashboard
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/"
              className="ml-3 text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
            >
              Back
            </NavLink>
          </li>
        </>
      );
    } else if (username && password) {
      return (
        <>
          <li className="list-none">
            <NavLink
              to="/profile"
              className="text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
            >
              Profile
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/services"
              className="text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
            >
              Services
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/user/dashboard"
              className="text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
            >
              User Dashboard
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          {[
            { title: 'Home', path: '/' },
            { title: 'Login', path: '/login' },
            { title: 'Register', path: '/register' },
            { title: 'Services', path: '/services' }
          ].map((link, index) => (
            <li key={index} className="list-none">
              <NavLink
                to={link.path}
                className="text-md font-semibold px-3 py-2 transition-all rounded-lg hover:text-primary hover:bg-primary-foreground text-muted-foreground"
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
    <div className="w-full h-[8vh] flex items-center bg-muted/40 shadow-sm shadow-primary px-4 sticky top-0 z-10 border-b border-primary-foreground">
      <BorderBeam className="h-[8vh]" />
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold text-primary first-letter:font-poppins">
            JobIn
          </div>
        </div>
        <div className="w-full lg:w-auto flex flex-row justify-end items-center gap-8">
          <NavLink to="/jobs" className="text-primary text-xl hover:text-accent-foreground transition-colors duration-300">
            <FaBriefcase />
          </NavLink>
          <ul className="flex items-center gap-8">
            {renderNavLinks()}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
