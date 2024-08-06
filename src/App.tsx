
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'



import AdminLayout from './layout/AdminLayout'
import HomeLayout from './layout/HomeLayout'
// import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import AdminDashboard from './pages/Admin/AdminDashBoard'
import JobPostings from './pages/Admin/JobPostings'
import JobApplications from './pages/Admin/JobApplication'
import UserManagement from './pages/Admin/UserManagement'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import Profile from './components/User/Profile'
import JobListing from './components/User/JobListing'
import JobBoard from './components/User/JobBoard'
import JobApplication from './pages/Admin/JobApplication'
import Jobs from './pages/jobs/Jobs'
import ServicesPage from './components/services/ServicesPage'
import NotFound from './pages/Shared/NotFound'
import Login from './global-Pages/Login'
import Settings from './pages/Admin/Settings'





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

                   <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/job-postings' element={<JobPostings />} />
                        <Route path='/admin/applications' element={<JobApplications />} />
                        <Route path='/admin/users' element={<UserManagement />} />
                        <Route path='/admin/settings' element={<Settings />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />
                        <Route path='/user/profile' element={<Profile />} />
                        <Route path='/user/job-listings' element={<JobBoard />} />
                        <Route path='/user/applications' element={<JobApplication/>} />
</Route>
                    
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/services' element={<ServicesPage/>} />
                    <Route path='*' element={<NotFound/>} />

                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App