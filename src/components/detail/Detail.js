var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
const Detail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [count, setCount] = useState(1);
    const { data: product, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield api.get(`/product/${id}`);
                return response.data;
            }
            catch (error) {
                console.error("API Error:", error);
                throw new Error("Failed to fetch product");
            }
        }),
    });
    useEffect(() => {
        if (product && product.images.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);
    if (isLoading)
        return _jsx("img", { className: "mx-auto", src: Loading, alt: "Loading..." });
    if (error instanceof Error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    if (!product)
        return _jsx("p", { children: "Product not found" });
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "container mx-auto mt-[82px]", children: [_jsxs("div", { className: "flex flex-col md:flex-row gap-8 mb-[80px]", children: [_jsxs("div", { className: "image_wrapper flex flex-row-reverse w-full gap-20 md:w-1/2", children: [_jsx("div", { className: 'flex items-center justify-center', children: selectedImage ? (_jsx("img", { className: "max_img w-[444px] h-[530px] shadow-2xl rounded-[20px] border-[2px] object-cover", src: selectedImage, alt: product.name })) : (_jsx("p", { children: "No Image Available" })) }), _jsx("div", { className: 'min_img-wrapper flex flex-col gap-7', children: product.images.map((image, index) => (_jsx("img", { className: 'shadow-2xl rounded-[20px] border-[2px] w-[152px] h-[167px] object-cover cursor-pointer', src: image, alt: `Thumbnail ${index + 1}`, onClick: () => handleImageClick(image) }, index))) })] }), _jsxs("div", { className: "w-full md:w-1/2", children: [_jsx("h1", { className: "font-[700] text-[32px] leading-[40px] mb-4", children: product.name }), _jsxs("div", { className: "flex gap-2 items-center mb-4", children: [_jsx(Rating, { name: "half-rating", defaultValue: product.grade, precision: 0.1 }), _jsxs("p", { className: "font-[400] text-[14px] leading-[18.9px]", children: [product.grade, "/", _jsx("span", { children: "5" })] })] }), _jsxs("p", { className: "font-[700] text-[24px] leading-[32.4px] mb-4", children: ["$", product.price * count] }), _jsx("p", { className: "font-[400] text-[16px] leading-[24px]", children: product.description }), _jsxs("div", { className: "pt-4", children: [_jsx("p", { className: "text-base opacity-60 font-normal", children: "Select Colors" }), _jsxs("div", { className: "flex gap-x-4 mt-4 pb-6 border-b", children: [_jsx("button", { className: "flex items-center justify-center w-[37px] h-[37px] rounded-full bg-[#4F4631]" }), _jsx("button", { className: "w-[37px] h-[37px] rounded-full bg-[#314F4A]" }), _jsx("button", { className: "w-[37px] h-[37px] rounded-full bg-[#31344F]" })] })] }), _jsxs("div", { className: "pt-4 border-b pb-4", children: [_jsx("p", { className: "text-base opacity-60 font-normal mb-2", children: "Choose Size" }), _jsxs("div", { className: "flex gap-x-2 lg:gap-x-3", children: [_jsx("button", { className: "rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white", children: "Small" }), _jsx("button", { className: "rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white", children: "Medium" }), _jsx("button", { className: "rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white", children: "Large" }), _jsx("button", { className: "rounded-full py-[8px] text-sm lg:text-base px-[15px] lg:px-6 lg:py-3 bg-[#F0F0F0] text-[#00000099] transition-all hover:bg-black hover:text-white", children: "X-Large" })] })] }), _jsxs("div", { className: "flex gap-x-5 pt-5", children: [_jsxs("div", { className: "flex items-center justify-between w-[170px] rounded-full bg-[#F0F0F0]", children: [_jsx("button", { disabled: count <= 1, onClick: () => setCount(count - 1), className: "flex items-center justify-center px-5 py-4", children: _jsx(FiMinus, { className: "text-xl" }) }), _jsx("p", { className: "font-medium", children: count }), _jsx("button", { onClick: () => setCount(count + 1), className: "flex items-center justify-center px-5 py-4", children: _jsx(FiPlus, { className: "text-xl" }) })] }), _jsx("button", { className: "border text-white bg-black py-4 w-full rounded-full transition-all hover:bg-white hover:text-black hover:border-black", children: "Add to Cart" })] })] })] }), _jsx(Comments, {}), _jsx("p", { className: 'font-[700] text-[48px] leading-[57.6px] mx-auto', children: "YOU MIGHT ALSO LIKE" })] }), _jsx(Arrivals, {})] }));
};
export default Detail;
