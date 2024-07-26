import { useState } from 'react'
import './assets/css/style.css'
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Home from './pages/Shared/Home'
import { ThemeProvider } from './components/ui/theme-provider'


function App() {
  return (
    <>
    {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
       <BrowserRouter>
       <Routes>
        <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home/>}/>
</Route>
       </Routes>
       </BrowserRouter>
       {/* </ThemeProvider> */}
    </>
  )
}

export default App
