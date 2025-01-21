import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FiMinus, FiPlus } from "react-icons/fi";
import Delete from "../../assets/images/Delete.svg";
import arrow from "../../assets/images/arrow-down-bold 1.svg";
import Empte from "../../assets/images/image.png";
import './Cart.css';

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    grade: number;
    images: string[];
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [counts, setCounts] = useState<Record<string, number>>({});
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(savedCart);

        const initialCounts: Record<string, number> = {};
        savedCart.forEach((item: Product) => {
            initialCounts[item.id] = 1;
        });
        setCounts(initialCounts);
    }, []);

    const handleDelete = (id: string) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        const updatedCounts = { ...counts };
        delete updatedCounts[id];
        setCounts(updatedCounts);
    };

    const handleCountChange = (id: string, increment: boolean) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: increment ? prevCounts[id] + 1 : Math.max(1, prevCounts[id] - 1),
        }));
    };

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.price * (counts[item.id] || 1);
    }, 0);

    return (
        <div className="container mx-auto mb-[80px]  mt-[70px]">
            <p className="font-[700] text-[40px] leading-[48px] text-start mb-[24px]">Your Cart</p>
            <div className="cart_wrapper flex justify-between">
                <div className="w-[715px] cart_products border py-[20px] px-[24px] rounded-[20px]">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b pb-[24px] pt-[24px]">
                                <div className="flex gap-[16px]">
                                    <img
                                        className="object-cover rounded-[8.66px] w-[100px] h-[100px]"
                                        src={item.images[0]}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h3 className="font-[700] text-[20px] leading-[27px] text-start">{item.name}</h3>
                                        <p className="font-[700] text-[24px] leading-[32px] text-start">
                                            ${item.price * (counts[item.id] || 1)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between gap-[56px]">
                                    <img
                                        src={Delete}
                                        alt="Delete"
                                        width={24}
                                        onClick={() => handleDelete(item.id)}
                                        className="cursor-pointer"
                                    />
                                    <div className="plus_minus flex items-center justify-between w-[170px] rounded-full bg-[#F0F0F0]">
                                        <button
                                            disabled={(counts[item.id] || 1) <= 1}
                                            onClick={() => handleCountChange(item.id, false)}
                                            className="flex items-center justify-center px-5 py-4"
                                        >
                                            <FiMinus className="text-xl" />
                                        </button>
                                        <p className="font-medium">{counts[item.id] || 1}</p>
                                        <button
                                            onClick={() => handleCountChange(item.id, true)}
                                            className="flex items-center justify-center px-5 py-4"
                                        >
                                            <FiPlus className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <img src={Empte} alt="Empty Cart" />
                    )}
                </div>

                <div className="price_products w-[505px] h-[405px] border px-[24px] py-[20px] rounded-[20px]">
                    <p className="font-[700] text-[24px] leading-[32px] text-start">Order Summary</p>
                    <ul className="mt-[24px] flex flex-col gap-[20px] mb-[24px]">
                        <li className="flex justify-between">
                            Subtotal <strong>${subtotal.toFixed(2)}</strong>
                        </li>
                        <li className="flex justify-between">Discount (-20%) <strong>- ${(subtotal * 0.2).toFixed(2)}</strong></li>
                        <li className="flex justify-between border-b pb-[20px]">
                            Delivery Fee <strong>$5.00</strong>
                        </li>
                        <li className="flex justify-between">
                            Total <strong>${(subtotal - subtotal * 0.2 + 5).toFixed(2)}</strong>
                        </li>
                    </ul>
                    <button
                        className="checkout w-full justify-center flex gap-[12px] font-[500] text-[16px] border-[1px] border-black leading-[21.6px] text-white bg-black py-[19px] rounded-[62px] hover:bg-white hover:text-[black] duration-300 mb-[48px]"
                        onClick={() => {
                            navigate("/checkout", { state: { subtotal, cartItems, counts } }); 
                        }}
                    >
                        Go to Checkout
                        <img src={arrow} alt="" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CartPage;
