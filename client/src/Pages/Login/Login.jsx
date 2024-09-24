import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginBg, eyeClose, eyeShow } from "../../utils/utils";
import load from "../../assets/loader.gif";

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const togglePasswordView = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const validUser = users.find(user => user.Email === data.Email && user.Password === data.password);
    
    if (validUser) {
      toast.success("Mentor login successful", { theme: "dark" });
      setTimeout(() => {
        navigate("/mentor/dashboard");
        localStorage.setItem('mentorCredentials' , JSON.stringify({
          mentorID : data.Email
        }))
      }, 2000);
    } else if(data.Email === import.meta.env.VITE_ADMIN_EMAIL && data.password === import.meta.env.VITE_ADMIN_PASSWORD) {
      toast.success("Admin login successfull", { theme: "dark" });
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 2000);
      localStorage.setItem('adminCredentials' , JSON.stringify({
        adminID : data.Email
      }))
    } else {
      toast.error("wrong credentials" , {theme : "dark"})
    }
};


  return (
    <div className="mx-auto h-screen flex items-center justify-between">
      <div className="flex items-center justify-center w-[50vw] border-r border-black h-screen">
        <div className="w-[50%] relative">
          <div>
            <h1 className="text-4xl font-bold leading-[5rem]">Welcome Back!</h1>
            <h2 className="text-3xl font-bold text-zinc-700 pb-4">Keep your online <br /> management organized</h2>
            <hr className="border-zinc-400" />
            <form className="pt-12" onSubmit={handleSubmit(onSubmit)}>
              <label>Email ID:</label> <br />
              <input
                {...register("Email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="ring-1 ring-zinc-500 rounded-lg outline-none mb-4 mt-3 px-4 py-2 w-full focus:ring-2 transition-all duration-200"
                type="text"
                placeholder="example@gmail.com"
              />
              {errors.Email && (
                <p className="text-xs text-red-600">{errors.Email.message}</p>
              )}
              <br />
              <label>Password:</label>
              <br />
              <div className="flex items-center justify-between w-full ring-1 ring-zinc-500 px-4 mb-2 mt-3 py-2 rounded-lg gap-2">
                <input
                  {...register("password", {
                    required: { value: true, message: "Password cannot be empty" },
                  })}
                  className="w-full outline-none"
                  type={passwordVisibility ? "password" : "text"}
                  placeholder="********"
                />
                <img
                  onClick={togglePasswordView}
                  className="w-6 cursor-pointer"
                  src={passwordVisibility ? eyeClose : eyeShow}
                  alt="Toggle Password Visibility"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
              {isSubmitting ? (
                <img className="w-32 h-28 mx-auto" src={load} alt="Loading..." />
              ) : (
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-black w-full py-2 mt-8 rounded-lg text-white text-xl"
                >
                  Log in
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="w-[50vw]">
        <img className="h-screen" src={loginBg} alt="Login Background" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
