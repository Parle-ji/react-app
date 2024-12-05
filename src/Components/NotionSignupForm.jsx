import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NotionSignupForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const clickHandler = () => {
    setShowPassword((prev) => !prev);
  };
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("password match nhi huaa");
      return;
    }
    setIsLoggedIn(true);
    toast.success("account created");
    navigate("/dashboard");
  }
  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword((prev) => !prev);
  }
  return (
    <div>
      {/* student instructor tab */}
      <div className="flex rounded-full w-max my-6 gap-x-1 bg-slate-300 ">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-black text-white px-4 rounded-full"
              : "bg-transparent"
          }  py-2 px-5 rounded-full transition-all duration-300`}
        >
          student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-black text-white rounded-full px-4"
              : "bg-transparent"
          }  py-2 px-5 rounded-full transition-all duration-300`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name or last name */}
        <div className="flex items-center justify-between gap-4">
          {/* First Name */}
          <label className="flex-1">
            <p className="text-[.8rem] text-white mb-1 leading-5">
              First Name <sup className="text-red-600">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter first name"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              className="rounded text-black w-full py-1 px-2 border-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </label>

          {/* Last Name */}
          <label className="flex-1">
            <p className="text-[.8rem] text-white mb-1 leading-5">
              Last Name <sup className="text-red-600">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter last name"
              onChange={changeHandler}
              name="lastName"
              value={formData.lastName}
              className="rounded text-black w-full py-1 px-2 border-2 border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </label>
        </div>

        {/* email or password */}
        <div>
          <label>
            <p className="text-[.8rem] text-white mb-1 leading-5 ">
              Email address <sup className="text-red-600">*</sup>
            </p>
            <input
              onChange={changeHandler}
              name={"email"}
              required
              type="email"
              value={formData.email}
              placeholder="email address"
              className="rounded text-black w-full  py-1 border-b-black border-2 outline-none"
            />
          </label>

          {/* create password and confirm password */}
          <div className="flex items-center justify-between gap-4">
            <label className="relative flex-1">
              <p className="text-[.8rem] text-white mb-1 leading-5 ">
                password<sup className="text-red-600">*</sup>
              </p>
              <input
                onChange={changeHandler}
                required
                name={"password"}
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="rounded text-black w-full py-1 px-2 border-2 border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <span
                onClick={clickHandler}
                className=" absolute right-3 top-[35px] cursor-pointer"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
            {/* confirm password */}
            <label className="relative flex-1">
              <p className="text-[.8rem] text-white mb-1 leading-5 ">
                confirm password<sup className="text-red-600">*</sup>
              </p>
              <input
                onChange={changeHandler}
                required
                name={"confirmPassword"}
                value={formData.confirmPassword}
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                className="rounded text-black w-full py-1 px-2 border-2 border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className=" absolute right-3 top-[35px] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </label>
          </div>
        </div>
        <button className="text-center bg-yellow-400 mt-6 w-full capitalize rounded font-medium text-black py-2 px-8">
          create account
        </button>
      </form>
    </div>
  );
};

export default NotionSignupForm;
