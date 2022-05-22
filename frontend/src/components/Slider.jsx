import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {ApiSlides} from '../apifolder/SliderApi' 
import './Slider.css'

function Slider() {

//useState hooks

const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);


    //style
    const arrowStyle = " rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";
  
    const prevSlide = () => {
        if (activeSlide === 0) {
          setActiveSlide(slides.length - 1);
        } else {
          setActiveSlide(activeSlide - 1);
        }
      };
      const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
          setActiveSlide(0);
        } else {
          setActiveSlide(activeSlide + 1);
        }
      };
  
    return (
    <div className='prentDev h-[540px] bg-white flex items-center justify-between  mobile:hidden' >

{/* leftarrow div*/   }
<div className={ arrowStyle } onClick={prevSlide}>
    <ArrowLeftOutlined style={{fontSize : '50px'}}/>
</div>



{/* slide div*/   }

{slides.map((slide, index) => {
        if (index === activeSlide) {
            
          return (
<div className={'wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounder-lg border-[#c0c0c0] border-10px overflow-hidden relative  ' + slide.background } >


    <div className='slide flex item-center justify-center h-[100%] w-[100%]'>

        <div className='forImage flex-1 justify-center items-center h-[100%]'>
            <img className='h-[100%]  object-cover' src={slide.src} alt="slide" />
        </div>

        <div className='flex flex-col justify-center flex-1 des place-itmes-start -ml-11'>
            <h2 className='text-[30px] text-white font-bold  '>{slide.content.h2}</h2>
            <p className='text-[20px] pl-20 text-[#12f406]'> {slide.content.p}</p>
            <button className='btn w-[30%]'>Voir Plus </button>
        </div>

    </div>


</div>
)

     

    }
}) 

}





{/* rightarrow div*/   }
<div className={ arrowStyle } onClick={nextSlide}> 

    <ArrowRightOutlined style={{fontSize : '50px'}}  />
</div>

    </div>
  )
}

export default Slider
