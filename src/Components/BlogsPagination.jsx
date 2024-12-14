import React, { useContext } from 'react'
import { BlogsAppContext } from '../context/BlogsContext'

const BlogsPagination = () => {
        const {page, handlePageChange,totalPages, mode,changeMode} = useContext(BlogsAppContext);

  return (
    <div className={`${mode ? 'bg-slate-700 text-white' : 'bg-white text-black'}  select-none  w-11/12 max-w-[1200px]  rounded  text-xl uppercase font-bold text-center py-1   shadow-lg z-50 fixed bottom-0 ${mode ? 'bg-black text-white' : 'bg-white text-black'}`}>
     <div className={`flex justify-between items-center mx-auto w-11/12 max-w-[550px] ${mode ? 'bg-slate-700 text-white' : 'bg-white text-black'}`}>
     <div className='flex gap-x-4'>
        {   page > 1 &&
            <button onClick={() => handlePageChange(page-1)} className=' capitalize bg-blue-900 text-white text-center text-xs font-semibold py-1 px-4 rounded-full'>
                previos
            </button>
        }
        {   page < totalPages &&
            <button onClick={()=>handlePageChange(page+1)} className= 'capitalize bg-black text-white text-center text-xs font-semibold py-1 px-4 rounded-full'>
                next
            </button>
        }
        {
            <button className={`py-1 px-4 text-xs  rounded-full font-semibold ${mode ? 'bg-white text-black':'bg-slate-600'}`}  onClick={changeMode}>changeMode</button>
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