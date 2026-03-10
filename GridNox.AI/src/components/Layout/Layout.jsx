import React, { useEffect, useState } from 'react'
import Style from './Layout.module.css'

export default function Layout() {
    const [Counter,setCounter] = useState(0);
    useEffect(()=>{

    }, []);
  return <>
  <h1>Layout</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis non laudantium consequatur culpa quos rerum autem voluptates aspernatur, minus dignissimos sequi ducimus et, sed explicabo, dicta corrupti dolore quis?</p>
  </>
}


