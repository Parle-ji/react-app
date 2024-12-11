import React, { useContext } from "react";
import { BlogsAppContext } from "../context/BlogsContext";
import Spinner from "./Spinner";
const Blogs = () => {
  const { loading, posts } = useContext(BlogsAppContext);
  return (
    <div className="min-h-screen  w-11/12 max-w-[550px] text-sm justify-center  flex flex-col items-center mx-auto pb-2 gap-y-4 my-10">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>no post found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm">{post.title}</p>
            <p>
              By <span className=" italic">{post.author}</span> on <span className=" text-xs font-bold underline">{post.category}</span>
            </p>
            <p>
              Posted on <span>{post.date}</span>
            </p>
            <p className="mt-2">{post.content}</p>

            <div className="flex gap-x-1 mt-1 ">
            {post.tags.map((tag,index) => (
              <span key={index} className=" underline text-blue-700 text-xs cursor-pointer  ">{`#${tag}`}</span>
            ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
