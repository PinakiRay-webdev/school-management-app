import React from 'react'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './Pages/Navbar/Navbar'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
const App = () => {

  const myRouter = createBrowserRouter([
    {
      path: '/',
      element:<><Login/></>
    },
    {
      path: '/login',
      element:<><Login/></>
    },
    {
      path: '/admin/dashboard',
      element:<><Navbar/><AdminDashboard/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={myRouter} >
      </RouterProvider>
      <ToastContainer/>
    </div>
  )
}

export default App
