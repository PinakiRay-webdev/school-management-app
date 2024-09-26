import React from "react";
import userData from "../../../users.json";
import { FaBell, FaUser } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const admin = JSON.parse(localStorage.getItem("adminCredentials"));
  const mentor = JSON.parse(localStorage.getItem("mentorCredentials"));

  const user = admin || mentor;
  const userInfo = userData;

  const userName = userInfo.users.find(
    (Name) => Name.Email === user.mentorID
  );

  return (
    <div className="w-full px-8 flex items-center justify-between py-3 bg-slate-200">
      <h1 className="text-xl">Brand</h1>
      <input
        type="text"
        placeholder="search"
        className="rounded-xl py-2 px-1 w-[40vw]"
      />

      <div className="flex gap-4 items-center">
        <p className="p-1 bg-white rounded-xl text-xl">
          <FaBell />
        </p>
        <p className="p-1 bg-white rounded-xl text-xl">
          <MdLightMode />
        </p>

        <div className="flex items-center gap-2 p-1 rounded-xl bg-white">
          <p className="text-xl">
            <FaUser />
          </p>
          <div>
            <p className="text-sm">Hi, {userName ? userName.FirstName : user.adminID}</p>
            <p className="text-xs font-semibold opacity-60">
              {admin ? "Admin" : "Mentor"}
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
