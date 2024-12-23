import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeItem, addItem } from "../Redux/Slices/CartSlice";
export const StoreCard = ({ product, id }) => {
  const subStr = `${product.title.substring(0, 17)}...`;
  const subDesc = `${product.description.substring(0, 80)}...`;
  const items = useSelector((state) => state.cart.items);

  console.log("item ko print krne ki pryash", items);

  // const items= []

  const dispatch = useDispatch();
  function addToCart() {
    dispatch(addItem(product));
    toast.success("added successfully");
  }

  function removeFromCart() {
    dispatch(removeItem(product.id));
    toast.error("removed succesfully");
  }
  return (
    <div
      className="w-[240px]  bg-white text-xs -z-0 rounded hover:shadow-black shadow-2xl hover:shadow-2xl  hover:z-50 hover:scale-105 transition-all duration-300 aspect-square"
      key={product.id}
    >
      <div className="flex flex-col items-center  justify-between w-32 mx-auto">
        <p className="font-bold leading-3 my-2">{subStr}</p>
        <p>{subDesc}</p>
        <img src={product.image} className="object-contain aspect-square " />
      </div>
      <div className="flex justify-between items-center px-4 my-2">
        <p className="text-green-400 font-bold"> ${product.price}</p>

        <div className="">
          {/* {selectedProduct ? "Remove Product" : "Add Product"} */}
          {items.some((p) => p.id === product.id) ? (
            <button
              className=" px-4 bg-cyan-900 text-white rounded-full"
              onClick={removeFromCart}
            >
              {" "}
              Remove product
            </button>
          ) : (
            <button
              className=" px-4 bg-cyan-900 text-white rounded-full"
              onClick={addToCart}
            >
              {" "}
              Add product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
