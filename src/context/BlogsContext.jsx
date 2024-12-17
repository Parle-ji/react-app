import { createContext, useState } from "react";
import { baseUrl } from "../Components/BlogsApi";
import { useNavigate } from "react-router-dom";

export const BlogsAppContext = createContext();

function BlogsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [mode, setMode] = useState(false);
  const navigate = useNavigate()
  async function fetchBlogsPosts(page = 1, tag = null, category = null) {
    setLoading(true);
    
    let url = `${baseUrl}?page=${page}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }    
    try {
      const result = await fetch(url);
      const data = await result.json();

      console.log(data);
      setPosts(data.posts);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("API Fetch Error:", error);
      // Optional fallback state
      setPage(1);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  function handlePageChange(page) {
    navigate(`?page=${page}`);
    fetchBlogsPosts(page);
  }  

  function changeMode() {
    setMode((prevMode) => !prevMode); // Toggle mode
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
