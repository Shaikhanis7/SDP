import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ui/mode-toggle'
import { FaBriefcase } from 'react-icons/fa' // Import the briefcase icon
import { BorderBeam } from '../magicui/border-beam'

const Navbar = () => {
  const NavLinks = [
    { title: 'Home', path: '/' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' }
  ]

  return (
      <div className="w-full h-[8vh] flex flex-row justify-between items-center bg-primary shadow-sm px-4">
        <BorderBeam className='h-[8vh]'/>
      <div className="w-1/4 h-full flex items-center gap-2">
        {/* JobIn Text */}
        <div className="text-3xl font-bold text-primary-foreground font-poppins">
          JobIn
        </div>
      </div>
      <div className="w-2/4 h-full flex flex-row justify-end items-center gap-8">
        <FaBriefcase className="text-primary-foreground text-xl cursor-pointer hover:text-accent-foreground transition-colors duration-300" />
        {
          NavLinks.map((link, index) => (
            <li key={index} className='list-none'>
              <NavLink
                to={link.path}
                className="text-primary-foreground text-md font-semibold hover:text-accent-foreground transition-colors duration-300"
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
