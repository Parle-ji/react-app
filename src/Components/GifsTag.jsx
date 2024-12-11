import React, { useState } from "react";
import Spinner from "./Spinner";
import useGifs from "./useGifs";
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const GifsTag = () => {
  const [tag, setTag] = useState("");
  const { Gif, loading, fetchData } = useGifs(tag);

  function changeHandler(r) {
    setTag(r.target.value);
  }
  return (
    <div className=" border-2 flex flex-col items-center justify-around w-1/2 max-w-[500px] h-[290px] bg-opacity-50 bg-white rounded-lg">
      <p className=" text-2xl underline uppercase text-black font-semibold text-center">
        random {tag} gif
      </p>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={Gif}
          className=" h-1/2 max-h-[290px] w-1/2 rounded object-cover object-center"
        />
      )}

      <input
        type="text"
        name=""
        value={tag}
        className="w-1/2 rounded-md py-1 text-center text-black"
        onChange={changeHandler}
      />

      <button
        onClick={() => fetchData(tag)}
        className="py-2 px-7 rounded-full  bg-black bg-opacity-80 block"
      >
        Generate
      </button>
    </div>
  );
};

export default GifsTag;
