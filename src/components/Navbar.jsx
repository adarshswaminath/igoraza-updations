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
      <ul className="list-none sm:flex gap-12 hidden justify-end items-center flex-1 text-white">
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <a href="#" className="hover:text-dimWhite relative">Home</a>
        </li>
        {/* services */}
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <Link
            to="/service" target="_blank"
            className="hover:text-dimWhite relative"
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {isHovering === "Services" && (
              <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2  h-auto w-[655px] rounded-lg border border-white shadow-md mt-3">
              <div class="p-2 ">
                <h3 class="text-3xl text-dimWhite text-center">Our Services</h3>
                <div class="p-2 grid grid-cols-4 gap-5 text-white font-bold">
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">College Projects</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Cyber Security</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Designing</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Digital Marketing</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">E-Commerce Platform</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">EdTech</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Machine Learning</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Media Production</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Robotics & IoT</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Web Application</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Website Designing</a>
                  <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Website Reconstruction</a>
                </div>

              </div>
            </div>
            
            )}
          </Link>
        </li>
        {/* programs */}
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <a
            href="#"
            className="hover:text-dimWhite relative"
            onMouseEnter={() => handleMouseEnter("Programs")}
            onMouseLeave={handleMouseLeave}
          >
            Programs
            {isHovering === "Programs" && (
                <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2  h-auto w-[655px] rounded-lg border border-white shadow-md mt-3">
                <div class="p-2 ">
                  <h3 class="text-3xl text-dimWhite text-center">Our Programs</h3>
                  <div class="p-2 grid grid-cols-4 gap-5 text-white font-bold">
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">College Projects</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Cyber Security</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Designing</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Digital Marketing</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">E-Commerce Platform</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">EdTech</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Machine Learning</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Media Production</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Robotics & IoT</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Web Application</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Website Designing</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Website Reconstruction</a>
                  </div>
  
                </div>
              </div>
            )}
          </a>
        </li>
        {/* Portfolio */}
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <a
            href="#"
            className="hover:text-dimWhite relative"
            onMouseEnter={() => handleMouseEnter("Portfolio")}
            onMouseLeave={handleMouseLeave}
          >
            Portfolio
            {isHovering === "Portfolio" && (
                <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2  h-auto w-[400px] rounded-lg border border-white shadow-md mt-3">
                <div class="p-2 ">
                  <h3 class="text-3xl text-dimWhite text-center">Our Portfolio</h3>
                  <div class="p-2 grid  gap-5 text-white font-bold">
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">College Projects</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Cyber Security</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Designing</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Digital Marketing</a>
                 </div>
  
                </div>
              </div>
            )}
          </a>
        </li>
        {/* Careers */}
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <a
            href="#"
            className="hover:text-dimWhite relative"
            onMouseEnter={() => handleMouseEnter("Careers")}
            onMouseLeave={handleMouseLeave}
          >
            Careers
            {isHovering === "Careers" && (
                <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2  h-auto w-[300px] rounded-lg border border-white shadow-md mt-3">
                <div class="p-2 ">
                  <h3 class="text-3xl text-dimWhite text-center">Our Careers</h3>
                  <div class="p-2 grid gap-5 text-white font-bold">
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">College Projects</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Cyber Security</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Designing</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Digital Marketing</a>
                </div>
  
                </div>
              </div>
            )}
          </a>
        </li>
        {/* Blog */}
        <li className="font-poppins font-bold cursor-pointer text-[16px]">
          <a
            href="#"
            className="hover:text-dimWhite relative"
            onMouseEnter={() => handleMouseEnter("Blog")}
            onMouseLeave={handleMouseLeave}
          >
            Blog
            {isHovering === "Blog" && (
                <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2  h-auto w-[200px] rounded-lg border border-white shadow-md mt-3">
                <div class="p-2 ">
                  <h3 class="text-3xl text-dimWhite text-center">Our Blogs</h3>
                  <div class="p-2 grid  gap-5 text-white font-bold">
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">College Projects</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Cyber Security</a>
                    <a href="" class=" border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Designing</a>
                 </div>
  
                </div>
              </div>
            )}
          </a>
        </li>
        {/* Contact */}
        <li className="font-poppins font-bold cursor-pointer text-[16px] relative">
      <a
        href="#"
        className="hover:text-dimWhite relative"
        onMouseEnter={() => handleMouseEnter("Contact")}
        onMouseLeave={handleMouseLeave}
      >
        Contact
        {isHovering === "Contact" && (
          <div class="absolute bg-black-gradient top-full left-1/2 transform -translate-x-1/2 h-auto w-[150px] rounded-lg border border-white shadow-md mt-3">
            <div class="p-2">
              <h3 class="text-3xl text-dimWhite text-center">Contacts</h3>
              <div class="p-2 grid gap-5 text-white font-bold">
                <a href="" class="border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">AI & Automation</a>
                <a href="" class="border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Animation</a>
                <a href="" class="border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">App Development</a>
                <a href="" class="border-[#ff2268] hover:text-[#ff2268] transition border-b border-r">Blockchain & Web3</a>
              </div>
            </div>
          </div>
        )}
      </a>
    </li>
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
