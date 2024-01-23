import React from 'react'
import arrow from "../assets/arrow.png"
function Button({width ,height,text}) {
  return (
    <button type='button' className={`ml-10 bg-primary whitespace-nowrap font-bold  font-montserrat text-white px-5 py-[10px] rounded flex items-center mt-7  ${width} ${height} relative right-10 text-[15px] `}>
        {text?text:"default"}
      
    </button>
  ) 
}

export default Button
