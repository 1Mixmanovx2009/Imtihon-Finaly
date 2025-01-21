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
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Sort from "../../assets/images/Sort.svg";
import ticket from "../../assets/images/ticket.svg";
import Frame from "../../assets/images/Frame (5).svg";
import { Rating } from "@mui/material";
import More from "../../assets/images/More.svg";
import Modal from "react-modal";
import "./Comments.css";
const api = axios.create({
    baseURL: "https://6787c664c4a42c9161083285.mockapi.io",
});
Modal.setAppElement("#root");
const Comments = () => {
    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [moreModalIsOpen, setMoreModalIsOpen] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const queryClient = useQueryClient();
    const { data: comments, isLoading, error } = useQuery({
        queryKey: ["comments", id],
        queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api.get(`/product/${id}/comments`);
            return response.data;
        }),
    });
    const addCommentMutation = useMutation({
        mutationFn: (newComment) => {
            return api.post(`/product/${id}/comments`, newComment);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comments", id] });
        },
    });
    const deleteCommentMutation = useMutation({
        mutationFn: (commentId) => {
            return api.delete(`/product/${id}/comments/${commentId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comments", id] });
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id)
            return;
        const newComment = {
            productId: id,
            userId: "1",
            name,
            grade: rating,
            commits: comment,
        };
        addCommentMutation.mutate(newComment);
        setModalIsOpen(false);
        setName("");
        setComment("");
        setRating(0);
    };
    const handleMoreClick = (commentId) => {
        setSelectedCommentId(commentId);
        setMoreModalIsOpen(true);
    };
    const handleDeleteComment = () => {
        if (selectedCommentId) {
            deleteCommentMutation.mutate(selectedCommentId);
            setMoreModalIsOpen(false);
        }
    };
    if (isLoading)
        return _jsx("p", { children: "Loading comments..." });
    if (error instanceof Error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    return (_jsxs("div", { children: [_jsxs("ul", { className: "flex justify-around items-center mb-[24px]", children: [_jsx("li", { children: _jsx("p", { className: "font-[400] text-[20px] leading-[22px] text-[#00000099]", children: "Product Details" }) }), _jsx("li", { children: _jsx("p", { className: "font-[500] text-[20px] leading-[22px]", children: "Rating & Reviews" }) }), _jsx("li", { children: _jsx("p", { className: "font-[400] text-[20px] leading-[22px] text-[#00000099]", children: "FAQs" }) })] }), _jsx("div", { className: "bg-[#0000001A] w-full h-[2px] mb-[46px]", children: _jsx("div", { className: "bg-black w-1/3 mx-auto  h-[2px]" }) }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("p", { className: "font-[700] text-[24px] leading-[32.4px]", children: ["All Reviews", " ", _jsxs("span", { className: "font-[400] text-[16px] leading-[22px]", children: ["(", (comments === null || comments === void 0 ? void 0 : comments.length) || 0, ")"] })] }), _jsxs("div", { className: "flex justify-between items-center gap-[10px]", children: [_jsx("div", { className: "p-[12px] bg-[#f0f0f0] w-[48px] h-[48px] rounded-full", children: _jsx("img", { src: Sort, alt: "" }) }), _jsxs("button", { className: "lates flex items-center justify-between gap-[21px] bg-[#f0f0f0] rounded-[62px] px-[20px] py-[13px]", children: ["Latest", _jsx("img", { src: Frame, alt: "" })] }), _jsx("button", { onClick: () => setModalIsOpen(true), className: "creat py-[13px] px-[29.5px] border-[2px] border-black rounded-[62px] bg-black text-white hover:bg-white hover:text-black duration-300", children: "Write a Review" })] })] }), _jsx("div", { className: "comment_detail mt-8  flex flex-wrap justify-between gap-[40px] mb-[36px]", children: comments === null || comments === void 0 ? void 0 : comments.map((comment) => (_jsxs("div", { className: "border rounded-[20px] flex items-start px-[32px] py-[28px]", children: [_jsxs("div", { className: "li w-[600px] flex flex-col gap-[18px]", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(Rating, { name: "half-rating", defaultValue: comment.grade, precision: 0.1 }), _jsxs("span", { children: [comment.grade, "/5"] })] }), _jsxs("div", { className: "flex gap-1", children: [_jsx("b", { children: comment.name }), _jsx("img", { src: ticket, alt: "" })] }), _jsx("div", { className: "flex", children: _jsxs("p", { className: "leading-[22px] text-[rgb(97,96,96)] line-clamp-6", children: ["\"", comment.commits, "\""] }) }), _jsx("p", { className: "text-[#00000099] text-[14px]", children: new Date(comment.createdAt).toLocaleDateString() })] }), _jsx("button", { onClick: () => handleMoreClick(comment.id), children: _jsx("img", { src: More, alt: "", width: 24, height: 24 }) })] }, comment.id))) }), _jsxs(Modal, { isOpen: modalIsOpen, onRequestClose: () => setModalIsOpen(false), className: "modal", overlayClassName: "overlay", children: [_jsx("h2", { className: "modal-title", children: "Write a Review" }), _jsxs("form", { onSubmit: handleSubmit, className: "modal-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { className: "form-label", children: "Name:" }), _jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), className: "form-input", placeholder: "Enter your name", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "form-label", children: "Comment:" }), _jsx("textarea", { value: comment, onChange: (e) => setComment(e.target.value), className: "form-textarea", placeholder: "Write your review", required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { className: "form-label", children: "Rating:" }), _jsx(Rating, { name: "simple-controlled", value: rating, precision: 0.1, onChange: (_, newValue) => {
                                            setRating(newValue || 0);
                                        }, className: "rating-input" })] }), _jsxs("div", { className: "form-buttons", children: [_jsx("button", { type: "button", onClick: () => setModalIsOpen(false), className: "cancel-button", children: "Cancel" }), _jsx("button", { type: "submit", className: "submit-button", children: "Submit" })] })] })] }), _jsxs(Modal, { isOpen: moreModalIsOpen, onRequestClose: () => setMoreModalIsOpen(false), className: "more-modal", overlayClassName: "overlay", children: [_jsx("h2", { className: "modal-title", children: "Do you want to delete this comment?" }), _jsxs("div", { className: "modal-buttons", children: [_jsx("button", { onClick: () => setMoreModalIsOpen(false), className: "cancel-button", children: "Close" }), _jsx("button", { onClick: handleDeleteComment, className: "delete-button", children: "Delete" })] })] })] }));
};
export default Comments;
