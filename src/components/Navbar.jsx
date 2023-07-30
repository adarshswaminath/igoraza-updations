import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import icon from "../assets/icon.png";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isHovering, setIsHovering] = useState(""); // State for hover effect

  const handleMouseEnter = (title) => {
    setIsHovering(title);
  };

  const handleMouseLeave = () => {
    setIsHovering("");
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <img src={icon} alt="hoobank" className="w-[58px] h-[55px]" />
        <img src={logo} alt="hoobank" className="w-[148px] h-[65px]" />
      </div>
      {/* desktop view */}
      <ul className="list-none sm:flex gap-4 hidden justify-end items-center flex-1 text-white">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-poppins font-bold cursor-pointer text-[16px]"
          >
            <a
              href={`#${nav.id}`}
              className="hover:text-dimWhite relative"
              onMouseEnter={() => handleMouseEnter(nav.title)}
              onMouseLeave={handleMouseLeave}
            >
              {nav.title}
              {isHovering === nav.title && (
                 <div className="absolute left-1/2 transform -translate-x-1/2 bg-black-gradient px-32 py-32 rounded-lg border border-white shadow-md mt-2">
                 <h3 className="text-3xl text-white">Sample </h3>
                 {/* Add more content as needed */}
               </div>
              )}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[32px] h-[32px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-bold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
