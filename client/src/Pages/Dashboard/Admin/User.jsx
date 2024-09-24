import React from "react";
import { useState } from "react";
import usersData from "../../../../users.json";
import AddUser from "./AddUser";
const User = () => {
  const userInfo = usersData;
  const [isFormOpen, setIsFormOpen] = useState("scale-0")

  const openAddUserForm = () =>{
    setIsFormOpen("scale-100")
  }
  return (
    <div className="w-full grid grid-cols-3 gap-5">
      <div onClick={openAddUserForm} className="w-[22vw] border bg-blue-50 h-fit py-8 rounded-md flex flex-col items-center justify-center cursor-pointer">
        <p className="font-light text-4xl bg-white rounded-xl px-2 w-fit">+</p>
        <div className="py-4">
          <h1 className="text-center">Add New Users</h1>
          <p className="text-sm opacity-70 text-center pt-3">
            From here you can add mentors and students
          </p>
        </div>
      </div>

        {userInfo.users.map((Element, id) => (
          <div className="w-[22vw] border bg-blue-50 h-fit py-8 rounded-md flex flex-col items-center justify-center cursor-pointer" key={id} >{Element.FirstName}</div>
        ))}

        <AddUser isFormOpen = {isFormOpen} setIsFormOpen = {setIsFormOpen} />

    </div>
  );
};

export default User;
