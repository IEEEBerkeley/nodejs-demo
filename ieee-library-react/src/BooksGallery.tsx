import React, { useEffect, useState } from 'react';
import './BooksGallery.module.css';
import BookCard from './BookCard';

type Book = {
    _id: string;
    title: string;
    author: string;
};

const BooksGallery: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/books');
                const responseJson = await response.json();
                setBooks(responseJson);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="gallery">
            {books.map((book) => (
                <BookCard key={book._id} {...book} />
            ))}
        </div>
    );
};

export default BooksGallery;
