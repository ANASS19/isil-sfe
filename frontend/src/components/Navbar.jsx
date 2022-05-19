import { ShoppingCartOutlined,Search  } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React, { useState } from 'react';
import Button from './Button'


function Navbar() {
    let Links =[
        {name:"ACCUIL",link:"/"},
        {name:"CATALOGUE",link:"/catalogue"},
        {name:"MON DESIGNE",link:"/mondesigne"},
        {name:"SERVICES",link:"/services"},
        {name:"CONTACT",link:"/contact"},
        
        
      ];
      let [open,setOpen]=useState(false);
    return (
      <div className='relative top-0 left-0 z-10 w-full shadow-md '>
        <div className='items-center justify-between py-4 bg-white md:flex md:px-10 px-7 mobile:pl-1 '>
        <div className=' cursor-pointer flex items-center w-[100px] mr-[10px]'>
          <img src="logotab3lia.png" alt="logo" />
           {/* Search Input */}
         <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
                <input type='text' className="border-none mobile:w-[90px] outline-none" placeholder="Search"/>
                <Search className="text-[#145fe2] m" style={{fontSize: '20px'}}/>
            </div>
        </div>
        
        <div onClick={()=>setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-25 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='text-xl md:ml-4 md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-[#0c5ff2] duration-500'>{link.name}</a>
              </li>
            ))
          }
<li className='my-2 text-xl md:ml-2 md:my-2'>
<Badge badgeContent={2} color='primary' className='my-2 text-xl md:ml-8 md:my-0 '>
             
<a href="/cart" >   <ShoppingCartOutlined /></a>
         </Badge>
</li>
         

          <Button >
          <a href="/login" >Mon compte</a>
          </Button>
          
        </ul>
        </div>
      </div>
    )
}

export default Navbar