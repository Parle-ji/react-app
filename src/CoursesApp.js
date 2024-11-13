import React, { useEffect, useState } from 'react'
import CoursesAppNav from './Components/CoursesAppNav'
import CoursesFillter from './Components/CoursesFillter'
import Spinner from './Components/Spinner'
import CoursesCards from './Components/CoursesCards'
import { apiUrl, filterData } from './Components/CoursesData'
import { toast } from 'react-toastify'


const CoursesApp = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true)
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data)
    }
    catch (error) {
      toast.error('Api fetch krne me dikkat huaa hai.....')
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='bg-zinc-400 min-h-screen flex flex-col'>

      <CoursesAppNav />

      <CoursesFillter filterData={filterData}
        category={category}
        setCategory={setCategory}
      />

      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]  flex-wrap'>
        {
          loading ? (<Spinner />) :
            (<CoursesCards courses={courses} category={category} />)
        }
      </div>

    </div> 
  )
}

export default CoursesApp
