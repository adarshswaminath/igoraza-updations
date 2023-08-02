import React from "react";
import hero from "../../assets/service.png";
import styles from "../../style";
import ServiceCard from "./ServiceCard";
import {data} from "./servicedata"

function Service() {

  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[100.8px] leading-[75px]">
              Our {/* <br className="sm:block hidden" />{" "} */}
              <span className="text-gradient">Services</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
      IGORAZA
    </h1> */}
          <p className={`${styles.paragraph} max-w-[540px] mt-4 text-[16px]`}>
            Start with something simple and small, then expand over time
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={hero}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>
      {/* hero section close */}
      <div className="p-4 md:p-8 lg:p-12 xl:p-16 text-white ">
        {/* first full width box  */}
        <div
          className="p-12 bg-black-gradient mt-6 rounded-lg shadow-lg"
          id="ai"
        >
          <h3 className="text-2xl font-bold text-center text-white">
            AI & Automation
          </h3>
          <p className="mt-4 text-center text-white">
            Adipisicing Lorem cillum cupidatat do nulla veniam id Lorem
            excepteur. Aute minim culpa irure amet quis. Ipsum sit eu commodo
            proident ullamco anim sint laboris consequat est cupidatat. Enim
            laborum exercitation qui eiusmod excepteur dolor excepteur velit
            aliquip aute duis veniam. Consectetur id voluptate velit ex et
            proident esse id ex proident fugiat eiusmod pariatur adipisicing.
          </p>
          <div className="flex justify-center mt-6">
            <button className="px-8 py-4 bg-pink-gradient rounded-lg text-white font-bold">
              Know More
            </button>
          </div>
        </div>
        {/* @dev two box with half width*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {data.map((value, index) => (
              <ServiceCard 
              key={value.id}
              title={value.title}
              description={value.description} />
            ))}
        </div>

        <div
          className="p-12 bg-black-gradient mt-6 rounded-lg shadow-lg"
          id="ai"
        >
          <h3 className="text-2xl font-bold text-center text-white">
            Web Development
          </h3>
          <p className="mt-4 text-center text-white">
            Adipisicing Lorem cillum cupidatat do nulla veniam id Lorem
            excepteur. Aute minim culpa irure amet quis. Ipsum sit eu commodo
            proident ullamco anim sint laboris consequat est cupidatat. Enim
            laborum exercitation qui eiusmod excepteur dolor excepteur velit
            aliquip aute duis veniam. Consectetur id voluptate velit ex et
            proident esse id ex proident fugiat eiusmod pariatur adipisicing.
          </p>
          <div className="flex justify-center mt-6">
            <button className="px-8 py-4 bg-pink-gradient rounded-lg text-white font-bold">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
