import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NotionLoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  function clickHandler() {
    setShowPassword((prev) => !prev);
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    toast.success("logged in");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col gap-y-4 w-full mt-6"
    >
      <label className="w-fullx ">
        <p className="text-[.8rem] text-white mb-1 leading-5 ">
          Email address <sup className="text-red-500">*</sup>
        </p>
        <input
          onChange={changeHandler}
          name={"email"}
          required
          type="email"
          value={formData.email}
          placeholder="email address"
          className="rounded text-white w-full p-[12px] border-b-black border-2 outline-none"
        />
      </label>

      <label className="w-full relative ">
        <p className="text-[.8rem] text-white mb-1 leading-5">
          password<sup className="text-red-500">*</sup>
        </p>
        <input
          onChange={changeHandler}
          required
          name={"password"}
          value={formData.password}
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="rounded text-black w-full p-[12px] border-b-black border-2 outline-none"
        />

        {/* icon */}
        <span onClick={clickHandler} className=" absolute right-3 top-[35px] cursor-pointer">
          {showPassword ? <AiOutlineEyeInvisible fontSize={'1.4rem'} /> : <AiOutlineEye fontSize={'1.4rem'} />}
        </span>
        <Link to="#">
          <p className="text-right  text-blue-400 mt-1 text-xs">forgot password</p>
        </Link>
      </label>

      <button className="text-center bg-yellow-400 mt-6 rounded font-medium text-black py-2 px-8">Sign In</button>
    </form>
  );
};

export default NotionLoginForm;
