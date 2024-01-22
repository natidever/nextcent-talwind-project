import React from 'react'
import arrow from "../assets/arrow.png"
function Button({width ,height,text}) {
  return (
    <button type='button' className={`ml-10 bg-primary text-white px-8 py-[10px] rounded flex items-center mt-7 justify-center ${width} ${height} relative right-10 `}>
        {text?text:"default"}
      
    </button>
  ) 
}

export default Button
