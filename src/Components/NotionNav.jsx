import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const NotionNav = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="h-14 px-6 font-bold py-2 w-full bg-orange-800 rounded flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} width={160} height={32} loading="lazy" />
      </Link>

      <nav className="hidden md:flex  ">
        <ul className="flex gap-4  text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login-signup-logout-dashboard */}
      <div className="flex gap-4 text-white items-center  ">
        {!isLoggedIn && (
          <Link to={"/login"}>
            <button className="bg-slate-800 text-white py-[2px] px-4 rounded-lg border border-slate-800">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to={"/signup"}>
            <button className="bg-slate-800 text-white py-[2px] px-4 rounded-lg border border-slate-800">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/"}>
            <button
              className="bg-slate-800 text-white py-[2px] px-4 rounded-lg border border-slate-800"
              onClick={() => (
                setIsLoggedIn(false), toast.success("logout ho gya")
              )}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/dashboard"}>
            <button className="bg-slate-800 text-white py-[2px] px-4 rounded-lg border border-slate-800">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NotionNav;
