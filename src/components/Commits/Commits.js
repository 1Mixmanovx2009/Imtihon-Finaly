import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import stars from '../../assets/images/star.svg';
import ticket from '../../assets/images/ticket.svg';
const Commits = () => {
    return (_jsxs("div", { className: " container mx-auto max-w-[1280px] pt-10 mb-[80.42px]", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx("h2", { className: "font-bold text-center text-[32px] lg:text-[48px] lg:leading-[57px] mt-4 mb-4", children: "OUR HAPPY CUSTOMERS" }) }), _jsx("div", { className: "commits flex flex-wrap gap-[20px]", children: [
                    {
                        name: "Sarah M.",
                        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                    },
                    {
                        name: "Alex K.",
                        comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                    },
                    {
                        name: "James L.",
                        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
                    },
                ].map((customer, index) => (_jsx("div", { className: " lg:w-[400px] lg:h-[240px]", children: _jsxs("div", { className: "li w-[300px] border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]", children: [_jsx("div", { className: "", children: _jsx("img", { src: stars, alt: "" }) }), _jsxs("div", { className: "flex gap-1", children: [_jsx("b", { children: customer.name }), _jsx("img", { src: ticket, alt: "" })] }), _jsx("div", { className: "flex", children: _jsxs("p", { className: "leading-[22px] text-[rgb(97,96,96)] line-clamp-6", children: ["\"", customer.comment, "\""] }) })] }) }, index))) })] }));
};
export default Commits;
