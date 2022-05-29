import { Send } from '@material-ui/icons'
import React from 'react'
import { Button } from 'react-bootstrap';

function Designer() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#7ebbce] '>
        <h1 className='text-[50px] text-[white] font-bold mobile:text-[30px]' >
        Service création
        </h1>
<h2 className='text-[20px] mt-2 pl-[20%] pr-[20%] mobile:text-center mobile:p-3'>
Dans le cadre d’une action commerciale où vous désirez créer votre logo ou une charte graphique. Notre service graphique se chargera de réaliser toutes vos demandes de conception de visuels pour vos enseignes, meeting, expositions…
</h2>
<div className='flex mt-[3rem] pl-[15%] items-center justify-between min-w-[45rem] min-h-[2rem] 
 border-[#cccccc] rounded-[5px] overflow-hidden 
 mobile:min-w-[20rem] '>
 <Button className='btn justify-center  w-[50%] '>
 <a href={`mailto:${'tbe3lia@gmail.com'}`}>
Contactez-nous
</a>
     </Button>
</div>


    </div>
  )
}

export default Designer;