import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddUser = ({ isFormOpen, setIsFormOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add reset method to clear form
  } = useForm();
  
  const [loading, setLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const url = 'http://localhost:3000/users';

    setLoading(true); // Set loading to true
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Email: data.UserMail,
          Role: data.UserRole,
          Password: data.UserPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      reset(); // Clear form fields on successful submission
      setSuccessMessage("User added successfully!"); // Success message
    } catch (error) {
      setErrorMessage(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  const closeForm = () => {
    setIsFormOpen("scale-0");
  };

  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#cae9ff] h-[70vh] z-10 w-[30vw] rounded-xl transition-all duration-100 ${isFormOpen}`}
    >
      <header>
        <p onClick={closeForm} className="text-right cursor-pointer">
          Close
        </p>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-6 py-2 relative h-[90%]"
      >
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        <div className="flex justify-between items-center gap-4 mt-4">
          <div>
            <label className="text-[#1b4965] font-semibold" htmlFor="FirstName">
              First Name
            </label>
            <input
              {...register("FirstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="py-2 outline-none px-4 rounded-lg w-full ring-1 ring-[#1b4965]"
              type="text"
              placeholder=""
            />
            {errors.FirstName && (
              <p className="text-xs text-red-600">{errors.FirstName.message}</p>
            )}
          </div>
          <div>
            <label className="text-[#1b4965] font-semibold" htmlFor="LastName">
              Last Name
            </label>
            <input
              {...register("LastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              className="py-2 outline-none px-4 rounded-lg w-full ring-1 ring-[#1b4965]"
              type="text"
              placeholder=""
            />
            {errors.LastName && (
              <p className="text-red-600 text-xs">{errors.LastName.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="font-semibold text-[#1b4965]" htmlFor="UserMail">
            Email
          </label>
          <input
            {...register("UserMail", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
            className="py-2 outline-none px-4 rounded-lg w-full ring-1 ring-[#1b4965]"
            type="email"
            placeholder=""
          />
          {errors.UserMail && (
            <p className="text-xs text-red-600">{errors.UserMail.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="font-semibold text-[#1b4965]" htmlFor="UserRole">
            Role
          </label>
          <input
            {...register("UserRole", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className="py-2 outline-none px-4 rounded-lg w-full ring-1 ring-[#1b4965]"
            type="text"
            placeholder="student / mentor"
          />
          {errors.UserRole && (
            <p className="text-xs text-red-600">{errors.UserRole.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="font-semibold text-[#1b4965]" htmlFor="UserPassword">
            Set password
          </label>
          <input
            {...register("UserPassword", {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            className="py-2 outline-none px-4 rounded-lg w-full ring-1 ring-[#1b4965]"
            type="password"
          />
        </div>

        <button
          type="submit"
          className={`bg-black w-[90%] mx-auto text-white absolute bottom-4 py-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
