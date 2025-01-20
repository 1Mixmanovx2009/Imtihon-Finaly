import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Loading from '../../assets/images/Fading line.gif';
import Arrivals from '../Arrivals/Arrivals';
import { FiMinus, FiPlus } from "react-icons/fi";
import Comments from '../Comments/Comments';
import '../Comments/Comments.css';

const api = axios.create({
  baseURL: "https://6787c664c4a42c9161083285.mockapi.io",
});

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  grade: number;
  images: string[];
}

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [count, setCount] = useState(1);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      try {
        const response = await api.get(`/product/${id}`);
        return response.data;
      } catch (error) {
        console.error("API Error:", error);
        throw new Error("Failed to fetch product");
      }
    },
  });

  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (isLoading) return <img className="mx-auto" src={Loading} alt="Loading..." />;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="container mx-auto mt-[82px]">
        <div className="flex flex-col md:flex-row gap-8 mb-[80px]">
          <div className="image_wrapper flex flex-row-reverse w-full gap-20 md:w-1/2">
            <div className='flex items-center justify-center'>
              {selectedImage ? (
                <img
                  className="max_img w-[444px] h-[530px] shadow-2xl rounded-[20px] border-[2px] object-cover"
                  src={selectedImage}
                  alt={product.name}
                />
              ) : (
                <p>No Image Available</p>
              )}
            </div>

            <div className='min_img-wrapper flex flex-col gap-7'>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  className='shadow-2xl rounded-[20px] border-[2px] w-[152px] h-[167px] object-cover cursor-pointer'
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="font-[700] text-[32px] leading-[40px] mb-4">{product.name}</h1>
            <div className="flex gap-2 items-center mb-4">
              <Rating name="half-rating" defaultValue={product.grade} precision={0.1} />
              <p className="font-[400] text-[14px] leading-[18.9px]">{product.grade}/<span>5</span></p>
            </div>
            <p className="font-[700] text-[24px] leading-[32.4px] mb-4">${product.price * count}</p>
            <p className="font-[400] text-[16px] leading-[24px]">{product.description}</p>
            <div className="pt-4">
              <p className="text-base opacity-60 font-normal">
                Select Colors
              </p>
              <div className="flex gap-x-4 mt-4 pb-6 border-b">
                <button className="flex items-center justify-center w-[37px] h-[37px] rounded-full bg-[#4F4631]">
                </button>
                <button className="w-[37px] h-[37px] rounded-full bg-[#314F4A]"></button>
                <button className="w-[37px] h-[37px] rounded-full bg-[#31344F]"></button>
              </div>
            </div>
            <div className="pt-4 border-b pb-4">
              <p className="text-base opacity-60 font-normal mb-2">
                Choose Size
              </p>
              <div className="flex gap-x-2 lg:gap-x-3">
                <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                  Small
                </button>
                <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                  Medium
                </button>
                <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                  Large
                </button>
                <button className="rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white">
                  X-Large
                </button>
              </div>
            </div>
            <div className="flex gap-x-5 pt-5">
              <div className="flex items-center justify-between w-[170px] rounded-full bg-[#F0F0F0]">
                <button
                  disabled={count <= 1}
                  onClick={() => setCount(count - 1)}
                  className="flex items-center justify-center px-5 py-4">
                  <FiMinus className="text-xl" />
                </button>
                <p className="font-medium">{count}</p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="flex items-center justify-center px-5 py-4">
                  <FiPlus className="text-xl" />
                </button>
              </div>
              <button className="border text-white bg-black py-4 w-full rounded-full transition-all hover:bg-white hover:text-black hover:border-black">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <Comments />
        <p className='font-[700] text-[48px] leading-[57.6px] mx-auto'>YOU MIGHT ALSO LIKE</p>
      </div>
      <Arrivals />
    </>
  );
};

export default Detail;