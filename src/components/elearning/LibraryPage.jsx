import React, { useContext, useEffect, useState } from 'react';
import { BooksContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPlay } from '@fortawesome/free-solid-svg-icons';
import './LibraryPage.css';

const LibraryPage = () => {
  const { books } = useContext(BooksContext);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.header, .sub-header, .item-container, .text');
    elements.forEach((element) => {
      element.classList.add('visible');
    });
  }, []);

  const openVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="page-container">
      <h1 className="header">Welcome to E-Learning</h1>
      <h2 className="sub-header">Explore our resources</h2>
      
      <div className="content-container">
        {books.map((book, index) => (
          <div className="item-container" key={index}>
            <img className="image" src={book.cover} alt={book.title} />
            <div className="text-container">
              <p className="text title">{book.title}</p>
              <p className="text author">{book.author}</p>
              <p className="text year">{book.year}</p>
              <p className="text example">{book.example}</p>
              <p className="text description">{book.description}</p>
              
              {/* Display PDF if available */}
              {book.pdf && <a href={book.pdf} download="Book.pdf">Download PDF</a>}
              {book.pdf && (
                <div className="pdf-container">
                  <a href={book.pdf} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} /> View PDF
                  </a>
                </div>
              )}


              {/* Display video if available */}
              {book.video && (
                <div className="video-container">
                  <button className="video-button" onClick={() => openVideo(book.video)}>
                    <FontAwesomeIcon icon={faPlay} /> Watch Video
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
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

export default LibraryPage;
