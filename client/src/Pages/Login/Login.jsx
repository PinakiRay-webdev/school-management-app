import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { loginBg, eyeClose, eyeShow } from "../../utils/utils";
import { Navigate, useNavigate } from "react-router-dom";
import load from "../../assets/loader.gif";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);

    if (data.userEmail === import.meta.env.VITE_USER_EMAIL) {
      toast.success('login successfull' , {theme: 'dark'})
      setTimeout(()=>{
        navigate('/admin/dashboard')
      } , 1000)
    }
    else{
      toast.error('wrong credentials' , {theme: "dark"})
    }
  };

  const togglePasswordView = () => {
    setPasswordVisibility(!passwordVisibility);
  };


  return (
    <div className="mx-auto h-screen flex items-center justify-between">

      {/* left section  */}
      <div className="flex items-center justify-center w-[50vw] border-r border-black h-screen">
        {/* form section  */}
        <div className="w-[50%] relative">
          <div>
            <h1 className="text-4xl font-bold leading-[5rem]">
              Welcome Back !
            </h1>
            <h2 className="text-3xl font-bold text-zinc-700 pb-4">
              Keep your online <br /> management organized
            </h2>
            <hr className="border-zinc-400" />
            <form className="pt-12" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="">Email ID:</label> <br />
              <input
                {...register("userEmail", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern:{
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email"
                  },
                })}
                className="ring-1 ring-zinc-500 rounded-lg outline-none mb-4 mt-3 px-4 py-2 w-full focus:ring-2 transition-all duration-200"
                type="text"
                placeholder="example@gmail.com"
              />
              {errors.userEmail && (
                <p className="text-xs text-red-600">
                  {errors.userEmail.message}
                </p>
              )}
              <br />
              <label className="" htmlFor="">
                Password:
              </label>
              <br />
              <div className="flex items-center justify-between w-full ring-1 ring-zinc-500 px-4 mb-2 mt-3 py-2 rounded-lg gap-2">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password cannot be empty",
                    },
                  })}
                  className="w-full outline-none"
                  type={passwordVisibility ? "password" : "text"}
                  placeholder="********"
                />
                <img
                  onClick={togglePasswordView}
                  className="w-6 cursor-pointer"
                  src={passwordVisibility ? eyeClose : eyeShow}
                  alt=""
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">Password cannot be empty</p>
              )}
              <div className="flex items-center gap-2 pt-1">
                <input type="checkbox" />
                <p className="text-sm text-zinc-500">Keep me loged in</p>
              </div>
              {isSubmitting ? (
                <img className="w-32 h-28 mx-auto" src={load} alt="" />
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

      {/* right section  */}
      <div className="w-[50vw]">
        <img className="h-screen" src={loginBg} alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
