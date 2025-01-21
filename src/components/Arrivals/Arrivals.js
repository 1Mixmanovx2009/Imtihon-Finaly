var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Loading from "../../assets/images/Fading line.gif";
import { useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
const api = axios.create({
    baseURL: "https://6787c664c4a42c9161083285.mockapi.io",
});
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api.get("/product");
    return response.data;
});
const Arrivals = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
    const [visibleCount, setVisibleCount] = useState(4);
    const navigate = useNavigate();
    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };
    const handleAddToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        const updatedCart = [...cartItems, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    if (isLoading)
        return _jsx("img", { className: "mx-auto", src: Loading, alt: "Loading..." });
    if (error instanceof Error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    return (_jsxs("div", { className: "flex flex-col justify-center items-center mb-[64px]", children: [_jsx("ul", { className: "flex flex-wrap container mx-auto justify-center items-center gap-[50px] mb-[36px]", children: data === null || data === void 0 ? void 0 : data.slice(0, visibleCount).map((product) => (_jsxs("li", { className: "shadow-2xl p-6 rounded-[20px] cursor-pointer", style: { marginBottom: "10px" }, children: [_jsx("div", { children: product.images.length > 0 ? (_jsx("img", { onClick: () => navigate(`/detail/${product.id}`), className: "w-[295px] h-[298px] object-cover mb-[16px]", src: product.images[0], alt: product.name, style: { maxWidth: "295px", maxHeight: "298px" } })) : (_jsx("p", { children: "No Image Available" })) }), _jsx("h3", { className: "font-[700] text-[20px] leading-[27px]", children: product.name }), _jsxs("div", { className: "flex gap-2 items-center", children: [_jsx(Rating, { name: "half-rating", defaultValue: product.grade, precision: 0.1 }), _jsxs("p", { className: "font-[400] text-[14px] leading-[18.9px]", children: [product.grade, "/", _jsx("span", { children: "5" })] })] }), _jsxs("p", { className: "font-[700] text-[24px] leading-[32.4px]", children: ["$", product.price] }), _jsx(LuShoppingCart, { size: 25, onClick: () => handleAddToCart(product) })] }, product.id))) }), data && visibleCount < data.length && (_jsx("button", { className: "w-[218px] mb-[64px] text-center border-[1px] px-[40px] py-[15px] rounded-[62px] hover:bg-black hover:text-white duration-300", onClick: handleShowMore, children: "View All" })), _jsx("div", { className: "arrval_line bg-[#0000001A] w-full h-[1px]" })] }));
};
export default Arrivals;
