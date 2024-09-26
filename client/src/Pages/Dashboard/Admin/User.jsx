import React from "react";
import { useState } from "react";
import usersData from "../../../../users.json";
import AddUser from "./AddUser";
import { ImUserTie } from "react-icons/im";
import { HiUserPlus } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";

const User = () => {
  const userInfo = usersData;
  const [isFormOpen, setIsFormOpen] = useState("scale-0")

  const openAddUserForm = () =>{
    setIsFormOpen("scale-100")
  }
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <div onClick={openAddUserForm} className="w-[22vw] border bg-blue-50 h-[25vh] py-8 rounded-md flex flex-col items-center justify-center cursor-pointer">
        <p className="font-light text-4xl bg-white rounded-xl px-2 w-fit"><HiUserPlus/></p>
        <div className="py-4">
          <h1 className="text-center">Add New Users</h1>
          <p className="text-sm opacity-70 text-center pt-3">
            From here you can add mentors and students
          </p>
        </div>
      </div>


        {/* user card  */}
        {userInfo.users.map((Element, id) => (
          <div className="w-[22vw] border bg-blue-50 h-[25vh] rounded-md px-3 py-4 relative" key={id} >
            <header className="flex items-center gap-3" >
              <p className="text-2xl bg-white rounded-full p-2 border border-slate-400" ><ImUserTie /></p>
              <div>
                <p className="text-lg" >{Element.FirstName} {Element.LastName}</p>
                <p className="text-sm opacity-80" >{Element.Role}</p>
              </div>
            </header>

            <footer className="text-xs font-bold opacity-70 absolute bottom-2 flex justify-between w-[93%]" >
              <p className="text-xs font-bold opacity-70" >{Element.Email}</p>
              <button className="text-red-600 text-xl" ><MdDeleteForever/></button>
            </footer>
          </div>
        ))}

        <AddUser isFormOpen = {isFormOpen} setIsFormOpen = {setIsFormOpen} />

    </div>
  );
};

export default User;
