import { createContext, useState } from "react";

export const BlogsAppContext = createContext();

function BlogsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
  };

  return (
    <BlogsAppContext.Provider value={value}>
      {children}
    </BlogsAppContext.Provider>
  );
}
