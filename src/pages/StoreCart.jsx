import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MystoreCartCard from "../Components/MystoreCartCard";
import { useSelector } from "react-redux";

const StoreCart = () => {
  const { items } = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(items.reduce((acc, curr) => acc + curr.price, 0));
    //  const total = items.reduce((acc,curr) => acc + curr.price, 0 );
    //  const roundedPrice = total.Math.random()
    //   setTotalAmount(roundedPrice)
  }, [items]);

  return (
    <div className="  flex justify-around py-4">
      <div className="left-card">
        {items.length > 0 ? (
          items.map((item, index) => (
            <MystoreCartCard item={item} index={index} key={index} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center mx-auto ">
            <h2 className="font-bold"> Cart Empty</h2>
            <NavLink to={"/"}>
              <button className="px-4 py-1 text-sm  bg-green-600 rounded-full text-white">
                Shop now
              </button>
            </NavLink>
          </div>
        )}
      </div>

      {/* card right side */}

      {items.length > 0 ? (
        <div className="right-card flex flex-col gap-y-4 items-center">
          <div>
            {" "}
            <p className=" font-semibold mt-4">Total amount: ${totalAmount}</p>
            <button className="text-sm text-white px-4 bg-black rounded-full my-4 cursor-pointer">
              Checkout Now
            </button>
          </div>

          <div className="">
            <p className=" font-semibold capitalize">Your cart</p>
            <p>Summary</p>
            <p>
              Total items:
              <span className=" font-bold"> {items.length}</span>
            </p>
          </div>
        </div>
      ) : null}

      {/*  */}
    </div>
  );
};

export default StoreCart;

{
  /* <div className=" w-full flex ">

             <div className="store-card">
             {items.length > 0 ? ({items.map((item, index) => (
                <MystoreCartCard item={item} index={index} key={index} /> // Added key prop
              ))}
             </div>
    
          
        ) : (
          <div>
            <h2>Cart Empty</h2>
            <NavLink to={"/"}>
              <button>Shop now</button>
            </NavLink>
          </div>
        )}
      </div> */
}

//  items

// <div>
//             <p>Total amount: ${totalAmount}</p>
//           <button>Checkout Now</button>

//           <p>Your cart</p>
//           <p>Summary</p>
//           <p>
//             <span>Total items: {items.length}</span>
//           </p>
// </div>
