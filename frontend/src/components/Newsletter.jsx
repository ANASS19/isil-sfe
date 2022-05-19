import { Send } from '@material-ui/icons'
import React from 'react'

function Newsletter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#7ebbce] '>
        <h1 className='text-[50px] font-bold mobile:text-[30px]' >
            NEWSLETTER
        </h1>
<h2 className='text-[20px] mt-2  mobile:text-center mobile:p-3'>
Toujours en contact avec nous, pour vos produits préférés
</h2>
<div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white
 border-[#cccccc] rounded-[5px] overflow-hidden 
 mobile:min-w-[20rem] '>
    <input 
    className="border-none pl-[20px] flex-[7] outline-none "
    type="email" placeholder='email' />

    <button className='bg-[#4caf50] flex-1 h-[100%] '>
    <Send className='text-white '/>
</button>
</div>


    </div>
  )
}

export default Newsletter