import React, { useEffect, useState } from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
  
export default function Layout() {
    const [Counter,setCounter] = useState(0);
    useEffect(()=>{

    }, []);
  return <>
  <Navbar />
  <div className='min-h-screen'>
    <Outlet></Outlet>
  </div>
  <Footer />
   </>
}


