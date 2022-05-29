import React, { useState } from 'react';
import  { Close } from '@material-ui/icons';

function Announce() {
  const[annanceStyle,setAnnounceStyle] =useState('bg-[#0F43D2] font-bold text-white flex items-center justify-center mobile:text-[10px]')
 const handleClose =()=>{
   setAnnounceStyle(annanceStyle + " hidden")
 }
  return (
    <div className={annanceStyle}>
        <h2>dépêchez-vous c'est 40% de réduction maintenant</h2>
        <Close className='cursor-pointer ' onClick={handleClose}/>
    </div>
  )
}

export default Announce