import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MystoreCartCard from "../Components/MystoreCartCard";
import { useSelector } from "react-redux";

const StoreCart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc+curr.price));
  },[cart])
  return (
    <div className="text-center text-white">
      <div>
        {
          (cart.length = 0 ? (
            <div>
              <div>
                {cart.map((item, index) => (
                  <MystoreCartCard item={item} index={index} />
                ))}
              </div>

              <div>
                <p>Your cart</p>
                <p>Summary</p>
                <p>
                  <span>Total itmes: {cart.length}</span>
                </p>
              </div>

                <div>
                <p>Total amount: ${totalAmount}</p>
                <button>Checkout Now</button>
                </div>


            </div>
          ) : (
            <div>
              <h2>cart empty</h2>
              <NavLink to={"/"}>
                <button>Shop now</button>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default StoreCart;
