import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../src/assets/css/style.css'
import { Provider } from 'react-redux';
import  {store}  from './redux/store.ts';
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import AuthComponent from './AuthComponent.tsx'
import Footer from './Footer.tsx'
// import UXPinLayout from './UXPinLayout.tsx'

// import { Login } from './global-Pages/Login.tsx'
// import { ThemeProvider } from "@/components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Provider store={store}>
    <ThemeProvider defaultTheme="light">
      <App />
      {/* <AuthComponent/> */}
      {/* <Footer/> */}
      {/* <UXPinLayout/> */}
    </ThemeProvider>
    {/* <Navbar/>
    <Login/> */}
 </Provider>
  </React.StrictMode>,
)
