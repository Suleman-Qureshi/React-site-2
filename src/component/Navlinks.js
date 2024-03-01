import React from "react";
import { NavLink } from "react-router-dom";
function Navlinks() {
  return (
    <ul className="text-neutral-300 tracking-wide flex space-x-10 text-lg max-lg:hidden">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/Resume"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/Portfolio"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `hover:text-white ${
            isActive
              ? "text-white activeLink before:w-2/5"
              : " text-neutral-300 before:w-0 navLink"
          } cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`
        }
      >
        Contact
      </NavLink>
    </ul>
  );
}
export default Navlinks;
