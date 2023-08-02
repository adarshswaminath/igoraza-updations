import React from 'react'
import styles from '../../style'
import image1 from "../../assets/project1.png"
import image2 from "../../assets/project2.png"
import image3 from "../../assets/project3.png"
import image4 from "../../assets/project4.png"


const Works = () => {
    let images = [image1,image2,image3,image4]
    // card images component
    const Card = ({image}) => {
        return(
            <div className="flex items-center justify-center">
        <img src={image} alt="" className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md" />
      </div>
        )
    }
  return (
    <div>
        <h3 className={`text-3xl font-bold ${styles.heading2}`}>Our Works.</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
            {images.map((value,index) => (
                <div key={index}>
                    <Card
                        image={value}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Works