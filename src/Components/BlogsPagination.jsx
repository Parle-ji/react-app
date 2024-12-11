import React, { useContext } from 'react'
import { BlogsAppContext } from '../context/BlogsContext'

const BlogsPagination = () => {
        const {page, handlePageChange,totalPages} = useContext(BlogsAppContext)
  return (
    <div className='flex justify-between capitalize w-11/12 py-2 rounded z-50 shadow-sm items-center bg-white fixed bottom-0 '>
     <div className='flex justify-between items-center mx-auto w-11/12 max-w-[550px]'>
     <div className='flex gap-x-4'>
        {   page > 1 &&
            <button onClick={() => handlePageChange(page-1)} className=' capitalize bg-blue-900 text-white text-center text-xs font-semibold py-1 px-4 rounded-full'>
                previos
            </button>
        }
        {   page < totalPages &&
            <button onClick={()=>handlePageChange(page+1)} className= ' capitalize bg-blue-900 text-white text-center text-xs font-semibold py-1 px-4 rounded-full'>
                next
            </button>
        }
        </div>
        <p className='font-semibold'>
            page {page} of {totalPages  }
        </p>
     </div>
    </div>
  )
}

export default BlogsPagination