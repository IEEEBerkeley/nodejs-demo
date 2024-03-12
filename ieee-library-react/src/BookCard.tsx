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
            <img src="https://dictionary.cambridge.org/us/images/thumb/book_noun_001_01679.jpg?version=5.0.388" alt="Book Cover" />
            <div className="card-info">
                <h3>{title}</h3>
                <p>{author}</p>
                <button className='button' onClick={handleBookmark}>{isBookmarked ? 'Unbookmark' : 'Bookmark'}</button>
            </div>
        </div>
    );
}

export default BookCard;