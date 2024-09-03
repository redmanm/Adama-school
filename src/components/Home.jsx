import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsPage from './news/NewsPage'; // Import NewsPage component
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    // Add your image paths here if needed
  ];

  const galleryImages = [
    '.././photos/adama1.jpg',
    '.././photos/adama2.jpg',
    '.././photos/adama3.jpg',
    '.././photos/adama4.jpg',
    '.././photos/adama5.jpg',
    '.././photos/adama6.jpg',
    '.././photos/adama7.jpg',
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <main className="main-content">
      <section className="hero">
        <video autoPlay loop muted className="background-video">
          <source src=".././video/Adama_City.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 60 }}
          >
            {t('welcome')}
          </motion.h1>
          <motion.p
            animate={{
              x: [0, 20, -20, 0],
              opacity: [0.5, 1, 0.5, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {t('description')}
          </motion.p>
          <motion.p
            animate={{
              x: [1000, 40, -400, 10],
              opacity: [10, 10, 10, 100],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: 2,
            }}
          >
            {t('description2')}
          </motion.p>
          <button className="cta-button" onClick={() => navigate('/NewsPage')}>
            {t('Latest News')}
          </button>
        </div>
        <div className="hero-slider">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="cta-section" className="cta">
        <h2>{t('program')}</h2>
        <p>{t('program information')}</p>
        <button className="cta-button">Get Started</button>
      </section>
      
      {/* New Features Section */}
      <section className="features">
        <h2>Discover What Makes Us Unique</h2>
        <div className="features-list">
          {[
            "Empowering Future Innovators",
            "Personalized Learning Experience",
            "State-of-the-Art Facilities",
            "Expert Faculty and Staff",
            "Dynamic Curriculum Design",
            "Global Learning Opportunities",
            "Cutting-Edge Technology Integration",
            "Comprehensive Student Support",
            "Community Engagement Initiatives",
            "Commitment to Excellence"
          ].map((text, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3>{text}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Full view" />
        </div>
      )}
    </main>
  );
};

export default Home;
