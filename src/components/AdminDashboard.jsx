import React, { useContext, useState } from 'react';
import { BooksContext } from '../App';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    example: '',
    cover: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      title: '',
      author: '',
      year: '',
      example: '',
      cover: '',
      description: '',
    });
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <li><Link to="/NewsAdmin">NewsAdmin</Link></li>
      <div className="admin-sections">
        <section className="add-book">
          <h2>Add New Book</h2>
          <form onSubmit={handleAddBook}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newBook.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBook.author}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Publication Year"
              value={newBook.year}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="example"
              placeholder="example"
              value={newBook.example}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cover"
              placeholder="Cover Image URL"
              value={newBook.cover}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newBook.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Book</button>
          </form>
        </section>
        <section className="book-list">
          <h2>Book List</h2>
          <div className="book-cards">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.cover} alt={book.title} className="book-cover" />
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Year:</strong> {book.year}</p>
                  <p><strong>example:</strong> {book.example}</p>
                  <p><strong>Description:</strong> {book.description}</p>
                </div>
                <button onClick={() => handleDeleteBook(index)}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
