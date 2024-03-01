import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "animate.css";

function MobileMeun() {
  const [click, setclick] = useState(true);
  const handle_click = () => {
    if (click) {
      setclick(false);
    } else {
      setclick(true);
    }
  };
  setInterval(() => {
    if (window.innerWidth > 1024) {
      setclick(true);
    } else {
    }
  });
  return (
    <>
      <span
        className="hidden max-lg:flex z-30 absolute top-0 right-0"
        onClick={handle_click}
      >
        <i
          id="ham_burger"
          className="fa-solid fa-bars text-3xl text-green-500 p-3 bgTransparentBlack rounded-2xl cursor-pointer"
        ></i>
      </span>
      <div
        className={`{${
          click
            ? "fixed hidden top-16 w-screen py-4 px-2 bg-black bg-opacity-50 border-2 border-green-500 border-opacity-30 z-40 rounded-xl "
            : "fixed top-16 w-screen py-4 px-2 mt-20 bg-black bg-opacity-50 border-2 border-green-500 border-opacity-30 z-40 animate__animated animate__bounceInLeft rounded-xl "
        }}`}
      >
        <ul className="flex flex-col justify-center text-left space-y-6 ml-3">
          <NavLink
            onClick={handle_click}
            to="/"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={handle_click}
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={handle_click}
            to="/Resume"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            Resume
          </NavLink>
          <NavLink
            onClick={handle_click}
            to="/Services"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            Services
          </NavLink>
          <NavLink
            onClick={handle_click}
            to="/Portfolio"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={handle_click}
            to="/Contact"
            className={({ isActive }) =>
              `hover:text-green-500 duration-150 ${
                isActive
                  ? "text-green-500  before:w-2/5"
                  : " text-neutral-300 before:w-0 "
              } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </>
  );
}
export default MobileMeun;
