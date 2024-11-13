import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const CoursesCard = ({ course, setLikedCourses, likedCourses }) => {
  const [readmore, setReadmore] = useState(false);
  const imgUrl = course.image.url;
  const imgAlt = course.image.alt;
  const desc = course.description;
  // console.log('description', desc)

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // Pahale se like huaa pada hai...
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // pahale se like nhi hai ye wala course...
      // ye course ko insert krna hai liked course me ... 
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  }
  function readHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className='max-w-[280px] bg-[#292b3b] rounded overflow-hidden flex flex-col '>

      <div className='relative'>
        <img src={imgUrl} alt={imgAlt} className=' ' />



        <button onClick={clickHandler} className='w-10 h-10 absolute rounded-full bg-white right-2 bottom-[-25px] flex justify-center items-center'>

          {
            likedCourses.includes(course.id) ? (<FcLike fontSize='2rem' />) : (<FcLikePlaceholder fontSize='2rem' />)

          }

        </button>

      </div>

      <div className='text-white opacity-80 p-4 '>
        <p className='font-semibold text-lg leading-6 '>{course.title}</p>
        <p className='mt-2'>
          {readmore ? desc : `${desc.substring(0, 80)}... `}
          <span onClick={readHandler} className='text-lg font-semibold text-green-500'>
            {readmore ? "Read Less" : "Read More"}
          </span>
        </p>
      </div>


    </div>
  )
}

export default CoursesCard
