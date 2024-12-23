import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const CartNavbar = () => {
  return (
    <nav className="flex text-white justify-between items-center w-11/12 max-w-[1200px] mx-auto">
      <NavLink to={'/'}>
        <p>My store</p>
      </NavLink>
      <div className="flex justify-center items-center gap-x-4">
    <NavLink to={'/'}>
    <p>home</p>
    </NavLink>
      <NavLink to={"/cart"}>
        <FaShoppingCart/>
      </NavLink>
      </div>
    </nav>
  );
};

export default CartNavbar;
