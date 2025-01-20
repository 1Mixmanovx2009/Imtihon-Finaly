import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tiket from '../../assets/images/ticket-percent.svg'
import '../Cart/Cart.css'

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    grade: number;
    images: string[];
}

const CheckOut: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (!location.state || !location.state.subtotal || !location.state.cartItems || !location.state.counts) {
        return (
            <div className="container mx-auto mt-10 mb-[160px]">
                <h1 className="text-center text-3xl font-bold mb-8">Check Out</h1>
                <div className="text-center text-red-500">
                    <p>Subtotal value, cart items, or counts are missing. Please try again.</p>
                    <button
                        onClick={() => navigate("/cart")} 
                        className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                    >
                        Go Back to Cart
                    </button>
                </div>
            </div>
        );
    }

    const { subtotal, cartItems, counts } = location.state;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const productsList = cartItems
            .map(
                (item: Product) => `
📦 <b>${item.name}</b>
   - Narx: $${item.price.toFixed(2)}
   - Miqdor: ${counts[item.id] || 1}
   - Jami: $${(item.price * (counts[item.id] || 1)).toFixed(2)}
                `
            )
            .join("\n");

        const message = `
🛒 <b>New Order</b>
---------------------------------
👤 <b>Name:</b> ${formData.firstName} ${formData.lastName}
📞 <b>Phone:</b> ${formData.phoneNumber}
✉️ <b>Email:</b> ${formData.email}
---------------------------------
📦 <b>Products:</b>
${productsList}
---------------------------------
💰 <b>Subtotal:</b> $${subtotal.toFixed(2)}
🔖 <b>Discount (-20%):</b> $${(subtotal * 0.2).toFixed(2)}
🚚 <b>Delivery Fee:</b> $5.00
📦 <b>Total:</b> $${(subtotal - subtotal * 0.2 + 5).toFixed(2)}
        `;

        const TELEGRAM_TOKEN = "7678574480:AAFCiAMdZmsRB9ECDHPPP8v6u9oy8-x8ZIk"; 
        const CHAT_ID = "-1002240553165"; 
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "html",
                }),
            });

            if (response.ok) {
                alert("Order successfully placed and sent to Telegram!");
            } else {
                const errorData = await response.json();
                console.error("Telegram API Error:", errorData);
                alert("Failed to send order details to Telegram.");
            }
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    };

    return (
        <div className="container mx-auto mt-10 mb-[160px]">
            <h1 className="text-center text-3xl font-bold mb-8">Check Out</h1>
            <div className="checkout_wrapper flex flex-col md:flex-row gap-8">
                <div className="info_form w-[647px] flex-1 border rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                    className="w-full border rounded-lg px-3 py-2"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full border rounded-lg px-3 py-2"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="phone-number">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                type="text"
                                placeholder="Phone number"
                                className="w-full border rounded-lg px-3 py-2"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full border rounded-lg px-3 py-2"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
                <div className="price_products w-[505px] h-[330px] border px-[24px] py-[20px] rounded-[6px]">
                    <p className="font-[500] text-[28px] leading-[34px] text-start">Order Summary</p>
                    <ul className="mt-[24px] flex flex-col gap-[20px] mb-[24px]">
                        <li className="flex justify-between">
                            <div className="flex gap-[8px]">
                                <img src={Tiket} alt="" />JenkateMW
                            </div>
                            <strong className="text-[#38CB89]">-$25.00 [Remove]</strong>
                        </li>
                        <li className="flex justify-between border-b pb-[20px]">
                            Shipping <strong>Free</strong>
                        </li>
                        <li className="flex justify-between border-b pb-[20px]">
                            Subtotal <strong>${subtotal.toFixed(2)}</strong>
                        </li>
                        <li className="flex justify-between">
                            Total <strong>${(subtotal - subtotal * 0.2 + 5).toFixed(2)}</strong>
                        </li>
                        <li className="flex justify-between">
                            Telegram<strong>https://t.me/+C6JJEcomRrpkOGJi</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;