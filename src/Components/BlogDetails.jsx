import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="text-sm">
      <NavLink className="hover:underline" to={`/blog/${post.id}`}>
        <span className="font-extrabold text-red-700 text-sm">
          {post.title}
        </span>
      </NavLink>{" "}
      <p>
        By <span className=" italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replace(/\s+/g, "-")}`}>
          <span className=" text-xs font-bold underline"> {post.category}</span>
        </NavLink>{" "}
      </p>
      <p>
        Posted on <span>{post.date}</span>
      </p>
      <p className="mt-2">{post.content}</p>
      <div className="flex gap-x-1 mt-1 ">
        {post.tags?.length > 0 &&
          post.tags.map((tag, index) => (
            <NavLink
              to={`/tag/${tag}`}
              key={index}
              className="underline text-blue-700 text-xs cursor-pointer"
            >
              {`#${tag}`}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
// <div key={post.id}>
//   <p className="font-bold text-sm">{post.title}</p>
//   <p>
//     By <span className=" italic">{post.author}</span> on <span className=" text-xs font-bold underline">{post.category}</span>
//   </p>
//   <p>
//     Posted on <span>{post.date}</span>
//   </p>
//   <p className="mt-2">{post.content}</p>

//   <div className="flex gap-x-1 mt-1 ">
//   {post.tags.map((tag,index) => (
//     <span key={index} className=" underline text-blue-700 text-xs cursor-pointer  ">{`#${tag}`}</span>
//   ))}
//   </div>
// </div>
