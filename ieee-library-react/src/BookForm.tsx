// src/BookForm.tsx
import React, { useState } from 'react';
import './BookForm.module.css';

const BookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Logic to handle form submission
    };

    return (
        <h1>Form</h1>
    );
};

export default BookForm;
