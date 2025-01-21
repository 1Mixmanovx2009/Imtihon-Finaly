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
import { useLocation, useNavigate } from "react-router-dom";
import Tiket from '../../assets/images/ticket-percent.svg';
import '../Cart/Cart.css';
const CheckOut = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.subtotal || !location.state.cartItems || !location.state.counts) {
        return (_jsxs("div", { className: "container mx-auto mt-10 mb-[160px]", children: [_jsx("h1", { className: "text-center text-3xl font-bold mb-8", children: "Check Out" }), _jsxs("div", { className: "text-center text-red-500", children: [_jsx("p", { children: "Subtotal value, cart items, or counts are missing. Please try again." }), _jsx("button", { onClick: () => navigate("/cart"), className: "mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition", children: "Go Back to Cart" })] })] }));
    }
    const { subtotal, cartItems, counts } = location.state;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [id]: value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const productsList = cartItems
            .map((item) => `
📦 <b>${item.name}</b>
   - Narx: $${item.price.toFixed(2)}
   - Miqdor: ${counts[item.id] || 1}
   - Jami: $${(item.price * (counts[item.id] || 1)).toFixed(2)}
                `)
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
            const response = yield fetch(url, {
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
            }
            else {
                const errorData = yield response.json();
                console.error("Telegram API Error:", errorData);
                alert("Failed to send order details to Telegram.");
            }
        }
        catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    });
    return (_jsxs("div", { className: "container mx-auto mt-10 mb-[160px]", children: [_jsx("h1", { className: "text-center text-3xl font-bold mb-8", children: "Check Out" }), _jsxs("div", { className: "checkout_wrapper flex flex-col md:flex-row gap-8", children: [_jsxs("div", { className: "info_form w-[647px] flex-1 border rounded-lg p-6 shadow-sm", children: [_jsx("h2", { className: "text-lg font-semibold mb-4", children: "Contact Information" }), _jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "first-name", children: "First Name" }), _jsx("input", { id: "firstName", type: "text", placeholder: "First name", className: "w-full border rounded-lg px-3 py-2", value: formData.firstName, onChange: handleInputChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "last-name", children: "Last Name" }), _jsx("input", { id: "lastName", type: "text", placeholder: "Last name", className: "w-full border rounded-lg px-3 py-2", value: formData.lastName, onChange: handleInputChange, required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "phone-number", children: "Phone Number" }), _jsx("input", { id: "phoneNumber", type: "text", placeholder: "Phone number", className: "w-full border rounded-lg px-3 py-2", value: formData.phoneNumber, onChange: handleInputChange, required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "email", children: "Email Address" }), _jsx("input", { id: "email", type: "email", placeholder: "Your Email", className: "w-full border rounded-lg px-3 py-2", value: formData.email, onChange: handleInputChange, required: true })] }), _jsx("button", { type: "submit", className: "w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition", children: "Place Order" })] })] }), _jsxs("div", { className: "price_products w-[505px] h-[330px] border px-[24px] py-[20px] rounded-[6px]", children: [_jsx("p", { className: "font-[500] text-[28px] leading-[34px] text-start", children: "Order Summary" }), _jsxs("ul", { className: "mt-[24px] flex flex-col gap-[20px] mb-[24px]", children: [_jsxs("li", { className: "flex justify-between", children: [_jsxs("div", { className: "flex gap-[8px]", children: [_jsx("img", { src: Tiket, alt: "" }), "JenkateMW"] }), _jsx("strong", { className: "text-[#38CB89]", children: "-$25.00 [Remove]" })] }), _jsxs("li", { className: "flex justify-between border-b pb-[20px]", children: ["Shipping ", _jsx("strong", { children: "Free" })] }), _jsxs("li", { className: "flex justify-between border-b pb-[20px]", children: ["Subtotal ", _jsxs("strong", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("li", { className: "flex justify-between", children: ["Total ", _jsxs("strong", { children: ["$", (subtotal - subtotal * 0.2 + 5).toFixed(2)] })] }), _jsxs("li", { className: "flex justify-between", children: ["Telegram", _jsx("strong", { children: "https://t.me/+C6JJEcomRrpkOGJi" })] })] })] })] })] }));
};
export default CheckOut;
