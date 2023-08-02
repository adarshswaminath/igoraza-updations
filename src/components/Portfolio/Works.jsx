import React, { useState } from "react";
import styles from "../../style";
import { data } from "./portfoliodata";
import star from "../../assets/ratingstar.png"

const Works = () => {
  // Modal component
  const Modal = ({ image, title, text, closeModal, rating ,link}) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 bg-primary p-4 rounded-lg shadow-lg max-w-md">
          <button
            className="absolute top-2 right-2 text-white"
            onClick={closeModal}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <h2 className="flex gap-3 items-center text-xl font-bold mb-2">
            {title}
            <a href={link} target="_blank" className="hover:text-[#ff2268]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </h2>

          <img src={image} alt="" className="w-full h-auto rounded-lg" />
          <p className="text-gray-600 mt-2">{text}</p>
          <h2 className="font-bold text-sm">Client Rating</h2>
          <h3 className="flex items-center text-yellow-400">
            {Array.from({ length: rating }).map((_, index) => (
              <img src={star} className="h-6 w-6"/>
            ))}
          </h3>
        </div>
      </div>
    );
  };

  // Card images component
  const Card = ({ image, title, text, rating,link }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <div
          className="flex items-center justify-center h-48 md:h-64 lg:h-80 group"
          onClick={openModal}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg shadow-md group-hover:opacity-50"
          />
        </div>
        {isModalOpen && (
          <Modal
            image={image}
            title={title}
            text={text}
            rating={rating}
            link={link}
            closeModal={closeModal}
          />
        )}
      </>
    );
  };

  return (
    <div className="py-8">
      <h3 className={`text-3xl font-bold ${styles.heading2} mb-4 text-center`}>
        Our Works
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {data.map((value, index) => (
          <div key={index}>
            {/* Example title and text for the modal */}
            <Card
              image={value.image}
              title={value.name}
              text={value.description}
              link={value.link}
              rating={value.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
