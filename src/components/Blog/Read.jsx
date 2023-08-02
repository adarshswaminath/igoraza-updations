import React from 'react'
import styles from "../../style"
import { useLocation } from 'react-router-dom'

export const Read = () => {
    const location = useLocation();
    const {image,title,caption,content} = location.state || {}
  return (
    <div>
        <img src={image} className='object-contain  w-full h-96 rounded-md' alt="" />
        <h3 className={`${styles.heading2}`}>{title}</h3>
        <p className={`${styles.paragraph}`}>{content}</p>
    </div>
  )
}
