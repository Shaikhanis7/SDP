import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Briefcase, FileText, Users, Power, Settings, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const AdminLinks = [
    { title: 'Dashboard', link: '/admin/dashboard', icon: LayoutDashboard },
    { title: 'Job Postings', link: '/admin/job-postings', icon: Briefcase },
    { title: 'Applications', link: '/admin/applications', icon: FileText },
    { title: 'Users', link: '/admin/users', icon: Users },
    { title: 'Settings', link: '/admin/settings', icon: Settings },
    { title: 'Help', link: '/admin/help', icon: HelpCircle },
  ];

  const handleLogout = () => {
    // Add any logout logic here if needed
    navigate('/');
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
    <div className='h-screen w-1/6 flex flex-col bg-muted/40 shadow-sm shadow-primary'>
      <div className='h-[5%] text-primary-foreground font-bold text-2xl flex justify-center items-center border-b px-4'>
        JobPortal
      </div>
      <div className='h-[90%] w-full flex flex-col justify-start items-center gap-2 p-4'>
        {AdminLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-primary-foreground w-full ${
                isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
              }`
            }
          >
            {React.createElement(data.icon, { size: 20 })}
            {data.title}
          </NavLink>
        ))}
      </div>
      <div className='h-[5%] w-full flex flex-col justify-center items-center border-t px-4'>
        <Button
          className='flex items-center gap-2 text-red-500 w-full justify-center hover:bg-red-500/10'
          onClick={confirmLogout}
        >
          <Power size={20} />
          Logout
        </Button>
      </div>

      {/* Logout Confirmation Modal */}
      `{showLogoutConfirm && (
        <div className='fixed inset-0 z-20 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-primary-foreground p-6 rounded shadow-lg w-[90%] max-w-md'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-bold text-primary'>Confirm Logout</h2>
              <button onClick={handleCancelLogout}><Power size={20} className="text-primary" /></button>
            </div>
            <div className='flex justify-end gap-2'>
              <Button onClick={handleConfirmLogout} className='bg-red-500 text-white'>
                Logout
              </Button>
              <Button onClick={handleCancelLogout} className='bg-gray-300 text-gray-700'>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}`
    </div>
  );
};

export default Leftbar;
