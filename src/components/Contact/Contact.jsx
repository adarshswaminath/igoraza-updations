import React from "react";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-4xl text-white" aria-label="Contact Information">
      <h2 className="">Contact</h2>
      <div className="grid grid-cols-1 gap-4 mt-6">
        <a href="mailto:igoraza@gmail.com" className="flex items-center gap-2 underline text-2xl">
          <AiOutlineMail className="text-xl" />
          Email: igoraza@gmail.com
        </a>
        <a href="https://igoraza.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline text-2xl">
          <AiOutlineGlobal className="text-xl" />
          Website: https://igoraza.com
        </a>
        <a href="tel:+1234567890" className="flex items-center gap-2 underline text-2xl">
          <BsTelephone className="text-xl" />
          Phone: +1 (234) 567-890
        </a>
      </div>
    </section>
  );
}

export default Contact;
