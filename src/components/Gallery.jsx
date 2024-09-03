import React, { useState } from 'react';
import './Gallery.css'; // Ensure you have this CSS file for styling

const galleryImages = [
  '.././photos/adama1.jpg',
  '.././photos/adama2.jpg',
  '.././photos/adama3.jpg',
  '.././photos/adama4.jpg',
  '.././photos/adama5.jpg',
  '.././photos/adama6.jpg',
  '.././photos/adama7.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(image, index)}
          >
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content-container" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" src={selectedImage} alt="Full view" />
            <span className="prev" onClick={showPrevImage}>&#10094;</span>
            <span className="next" onClick={showNextImage}>&#10095;</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
