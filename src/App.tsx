
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'



import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'





const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} /> 
                    </Route>

                    {/* <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route> */}

                    {/* <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route> */}

                    {/* <Route path='*' element={<NotFound />} /> */}
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App