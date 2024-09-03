import React, { useContext, useState } from 'react';
import { BooksContext } from '../../App';
import './ELearningAdmin.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ELearningAdmin = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    year: '',
    example: '',
    cover: null,
    description: '',
    pdf: null,
    video: null,
  });

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewBook({ ...newBook, [name]: files[0] });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBookWithMedia = {
      ...newBook,
      cover: newBook.cover ? URL.createObjectURL(newBook.cover) : null,
      pdf: newBook.pdf ? URL.createObjectURL(newBook.pdf) : null,
      video: newBook.video ? URL.createObjectURL(newBook.video) : null,
    };
    setBooks([...books, newBookWithMedia]);
    setNewBook({
      title: '',
      author: '',
      year: '',
      example: '',
      cover: null,
      description: '',
      pdf: null,
      video: null,
    });
  };

  const openVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="e-learning-admin">
      <h1>E-Learning Admin</h1>
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
              placeholder="Example"
              value={newBook.example}
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
            <h5>Cover Image</h5>
            <input
              type="file"
              name="cover"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            <h5>PDF File</h5>
            <input
              type="file"
              name="pdf"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <h5>Video</h5>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleFileChange}
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
                  <p><strong>Example:</strong> {book.example}</p>
                  <p><strong>Description:</strong> {book.description}</p>
                  {book.pdf && <a href={book.pdf} target="_blank" rel="noopener noreferrer">Open PDF</a>}
                  {book.video && (
                    <div className="video-container">
                      <button className="video-button" onClick={() => openVideo(book.video)}>
                        <FontAwesomeIcon icon={faPlay} /> Watch Video
                      </button>
                    </div>
                  )}
                </div>
                <button onClick={() => handleDeleteBook(index)}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video controls>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-button" onClick={closeVideo}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ELearningAdmin;
