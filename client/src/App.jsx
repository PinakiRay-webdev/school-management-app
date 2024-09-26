import React from 'react'
import Login from './Authentication/Login/Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AdminHome from './Pages/Admin/AdminHome'
import MentorHome from './Pages/Mentor/MentorHome'
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
      element:<><Navbar/><AdminHome/></>
    },
    {
      path: '/mentor/dashboard',
      element:<><Navbar/><MentorHome/></>
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
