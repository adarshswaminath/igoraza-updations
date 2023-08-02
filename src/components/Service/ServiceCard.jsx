import React from 'react'

const ServiceCard = ({title,description}) => {
  return (
    <div>
        <div className="w-full bg-black-gradient rounded-lg p-2">
            <h3 className="text-2xl font-bold text-center text-white ">
              {title}
            </h3>
            <p className="p-4 text-center text-white">
                {description}
            </p>
            <div className="flex justify-center mt-6">
              <button className="px-8 py-4 bg-pink-gradient rounded-lg text-white font-bold">
                Know More
              </button>
            </div>
          </div>
    </div>
  )
}

export default ServiceCard