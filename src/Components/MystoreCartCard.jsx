import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeItem } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

const MystoreCartCard = ({ item, index }) => {
  const dispatch = useDispatch();
  const subTitle = `${item.title.substr(0, 18)}...`
  const subDesc = `${item.description.substr(0, 100)}...`;
  function removeFromCart() {
    dispatch(removeItem(item.id));
    toast.error("removed succesfully");
  }
  return (
    <div className=" w-96 bg-white text-black text-xs rounded-sm ">

      <div className="flex items-center justify-between py-4 my-3 ">

        <img src={item.image} className="object-contain aspect-square h-32" />

        <div className="flex flex-col gap-y-4">

          <h1 className="font-bold text-lg">{subTitle}</h1>
          <p>{subDesc}</p>

          <div className="flex justify-evenly items-center">
            <p className="text-green-400 font-bold">${item.price}</p>
            <div onClick={removeFromCart} className=" cursor-pointer px-6 bg-cyan-900 text-white py-1 rounded-full">
              <RiDeleteBin2Fill />
            </div>
          </div>


        </div>

      </div>

    </div>
  );
};

export default MystoreCartCard;
