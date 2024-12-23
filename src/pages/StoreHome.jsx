import React, { useEffect, useState } from "react";
import { StoreCard } from "../Components/StoreCard";
import Spinner from "../Components/Spinner"; // Spinner component

const StoreHome = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.error("Error in fetching products:", error.message);
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-evenly gap-y-3 text-center w-11/12 max-w-[1050px] mx-auto pt-8 pb-2 rounded">
        {loading ? (
          <Spinner />
        ) : products.length === 0 ? (
          <p>Products not found</p>
        ) : (
          products.map((product) => (
            <StoreCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default StoreHome;
