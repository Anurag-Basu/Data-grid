import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex p-3 bg-blue-200  ">
      <h1 className="text-2xl font-semibold">DataGrid</h1>
     
      <div className="flex items-center justify-end  w-full p3">
        <Link to="/">
          {" "}
          <span className="px-5"> Users </span>
        </Link>
        <Link to="/posts">
          {" "}
          <span className="px-5"> Posts </span>
        </Link>
        <Link to="comments">
          {" "}
          <span className="pr-14 pl-5"> Comments </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
