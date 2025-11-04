import { Github } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const NavActiveStyle = ({ isActive }) =>
    isActive ? "bg-cyan-800 text-white" : "";
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm px-5 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className={NavActiveStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={NavActiveStyle} to="/apps">
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink className={NavActiveStyle} to="/installation">
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <Link
              to="/"
              className="flex justify-center items-center font-bold gap-1 btn-ghost text-2xl font-bold"
            >
              <img src={logo} alt="" className="h-10 w-10 " />
              Apps Vault
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={NavActiveStyle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={NavActiveStyle} to="/apps">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink className={NavActiveStyle} to="/installation">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"https://github.com/Tafsirchy"}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#7446E8] hover:to-[#AE7AF6] border-none flex gap-2 rounded-lg items-center duration-200 hover:scale-105"
          >
            <div className="bg-white rounded-full p-[2px] ">
              <Github className=" h-5 w-5 text-[#632EE3] " />
            </div>
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
