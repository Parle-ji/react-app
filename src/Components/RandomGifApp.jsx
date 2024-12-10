import React from "react";
import RandomGifs from "./RandomGifs";
import GifsTag from "./GifsTag";

const RandomGifApp = () => {
  return (
    <div className='max-w-[1200px] relative gap-y-4 text-white min-h-screen w-full flex flex-col items-center object-cover object-center  bg-slate-400 bg-[url("https://images.unsplash.com/photo-1733684964669-bfdf0f0747e6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>

        <h1 className="text-center text-2xl  opacity-50 mt-4 w-10/12 rounded-lg  top-4 block bg-white text-black font-bold uppercase  ">Random Gifs</h1>

        {/* random gifs */}
        <RandomGifs/>

        {/* GFs tag */}
        <GifsTag/>

    </div>
  );
};

export default RandomGifApp;
