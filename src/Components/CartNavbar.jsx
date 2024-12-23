import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const CartNavbar = () => {
  return (
    <nav className="flex capitalize justify-between items-center w-11/12 max-w-[1200px] mx-auto absolute top-0 left-0 right-0   ">
      <NavLink to={'/'}>
        <p className="font-bold">My store</p>
      </NavLink>
      <div className="flex justify-center items-center gap-x-4">
    <NavLink to={'/'}>
    <p className="font-bold">home</p>
    </NavLink>
      <NavLink to={"/cart"}>
        <FaShoppingCart/>
      </NavLink>
      </div>
    </nav>
  );
};

export default CartNavbar;
