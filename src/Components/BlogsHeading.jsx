import React, { useContext } from 'react'
import { BlogsAppContext } from '../context/BlogsContext'

const BlogsHeading = () => {
  const {mode} = useContext(BlogsAppContext)
  return (
    <div className={`${mode ? 'bg-slate-700':'bg-white'}  select-none w-11/12 max-w-[1200px] fixed top-0  rounded text-xl uppercase font-bold text-center py-1   shadow-lg z-50`}>
      Code Help Blogs
    </div>
  )
}

export default BlogsHeading
