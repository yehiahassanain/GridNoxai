import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import ContactUs from './components/Contact-US/Contact-US'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'
import Services from './components/Services/Services'

let router = createBrowserRouter([
  {
    path: "/",element: <Layout />,children: [
      {index: true,element: <Home />},
      {path: '/about',element: <About />},
      {path: '/contact-us',element: <ContactUs />},
      {path: '/services',element: <Services />},
      {path: '*', element: <Notfound />}
    ],
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
