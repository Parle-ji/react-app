import React, { useContext, useEffect } from "react";
// import BlogsHeading from "./Components/BlogsHeading";
// import Blogs from "./Components/Blogs";
// import BlogsPagination from "./Components/BlogsPagination";
import { BlogsAppContext } from "./context/BlogsContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import BlogsHome from './pages/BlogsHome';
import BlogsTagsPage from "./pages/BlogsTagsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogsCategoryPage from "./pages/BlogsCategoryPage";
const BlogsApp = () => {
  const { fetchBlogsPosts ,mode} = useContext(BlogsAppContext);

 const [searchParams, setParams] = useSearchParams();
 const location = useLocation();

  useEffect(() => {

      const page = searchParams.get('page') ?? 1;

      if(location.pathname.includes('tags')){
        // iska mtlab tag wala page show kr rha hai
        const tag = location.pathname.split('/').at(-1).replaceAll('-', '');

        fetchBlogsPosts(Number(page),tag);

      }else if(location.pathname.includes('categories')){

        const category = location.pathname.split('/').at(-1).replaceAll('-','');
        // fetchBlogsPosts(Number(page), null , category)

      }else{

        fetchBlogsPosts(Number(page));

      }


    // fetchBlogsPosts();
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<BlogsHome/>}/>
      <Route path="/blog/:blogId" element={<BlogsPage/>}/>
      <Route path="/tag/:tag" element={<BlogsTagsPage/>}/>
      <Route path="/categories/:category" element={<BlogsCategoryPage/>}/>
    </Routes>





    // <div className={`w-11/12 max-w-[1200px] mx-auto flex flex-col justify-center items-center py-4 ${mode ? 'bg-slate-900 text-white':'bg-white text-black'}`}>
    //   <BlogsHeading />

    //   <Blogs />

    //   <BlogsPagination />
    // </div>
  );
};

export default BlogsApp;
