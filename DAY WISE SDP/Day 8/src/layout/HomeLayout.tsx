import Footer from '@/components/shared/Footer'
// import Navbar from '@/components/shared/Navbar'
// import Navbar1 from '@/components/shared/Navbar1'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
const HomeLayout = () => {
  return (
    <>

     <div>
        <Navbar/>
        <Outlet/>
          <Footer/>
        </div>
    </>
  )
}

export default HomeLayout