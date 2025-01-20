import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "../Selling/Selling";

const queryClient = new QueryClient();

const ProductListSelling: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 className="font-[700] text-[48px] leading-[57.6px] text-center mb-[55px]">TOP SELLING</h1>
        <Products />
      </div>
    </QueryClientProvider>
  );
};

export default ProductListSelling;
