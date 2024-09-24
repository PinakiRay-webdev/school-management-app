import React from 'react'
import Login from './Pages/Login/Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './Pages/Navbar/Navbar'
import AdminDashboard from './Pages/Dashboard/Admin/Home'
import MentorDashboard from './Pages/Dashboard/MentorDashboard'
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
    },
    {
      path: '/mentor/dashboard',
      element:<><Navbar/><MentorDashboard/></>
    }
  ])

  return (
    <div className='' >
      <RouterProvider router={myRouter} >
      </RouterProvider>
    </div>
  )
}

export default App
