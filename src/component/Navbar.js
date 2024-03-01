import React from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import "animate.css";
function Navbar() {
  return (
    <>
      <nav className="w-screen fixed top-0 bgTransparentBlack py-6 px-60 max-2xl:px-44 max-xl:px-24 max-sm:px-2 flex justify-between items-center z-20">
        <Link
          to="/"
          className="text-white text-4xl font-bold hover:no-underline"
        >
          My Portfolio
        </Link>
        <Navlinks />
      </nav>
    </>
  );
}
export default Navbar;
