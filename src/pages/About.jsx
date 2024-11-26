import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  function backHandler(){
    navigate(-1)
  }
  function clickHandler(){
    navigate('/suport')
  }
  return (
    <div>
      <p>This is about page</p>
      <button
        onClick={clickHandler}
        className="block mx-auto border-2 border-green-500  px-10 rounded-full mt-5"
      >
        move to support page
      </button>
      <button
        onClick={backHandler}
        className="block mx-auto border-2 border-green-500  px-10 rounded-full mt-5"
      >
        go back
      </button>
    </div>
  );
};

export default About;
