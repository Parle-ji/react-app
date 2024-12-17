import React from "react";
import BlogsHeading from "../Components/BlogsHeading";
import { useLocation, useNavigate } from "react-router-dom";
import BlogsPagination from "../Components/BlogsPagination";
import Blogs from "../Components/Blogs";
const BlogsCategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto my-4 flex items-center flex-col">
      <BlogsHeading />

      <div className="flex gap-x-4 mt-6">
        {" "}
        <button
          onClick={() => navigate(-1)}
          className=" px-4 rounded-full bg-green-500  font-semibold "
        >
          Back
        </button>
        <h2>
          Blogs on <span>#{category}</span>
        </h2>
      </div>

      <Blogs />

      <BlogsPagination />
    </div>
  );
};

export default BlogsCategoryPage;
