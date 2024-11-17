import React from 'react'
import reviews from './Components/TestimonilasData'
import { Testimonilas } from './Components/Testimonilas'
const TestimoniaApp = () => {
  return (
    <div className=' max-w-[1200px] text-center min-h-screen  flex justify-center items-center flex-col'>
        {/* mai testimonial me reviews ka data pass kr rha hu */}

        
        <div className='mb-10 mt-4'>
                <h1 className='text-2xl font-bold '>Our Testimonials</h1>
                <div className='h-1 w-2/3 rounded-full mx-auto bg-slate-800'></div>
                </div>

        {<Testimonilas reviews={reviews}/>}

    </div>
  )
}

export default TestimoniaApp