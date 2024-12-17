import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlogsAppContext } from "../context/BlogsContext";
import { baseUrl } from "../Components/BlogsApi";
import BlogsHeading from "../Components/BlogsHeading";
import BlogDetails from "../Components/BlogDetails";
const BlogsPage = () => {
  const [blog, setBlog] = useState(null);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(BlogsAppContext);
  const blogId = location.pathname.split("/").at(-1);
  const fetchRelatedBlogs = async () => {
    setLoading(true);

    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log(error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto my-10  ">
      <BlogsHeading />
      <div className="max-w-[550px] w-11/12 mx-auto ">
        <button
          onClick={() => navigate(-1)}
          className="py-1 px-4 mx-auto rounded-full bg-green-500  font-semibold "
        >
          back
        </button>

        {loading ? (
          <p>loading</p>
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2 className="text-2xl font-bold my-4 capitalize">related Blogs</h2>
            {relatedBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No blog found</p>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
