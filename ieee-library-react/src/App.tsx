import React from 'react';
import logo from './logo.svg';
import './App.css';
import BooksGallery from './BooksGallery';
import BookForm from './BookForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Corona Public Library</h1>
      <BooksGallery />
      </header>
      <BookForm />
    </div>
  );
}

export default App;
