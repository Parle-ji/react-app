import React from "react";
import { FcGoogle } from "react-icons/fc";
import NotionSignupForm from "./NotionSignupForm";
import NotionLoginForm from "./NotionLoginForm";
import frameImg from "../assets/frame.png";
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="w-full flex flex-col max-w-[1100px] py-12 mx-auto gap-x-12 gap-y-0 justify-evenly md:flex-row">
      <div className="w-[500px] mx-0  flex flex-col">
        <h1 className="font-bold leading-6 text-2xl">{title}</h1>
        <p className="text-[1.2rem] leading-6 mt-4">
          <span className="">{desc1}</span>
          <br /> <span className="text-blue-400">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <NotionSignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <NotionLoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-2 gap-x-2">
          <div className="h-[1px] w-1/2 bg-black "></div>
          <p className="font-bold leading-3"> OR</p>
          <div className="h-[1px] w-1/2 bg-black "></div>
        </div>

        <button className="flex border  w-full  items-center justify-center rounded font-medium gap-2 bg-slate-700 py-2 px-3 gap-x-2 mt-4">
          <FcGoogle /> signup with google
        </button>
      </div>

      <div className="md:relative w-[500px] hidden md:block">
        <img
          src={frameImg}
          height={400}
          width={400}
          loading="lazy"
          className="md:absolute rounded hidden md:block"
          alt="Frame decoration"
        />
        <img
          src={image}
          height={400}
          width={400}
          loading="lazy"
          className="md:absolute rounded md:-top-3 md:-left-3 "
          alt="Main content"
        />
      </div>
    </div>
  );
};

export default Template;
