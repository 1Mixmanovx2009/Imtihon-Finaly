import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "../Arrivals/Arrivals";
const queryClient = new QueryClient();
const ProductListArrive = () => {
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif" }, children: [_jsx("h1", { className: "font-[700] text-[48px] leading-[57.6px] text-center mb-[55px]", children: "NEW ARRIVALS" }), _jsx(Products, {})] }) }));
};
export default ProductListArrive;
