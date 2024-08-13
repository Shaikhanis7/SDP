
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'



import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
import Login from './pages/Shared/Login'





const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        {/* <Route path='/register' element={<Register />} /> */}             </Route>

                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App