import React from "react";

const Button = ({ styles }) => (
  <a href="#aboutus">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-pink-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
  </a>
);

export default Button;
