import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async(category) => {
    const images = await getGifs(category);
    setImages(images);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages(category);
  }, [])
  
  return {
    images,
    isLoading
  }
}
