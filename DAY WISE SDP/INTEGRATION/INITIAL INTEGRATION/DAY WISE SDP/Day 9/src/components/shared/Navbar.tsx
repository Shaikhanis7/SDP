import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ui/mode-toggle'
import { FaBriefcase } from 'react-icons/fa' // Import the briefcase icon
import { BorderBeam } from '../magicui/border-beam'

const Navbar = () => {
  const NavLinks = [
    { title: 'Home', path: '/' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
    {title :'Services', path:'/services'}
  ]

  return (
    <div className="w-full h-[8vh] flex flex-row justify-between items-center bg-primary-foreground shadow-sm px-4 sticky top-0 z-10">
      <BorderBeam className='h-[8vh]'/>
      <div className="w-1/4 h-full flex items-center gap-2">
        {/* JobIn Text */}
        <div className="text-3xl font-bold text-primary first-letter:font-poppins">
          JobIn
        </div>
      </div>
      <div className="w-2/4 h-full flex flex-row justify-center items-center gap-8">
        <NavLink to="/jobs"><FaBriefcase className="text-primary text-xl cursor-pointer hover:text-accent-foreground transition-colors duration-300" /></NavLink>
        {
          NavLinks.map((link, index) => (
            <li key={index} className='list-none'>
              <NavLink
                to={link.path}
                className="text-primary text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
              >
                {link.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
