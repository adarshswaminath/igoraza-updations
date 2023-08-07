import React from "react";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import styles from "../../style";

function Contact() {
  const heading1 = 'text-sm font-bold text-gradient';
  const heading2 = 'text-gray-300';
  return (
    <main>
      <div className="header p-2">
        <h2
          className={`text-white font-poppins font-semibold text-[40px] text-center`}
        >
          Contact IGORAZA Private Limited
        </h2>
        <p className={`${styles.paragraph} text-center `}>
          Magna enim commodo id nostrud labore sunt eiusmod reprehenderit
          pariatur aliquip. Enim nostrud ullamco occaecat laborum non in nulla
          magna ad. Occaecat occaecat labore culpa esse reprehenderit cillum
          ullamco.
        </p>
      </div>
      {/* @dev address and map */}
      <div className="mt-12">
        <h3
          className={`text-white font-poppins font-semibold text-[30px] text-left mb-2`}
        >
          {" "}
          Your Product Development Center Is Here
        </h3>
        <div className="grid md:grid lg:flex gap-6">
          {/* section contains address and contact detils */}
          <div className="grid w-full">
            {/* address box  */}
            <div className=" bg-black-gradient-2 rounded-lg shadow-full  p-8">
              <h3 className={`${heading1}`}>Address</h3>
              <h4 className={`${heading2}`}>India</h4>
              <pre className="mt-4 grid text-white">
                <span>Igoraza Private Limited </span>
                <span>The Atomic Near Technopark Phase 1</span>
                <span>Trivandrum, Kerala 695581</span>
              </pre>
              <div className="mt-4 text-white">
                KSUM, G3B, Thejaswini, Technopark, Trivandrum, KL - 695581
              </div>
            </div>
            {/* address box close */}
            {/* phone number box opens */}
            <div className="bg-black-gradient-2 rounded-lg shadow-full p-8 mt-4">
              <h3 className={`${heading1}`}>Phone Number</h3>
              <h3 className={`${heading2}`}>India</h3>
              <pre className="mt-4 grid text-white">
                <span>Sales: +917736886026 </span>
                <span>HR: +917736886026 </span>
              </pre>
            </div>
            {/* phone number box close */}
            {/* email box opens */}
            <div className="bg-black-gradient-2 rounded-lg shadow-full p-8 mt-4">
              <h3 className={`${heading1}`}>Email Adderess</h3>
              <h3 className={`${heading2}`}>India</h3>
              <pre className="mt-4 grid text-white">
                <span>Project Enquiry: <a href="mailto:teamigoraza@gmail.com" className="hover:text-[#ff367c]">teamigoraza@gmail.com</a> </span>
                <span>Job Opportunity: <a href="mailto:teamigoraza@gmail.com" className="hover:text-[#ff367c]">teamigoraza@gmail.com</a>  </span>
              </pre>
            </div>
            {/* email box closes */}
          </div>
          {/* div for the map */}
          <div className="w-full">
          <div className="p-8 bg-black-gradient-2 rounded-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7714.974593656704!2d76.32945895489713!3d9.461524966920472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884cfb4ffd337%3A0xeff01b3ae43a991!2sCollege%20of%20Engineering%20and%20Management%20Punnapra!5e1!3m2!1sen!2sin!4v1632761481265!5m2!1sen!2sin" width="500" height="400"  allowfullscreen="" loading="lazy"></iframe>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
