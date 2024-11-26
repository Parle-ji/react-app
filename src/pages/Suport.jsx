import React from "react";
import { useNavigate } from "react-router-dom";
const Suport = () => {
  const navigate = useNavigate();

  function backHandler() {
    navigate(-1);
  }
  function clickHandler(){
    navigate('/labs')
  }
  return (
    <div>
      <p>This is support page</p>

      <button
        onClick={clickHandler}
        className="block mx-auto border-2 border-green-500  px-10 rounded-full mt-5"
      >
        move to labs page
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

export default Suport;
