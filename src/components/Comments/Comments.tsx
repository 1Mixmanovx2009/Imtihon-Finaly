import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Sort from '../../assets/images/Sort.svg';
import ticket from '../../assets/images/ticket.svg';
import Frame from '../../assets/images/Frame (5).svg';
import { Rating } from '@mui/material';
import More from '../../assets/images/More.svg';
import Modal from 'react-modal';
import './Comments.css';

const api = axios.create({
    baseURL: "https://6787c664c4a42c9161083285.mockapi.io",
});

interface Comment {
    id: string;
    productId: string;
    userId: string;
    name: string;
    grade: number;
    commits: string;
    createdAt: string;
}

Modal.setAppElement('#root');

const Comments: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [moreModalIsOpen, setMoreModalIsOpen] = useState(false); // "More" uchun modal
    const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null); // Tanlangan komment ID-si
    const queryClient = useQueryClient();

    // Kommentlarni olish
    const { data: comments, isLoading, error } = useQuery<Comment[]>({
        queryKey: ["comments", id],
        queryFn: async () => {
            const response = await api.get(`/product/${id}/comments`);
            return response.data;
        },
    });

    // Yangi komment qo'shish
    const addCommentMutation = useMutation({
        mutationFn: (newComment: Omit<Comment, 'id' | 'createdAt'>) => {
            return api.post(`/product/${id}/comments`, newComment);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', id] });
        },
    });

    // Kommentni o'chirish
    const deleteCommentMutation = useMutation({
        mutationFn: (commentId: string) => {
            return api.delete(`/product/${id}/comments/${commentId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', id] });
        },
    });

    // Yangi komment qo'shish formasi
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newComment = {
            productId: id,
            userId: "1",
            name,
            grade: rating,
            commits: comment,
        };
        addCommentMutation.mutate(newComment);
        setModalIsOpen(false);
        setName('');
        setComment('');
        setRating(0);
    };

    // "More" tugmasi bosilganda
    const handleMoreClick = (commentId: string) => {
        setSelectedCommentId(commentId); // Tanlangan komment ID-sini saqlash
        setMoreModalIsOpen(true); // Modalni ochish
    };

    // Kommentni o'chirish
    const handleDeleteComment = () => {
        if (selectedCommentId) {
            deleteCommentMutation.mutate(selectedCommentId); // Kommentni o'chirish
            setMoreModalIsOpen(false); // Modalni yopish
        }
    };

    if (isLoading) return <p>Loading comments...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <ul className='flex justify-around items-center mb-[24px]'>
                <li>
                    <p className='font-[400] text-[20px] leading-[22px] text-[#00000099]'>Product Details</p>
                </li>
                <li>
                    <p className='font-[500] text-[20px] leading-[22px]'>Rating & Reviews</p>
                </li>
                <li>
                    <p className='font-[400] text-[20px] leading-[22px] text-[#00000099]'>FAQs</p>
                </li>
            </ul>
            <div className='bg-[#0000001A] w-full h-[2px] mb-[46px]'>
                <div className='bg-black w-1/3 mx-auto  h-[2px]'></div>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-[700] text-[24px] leading-[32.4px]'>
                    All Reviews <span className='font-[400] text-[16px] leading-[22px]'>({comments?.length || 0})</span>
                </p>
                <div className='flex justify-between items-center gap-[10px]'>
                    <div className='p-[12px] bg-[#f0f0f0] w-[48px] h-[48px] rounded-full'>
                        <img src={Sort} alt="" />
                    </div>
                    <button className='lates flex items-center justify-between gap-[21px] bg-[#f0f0f0] rounded-[62px] px-[20px] py-[13px]'>
                        Latest
                        <img src={Frame} alt="" />
                    </button>
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className='creat py-[13px] px-[29.5px] border-[2px] border-black rounded-[62px] bg-black text-white hover:bg-white hover:text-black duration-300'
                    >
                        Write a Review
                    </button>
                </div>
            </div>

            <div className="comment_detail mt-8  flex flex-wrap justify-between gap-[40px] mb-[36px]">
                {comments?.map((comment) => (
                    <div key={comment.id} className="border rounded-[20px] flex items-start px-[32px] py-[28px]">
                        <div className="li w-[600px] flex flex-col gap-[18px]">
                            <div className="flex items-center">
                                <Rating name="half-rating" defaultValue={comment.grade} precision={0.1} />
                                <span>{comment.grade}/5</span>
                            </div>
                            <div className="flex gap-1">
                                <b>{comment.name}</b>
                                <img src={ticket} alt="" />
                            </div>
                            <div className="flex">
                                <p className="leading-[22px] text-[rgb(97,96,96)] line-clamp-6">
                                    "{comment.commits}"
                                </p>
                            </div>
                            <p className="text-[#00000099] text-[14px]">{new Date(comment.createdAt).toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => handleMoreClick(comment.id)}>
                            <img src={More} alt="" width={24} height={24} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Yangi komment qo'shish uchun modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2 className="modal-title">Write a Review</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label className="form-label">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Comment:</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="form-textarea"
                            placeholder="Write your review"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Rating:</label>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            precision={0.1}
                            onChange={(event, newValue) => {
                                setRating(newValue || 0);
                            }}
                            className="rating-input"
                        />
                    </div>
                    <div className="form-buttons">
                        <button
                            type="button"
                            onClick={() => setModalIsOpen(false)}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>

            {/* "More" uchun modal */}
            <Modal
                isOpen={moreModalIsOpen}
                onRequestClose={() => setMoreModalIsOpen(false)}
                className="more-modal"
                overlayClassName="overlay"
            >
                <h2 className="modal-title">Do you want to delete this comment?</h2>
                <div className="modal-buttons">
                    <button
                        onClick={() => setMoreModalIsOpen(false)}
                        className="cancel-button"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleDeleteComment}
                        className="delete-button"
                    >
                        Delete Comment
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default Comments;