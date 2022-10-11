import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-slate-400 flex justify-around items-center  h-16">
        <p className=" text-2xl font-bold">Quiz Station</p>
        <div className="text-lg colo text-white">
          <Link className=" ml-4" to={"/"}>
            Home
          </Link>
          <Link className=" ml-4" to={"/blog"}>
            Blog
          </Link>
          <Link className=" ml-4" to={"/statistics"}>
            Statistics
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
