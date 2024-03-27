import './BookCard.css';
import React, { useState } from 'react';

type Book = {
    _id: string;
    title: string;
    author: string;
};

const BookCard: React.FC<Book> = ({ _id, title, author }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    
    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className="card">
            <img src="https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY=" alt="Book Cover" />
            <div className="card-info">
                <h3>{title}</h3>
                <p>{author}</p>
                <button className='button' onClick={handleBookmark}>{isBookmarked ? 'Unbookmark' : 'Bookmark'}</button>
            </div>
        </div>
    );
}

export default BookCard;