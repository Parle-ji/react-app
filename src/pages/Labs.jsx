import React from "react";
import { useNavigate } from "react-router-dom";
const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
      <div> This is labs page</div>
      <button
        onClick={clickHandler}
        className="block mx-auto border-2 border-green-500  px-10 rounded-full mt-5"
      >
        move to about page
      </button>

      <button onClick={backHandler} className="block  mt-5 mx-auto border-2 border-green-500  px-10 rounded-full">
        go back
      </button>
    </div>
  );
};

export default Labs;
