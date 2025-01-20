import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Rating from '@mui/material/Rating';
import Loading from '../../assets/images/Fading line.gif';

const api = axios.create({
  baseURL: "https://6787c664c4a42c9161083285.mockapi.io",
});

const fetchProducts = async () => {
  const response = await api.get("/product");
  return response.data;
};

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  grade: number;
  images: string[];
}

const Selling: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [visibleCount, setVisibleCount] = useState(4);
  const [showInitialSkipped, setShowInitialSkipped] = useState(false);

  const handleShowMore = () => {
    if (!showInitialSkipped) {
      setShowInitialSkipped(true);
    } else {
      setVisibleCount((prevCount) => prevCount + 4); 
    }
  };

  if (isLoading) return <img className="mx-auto" src={Loading} alt="" />;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  const skippedItems = data?.slice(0, 4) || [];
  const visibleItems = data?.slice(4, 4 + visibleCount) || [];

  return (
    <div className="flex flex-col justify-center items-center mb-[80px]">
      <ul className="flex flex-wrap container mx-auto justify-center items-center gap-[50px]  mb-[36px]">
        {visibleItems.map((product) => (
          <li key={product.id} className="shadow-2xl p-6 rounded-[20px]" style={{ marginBottom: "10px" }}>
            {product.images.length > 0 ? (
              <img
                className="w-[295px] h-[298px] object-cover mb-[16px]"
                src={product.images[0]}
                alt={product.name}
                style={{ maxWidth: "295px", maxHeight: "298px" }}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <h3 className="font-[700] text-[20px] leading-[27px]">{product.name}</h3>
            <div className="flex gap-2 items-center">
              <Rating name="half-rating" defaultValue={product.grade} precision={0.1} />
              <p className="font-[400] text-[14px] leading-[18.9px]">{product.grade}/<span>5</span></p>
            </div>
            <p className="font-[700] text-[24px] leading-[32.4px]">${product.price}</p>
          </li>
        ))}

        {showInitialSkipped && skippedItems.map((product) => (
          <li key={product.id} className="shadow-2xl p-6 rounded-[20px] mb-[36px]" style={{ marginBottom: "10px" }}>
            {product.images.length > 0 ? (
              <img
                className="w-[295px] h-[298px] object-cover mb-[16px]"
                src={product.images[0]}
                alt={product.name}
                style={{ maxWidth: "295px", maxHeight: "298px" }}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <h3 className="font-[700] text-[20px] leading-[27px]">{product.name}</h3>
            <div className="flex gap-2 items-center">
              <Rating name="half-rating" defaultValue={product.grade} precision={0.1} />
              <p className="font-[400] text-[14px] leading-[18.9px]">{product.grade}/<span>5</span></p>
            </div>
            <p className="font-[700] text-[24px] leading-[32.4px]">${product.price}</p>
          </li>
        ))}


      </ul>
        {data && (visibleCount < data.length - 4 || !showInitialSkipped) && (
            <button
            className="w-[218px] mb-[64px] text-center border-[1px] px-[80px] py-[15px] rounded-[62px] hover:bg-black hover:text-white duration-300"
            onClick={handleShowMore}
            >
            View All
          </button>
        )}
    </div>
  );
};

export default Selling;
