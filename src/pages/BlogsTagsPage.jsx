import React from "react";
import BlogsHeading from "../Components/BlogsHeading";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../Components/Blogs";
import BlogsPagination from "../Components/BlogsPagination";

const BlogsTagsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col justify-center items-center py-4 ">
      <BlogsHeading />

      <button
        onClick={() => navigate(-1)}
        className="py-1 px-4 rounded-full bg-green-500  font-semibold "
      >
        back
      </button>

      <h2 >
        Blogs tagged <span className="underline text-lg cursor-pointer">#{tag}</span>
      </h2>

      <Blogs />

      <BlogsPagination />
      
    </div>
  );
};

export default BlogsTagsPage;
