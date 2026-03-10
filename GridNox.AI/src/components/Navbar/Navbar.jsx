import React, { useEffect, useState } from 'react'
import Style from './Navbar.module.css'

export default function Navbar() {
    const [Counter,setCounter] = useState(0);
    useEffect(()=>{

    }, []);
  return <>
  <h1>Navbar</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis non laudantium consequatur culpa quos rerum autem voluptates aspernatur, minus dignissimos sequi ducimus et, sed explicabo, dicta corrupti dolore quis?</p>
  </>
}


