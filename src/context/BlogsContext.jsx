import { createContext, useState } from "react";
import { baseUrl } from "../Components/BlogsApi";

export const BlogsAppContext = createContext();

function BlogsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [mode, setMode] = useState(false)

  async function fetchBlogsPosts(page = 1) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();

      console.log(data);
      setPosts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("API Fetch Error:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogsPosts(page);
  }
  function changeMode(){
    // console.log(mode);
    setMode(!mode)
    console.log(mode);
}
  const value = {
    loading,
    setLoading,
    page,
    setPage,
    mode,
    setMode,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    fetchBlogsPosts,
    handlePageChange,
    changeMode,
  };

  return (
    <BlogsAppContext.Provider value={value}>
      {children}
    </BlogsAppContext.Provider>
  );
}

export default BlogsContextProvider;
 