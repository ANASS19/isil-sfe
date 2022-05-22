import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#1a95c5] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-    duration-100 cursor-pointer hover:bg-[#0a37c6]
 
    duration-500 '>
      {props.children}
    </button>
  )
}

export default Button