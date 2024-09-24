import React from 'react';
import { sideNav } from '../../../Constants/constants';
import { useNavigate } from 'react-router-dom';
const SideNav = ({ setActiveSection }) => { 

    const navigate = useNavigate();
    const logOut = () =>{
       navigate('/');
       localStorage.clear(); 
    }

  return (
    <aside className='bg-slate-200 min-w-[15vw] h-[85vh] rounded-xl px-3 relative'>
      {sideNav.map((Element, id) => (
        <button 
          key={id} 
          className='flex items-center gap-2 my-9 ring-1 ring-slate-300 w-full py-3 px-1 rounded-lg focus:bg-slate-400'
          onClick={() => setActiveSection(Element.item)}  // Call setActiveSection here
        >
          <p className='text-2xl'>{<Element.icon />}</p>
          <p className=''>{Element.item}</p>
        </button>
      ))}
      <p onClick={logOut} className='absolute bottom-5 text-white bg-black px-5 py-2 rounded-xl'>Logout</p>
    </aside>
  );
};

export default SideNav;
