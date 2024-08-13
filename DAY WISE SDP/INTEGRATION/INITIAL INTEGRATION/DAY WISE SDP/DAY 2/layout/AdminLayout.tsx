import Leftbar from '@/components/Admin/Leftbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen overflow-y-auto m-0 p-0 flex overflow-x-hidden'>
         <Leftbar/>
         <div className='h-screen w-3/4  flex justify-center items-center flex-col'>
              <Outlet/>
         </div>
    </div>
  )
}

export default AdminLayout