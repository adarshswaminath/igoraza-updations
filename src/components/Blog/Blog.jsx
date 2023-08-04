import React from "react";
import { blog } from "./blog";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../style";

const Box = ({ image, title, content, caption }) => {
  const navigate = useNavigate(); // Corrected the function name to "navigate"
  
  function onClickHandler(event) {
    event.preventDefault();
    navigate('/blogs/read', {
      state: {
        image: image,
        title: title,
        caption: caption,
        content: content,
      },
      replace: true,
    });
  }

  return (
    <div onClick={onClickHandler} className="flex flex-col md:flex-row gap-4 md:items-center border p-4 md:p-6 rounded-lg">
      <img
        src={image}
        className="h-36 w-36 md:h-40 md:w-40 rounded-lg object-cover"
        alt="Blog Thumbnail"
      />
      <div className="flex flex-col">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          {caption}
        </p>
      </div>
    </div>
  );
};

function Blog() {
  return (
    <div>
      <div className="h-80 bg-black-gradient rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
          Our Blogs
        </h2>
        <p className={`${styles.paragraph} p-3`}>
          Labore cupidatat cupidatat sint id consectetur amet ea nostrud in laboris adipisicing. Ut fugiat do culpa id. Laboris laboris est consequat exercitation consequat fugiat eiusmod ipsum nisi consequat pariatur. Fugiat commodo pariatur nostrud quis dolore dolore.
        </p>
      </div>
      {/* list of blogs */}
      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:px-8 mx-auto items-center justify-center">
        {blog.map((value, index) => (
          <Box
            key={value.id}
            image={value.image}
            title={value.title}
            caption={value.caption}
            content={value.content} // Corrected the prop name to "content"
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
