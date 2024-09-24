import React from 'react'
import { useNavigate } from 'react-router-dom'
const MentorDashboard = () => {

  const navigate = useNavigate();
  const logout = () =>{
    navigate('/')
    localStorage.clear()
  }

  return (
    <div className='max-w-screen-xl mx-auto py-3'>
      <div>
        <p>This is the mentor dashboard</p>
        <button onClick={logout} className='bg-black px-4 py-1 text-white mt-2' >Logout</button>
      </div>
    </div>
  )
}

export default MentorDashboard
