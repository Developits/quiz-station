import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-[#B1B2FF] flex justify-around items-center  h-16">
        <p className=" text-2xl font-bold">Quiz Station</p>
        <div className="text-lg colo text-white">
          <NavLink className=" ml-4" to={"/"}>
            Home
          </NavLink>
          <NavLink className=" ml-4" to={"/blog"}>
            Blog
          </NavLink>
          <NavLink className=" ml-4" to={"/statistics"}>
            Statistics
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
