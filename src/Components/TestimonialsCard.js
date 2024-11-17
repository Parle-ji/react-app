import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
export const TestimonialsCard = (props) => {
    let reviews = props.reviews || {}; // Default to an empty object

    // console.log('card component se hu',reviews)
  return (
    <div className='md:relative text-center  flex justify-center items-center flex-col'>

        {/* image */}
           
        <img
  className="h-28 w-28 object-cover rounded-full md:absolute md:-top-20 md:left-10 z-10 shadow-lg"
  src={reviews.image || 'https://via.placeholder.com/150'}
  alt={`${reviews.name || 'User'}'s avatar`}
/>

                    
                <div className='h-28 w-28 bg-[#ff7300]
                 rounded-full md:absolute  md:-top-[85px] md:left-[45px] hidden md:block'></div>
           
      
        {/* name and job */}
        <div className='mb-4'>
        <p className="text-2xl font-semibold">{reviews.name || 'Anonymous'}</p>
        <p className="opacity-50">{reviews.job || 'Unknown Profession'}</p>
            </div>

        <div className='text-gray-700'>
            <FaQuoteLeft/>
        </div>

        <blockquote className="px-4 text-gray-700 italic">
  {reviews.text || 'No testimonial provided.'}
</blockquote>

        
        <div className='text-gray-700'>
            <FaQuoteRight/>
        </div>

    </div>
  )
}
