import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/SHOP.CO.svg";
import searchIcon from "../../assets/images/searchicon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import Select from "../Select/Select";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import user from '../../assets/images/user.svg';
const BottomHeader = () => {
    const [data, setData] = useState(false);
    return (_jsx(_Fragment, { children: _jsx("div", { className: "left-0 top-0 shadow bg-white w-full z-10", children: _jsx("header", { className: "py-6 overflow-hidden", children: _jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("button", { className: "lg:hidden", onClick: () => setData(!data), children: data ? (_jsx(MdOutlineClose, { className: "text-2xl mr-3" })) : (_jsx(RxHamburgerMenu, { className: "text-2xl mr-3" })) }), _jsx(Link, { className: "mr-10 hover:opacity-80 active:opacity-65", to: "/", children: _jsx("img", { src: logo, alt: "Logo icon" }) })] }), _jsxs("div", { className: "flex items-center gap-6 xl:gap-x-14", children: [_jsx("div", { onClick: () => setData(false), className: data
                                        ? "bg-[#0005] w-screen h-screen fixed left-0 top-32 z-10"
                                        : "hidden" }), _jsxs("ul", { className: data
                                        ? "absolute left-0 top-32 transition-[0.3s] pt-5 h-screen z-20 border-t border-black bg-white pl-7 pr-16 flex flex-col gap-y-6 sm:pl-12 lg:gap-6 lg:relative lg:flex-row lg:h-auto lg:border-none lg:top-0 lg:p-0 lg:items-center"
                                        : "absolute left-[-600px] top-32 transition-[0.3s] lg:gap-6 lg:relative lg:flex-row lg:h-auto lg:border-none lg:top-0 lg:p-0 lg:items-center lg:left-0 lg:flex", children: [_jsx("li", { children: _jsx(Select, {}) }), _jsx("li", { className: "text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65", children: _jsx(Link, { onClick: () => setData(false), to: "/", children: "On Sale" }) }), _jsx("li", { className: "text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65", children: _jsx(Link, { onClick: () => setData(false), to: "/", children: "New Arrivals" }) }), _jsx("li", { className: "text-lg lg:text-sm xl:text-base capitalize hover:opacity-80 active:bg-opacity-65", children: _jsx(Link, { onClick: () => setData(false), to: "/", children: "Brands" }) }), _jsxs("div", { className: 'header_input max-w-[577px] bg-[#f0f0f0] px-[52px] py-[14px] rounded-[62px] relative', children: [_jsx("img", { className: 'absolute left-[20px]', src: searchIcon, alt: "" }), _jsx("input", { className: 'max-w-[151px] bg-[#f0f0f0] placeholder:text-[#00000066] focus:outline-none text-[#00000066]', placeholder: 'Search for products...', type: "text" })] })] }), _jsxs("ul", { className: "flex lg:gap-x-2", children: [_jsx("li", {}), _jsx("li", { className: "group p-1 flex items-center cursor-pointer", children: _jsx(NavLink, { className: "relative", to: "/cart", children: _jsx(LuShoppingCart, { className: "text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" }) }) }), _jsx("li", { className: "group p-1 flex items-center cursor-pointer", children: _jsx(NavLink, { className: "relative", to: "/wishlist", children: _jsx("img", { src: user, alt: "" }) }) })] })] })] }) }) }) }));
};
export default BottomHeader;
