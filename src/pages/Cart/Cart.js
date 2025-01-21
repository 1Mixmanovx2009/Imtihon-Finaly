import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import Delete from "../../assets/images/Delete.svg";
import arrow from "../../assets/images/arrow-down-bold 1.svg";
import Empte from "../../assets/images/Image.png";
import './Cart.css';
const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [counts, setCounts] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(savedCart);
        const initialCounts = {};
        savedCart.forEach((item) => {
            initialCounts[item.id] = 1;
        });
        setCounts(initialCounts);
    }, []);
    const handleDelete = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        const updatedCounts = Object.assign({}, counts);
        delete updatedCounts[id];
        setCounts(updatedCounts);
    };
    const handleCountChange = (id, increment) => {
        setCounts((prevCounts) => (Object.assign(Object.assign({}, prevCounts), { [id]: increment ? prevCounts[id] + 1 : Math.max(1, prevCounts[id] - 1) })));
    };
    const subtotal = cartItems.reduce((total, item) => {
        return total + item.price * (counts[item.id] || 1);
    }, 0);
    return (_jsxs("div", { className: "container mx-auto mb-[80px]  mt-[70px]", children: [_jsx("p", { className: "font-[700] text-[40px] leading-[48px] text-start mb-[24px]", children: "Your Cart" }), _jsxs("div", { className: "cart_wrapper flex justify-between", children: [_jsx("div", { className: "w-[715px] cart_products border py-[20px] px-[24px] rounded-[20px]", children: cartItems.length > 0 ? (cartItems.map((item) => (_jsxs("div", { className: "flex justify-between items-center border-b pb-[24px] pt-[24px]", children: [_jsxs("div", { className: "flex gap-[16px]", children: [_jsx("img", { className: "object-cover rounded-[8.66px] w-[100px] h-[100px]", src: item.images[0], alt: item.name }), _jsxs("div", { children: [_jsx("h3", { className: "font-[700] text-[20px] leading-[27px] text-start", children: item.name }), _jsxs("p", { className: "font-[700] text-[24px] leading-[32px] text-start", children: ["$", item.price * (counts[item.id] || 1)] })] })] }), _jsxs("div", { className: "flex flex-col items-end justify-between gap-[56px]", children: [_jsx("img", { src: Delete, alt: "Delete", width: 24, onClick: () => handleDelete(item.id), className: "cursor-pointer" }), _jsxs("div", { className: "plus_minus flex items-center justify-between w-[170px] rounded-full bg-[#F0F0F0]", children: [_jsx("button", { disabled: (counts[item.id] || 1) <= 1, onClick: () => handleCountChange(item.id, false), className: "flex items-center justify-center px-5 py-4", children: _jsx(FiMinus, { className: "text-xl" }) }), _jsx("p", { className: "font-medium", children: counts[item.id] || 1 }), _jsx("button", { onClick: () => handleCountChange(item.id, true), className: "flex items-center justify-center px-5 py-4", children: _jsx(FiPlus, { className: "text-xl" }) })] })] })] }, item.id)))) : (_jsx("img", { src: Empte, alt: "Empty Cart" })) }), _jsxs("div", { className: "price_products w-[505px] h-[405px] border px-[24px] py-[20px] rounded-[20px]", children: [_jsx("p", { className: "font-[700] text-[24px] leading-[32px] text-start", children: "Order Summary" }), _jsxs("ul", { className: "mt-[24px] flex flex-col gap-[20px] mb-[24px]", children: [_jsxs("li", { className: "flex justify-between", children: ["Subtotal ", _jsxs("strong", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("li", { className: "flex justify-between", children: ["Discount (-20%) ", _jsxs("strong", { children: ["- $", (subtotal * 0.2).toFixed(2)] })] }), _jsxs("li", { className: "flex justify-between border-b pb-[20px]", children: ["Delivery Fee ", _jsx("strong", { children: "$5.00" })] }), _jsxs("li", { className: "flex justify-between", children: ["Total ", _jsxs("strong", { children: ["$", (subtotal - subtotal * 0.2 + 5).toFixed(2)] })] })] }), _jsxs("button", { className: "checkout w-full justify-center flex gap-[12px] font-[500] text-[16px] border-[1px] border-black leading-[21.6px] text-white bg-black py-[19px] rounded-[62px] hover:bg-white hover:text-[black] duration-300 mb-[48px]", onClick: () => {
                                    navigate("/checkout", { state: { subtotal, cartItems, counts } });
                                }, children: ["Go to Checkout", _jsx("img", { src: arrow, alt: "" })] })] })] })] }));
};
export default CartPage;
