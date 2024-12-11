import React, { useContext, useEffect } from "react";
import BlogsHeading from "./Components/BlogsHeading";
import Blogs from "./Components/Blogs";
import BlogsPagination from "./Components/BlogsPagination";
import { BlogsAppContext } from "./context/BlogsContext";

const BlogsApp = () => {
  const { fetchBlogsPosts } = useContext(BlogsAppContext);

  useEffect(() => {
    fetchBlogsPosts();
  }, []);

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col justify-center items-center py-4">
      <BlogsHeading />

      <Blogs />

      <BlogsPagination />
    </div>
  );
};

export default BlogsApp;
