import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/Slices/CounterSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counterApp.value);
  const dispatch = useDispatch();
  return (
    <div className="w-11/12 flex justify-center items-center gap-x-8 bg-slate-800 mx-auto text-white min-h-screen select-none">
      <div className="w-11/12 flex flex-col justify-center items-center gap-y-4 bg-slate-800 mx-auto text-white min-h-screen select-none">
        <div className="flex gap-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-md transition-all"
            onClick={() => dispatch(increment())} // Dispatch increment action
          >
            +
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md transition-all"
            onClick={() => dispatch(decrement())} // Dispatch decrement action
          >
            -
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow-md transition-all"
            onClick={() => dispatch(reset())} // Dispatch reset action
          >
            Reset
          </button>
        </div>
        <p className="text-2xl font-bold bg-gray-700 px-6 py-3 rounded shadow-md">
          {count}
        </p>
      </div>
    </div>
  );
};

export default ReduxCounter;
