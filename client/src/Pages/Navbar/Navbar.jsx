import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-fit bg-slate-300' >
      <div className='max-w-screen-xl mx-auto flex items-center justify-between py-3' >
        <h1 className='text-xl' >Brand</h1>

        <ul className='flex items-center gap-4' >
          <li>Home</li>
          <li>Data</li>
          <li>List</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
