// src/BookForm.tsx
import React, { useState } from 'react';
import styles from './BookForm.module.css';

const BookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: Logic to handle form submission
        try {
            await fetch('http://localhost:8080/api/books', { // YOUR CODE HERE
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, author }), // YOUR CODE HERE: REPLACE KEY1, KEY2
            });
            setTitle('');
            setAuthor('');
            alert("Submission was Successful!"); // YOUR CODE HERE
        } catch (error) {
            console.error(error); // YOUR CODE HERE
            alert("Submission failed. Please try again."); // YOUR CODE HERE
        }
    };

    return (
        <>
            <button className={styles.button} onClick={toggleModal}>Add New Book</button>

            {isModalOpen && (
                <div className={styles.modalBackdrop}>
                    <div className={styles.modal}>
                        <button className={styles.closeButton} onClick={toggleModal}>X</button>

                        <form className={styles.bookForm} onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    placeholder='The Odyssey'
                                />
                            </div>
                            <div>
                                <label htmlFor="author">Author:</label>
                                <input
                                    type="text"
                                    id="author"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                    placeholder='Homer'
                                />
                            </div>
                            <button className='button' type="submit">Add Book</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookForm;
