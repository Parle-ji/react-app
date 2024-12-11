import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const useGifs = (tag) => {
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;

  const [Gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      const { data } = await axios.get(tag ? tagUrl : randomUrl);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {Gif, loading, fetchData}
};

export default useGifs;
