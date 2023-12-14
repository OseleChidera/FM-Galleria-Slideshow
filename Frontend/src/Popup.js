import React from 'react'
import { motion } from 'framer-motion'
import './popup.css'
export default function Popup({ item, close }) {

  return (
    <div className="preview">
      <div className="preview-content-div" >
        <button onClick={() => close(false)}><span >close</span></button>
        <motion.img
          initial={{ scale: 0.1, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          alt='artwork'
          src={require(`${item.images.gallery}`)}
          width={`100%`}
        />
      </div>
    </div>
  )
}

