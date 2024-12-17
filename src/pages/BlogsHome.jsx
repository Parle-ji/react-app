import React, { useContext } from "react";
import { BlogsAppContext } from "../context/BlogsContext";
import BlogsHeading from '../Components/BlogsHeading';
import Blogs from "../Components/Blogs";
import BlogsPagination from "../Components/BlogsPagination";
const BlogsHome = () => {
  const {mode} = useContext(BlogsAppContext);

  return (
    <div
      className={`w-11/12 max-w-[1200px] mx-auto flex flex-col justify-center items-center py-4 ${
        mode ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <BlogsHeading />

      <Blogs />

      <BlogsPagination />
    </div>
  );
};

export default BlogsHome;
