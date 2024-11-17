import React, { useState } from 'react'
import { TestimonialsCard } from './TestimonialsCard'
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Testimonilas = ({reviews}) => {
    // console.log(reviews)
    const [index, setIndex] = useState(0);
    
    function leftHandler(){
        if(index - 1 >= 0){
            setIndex(index - 1)
        }else{
            setIndex(reviews.length - 1)
        }
    }

    function rightHandler(){
        if(index >= reviews.length -1){
            setIndex(0)
        }else{
            setIndex( index + 1)
        }
    }

    function surpriseHandler(){
            let random = Math.floor(Math.random() * reviews.length );
            console.log(random)
            setIndex(random)
    }
    if (!reviews || reviews.length === 0) {
        return <div>No reviews available</div>;
    }
    
  return (
    <div className='    max-w-[600px] w-full py-6 bg-gray-400 rounded flex  items-center flex-col'>
               
          


            {<TestimonialsCard reviews={reviews?.[index]}/>}

            {/* left right switcher */}
              <div className='flex items-center justify-center gap-8'>
              {<button onClick={leftHandler}
              className='text-3xl cursor-pointer'>{<FaChevronLeft/>}</button>}
              {<button onClick={rightHandler}
              className='text-3xl cursor-pointer'>{<FaChevronRight/>}</button>}
              </div>

              {/* surprise me  */}
              {<button onClick={surpriseHandler}
              className='bg-sky-950 mt-2 text-white px-4 py-2 rounded'>Surprise me</button>}
    </div>
  )
}
