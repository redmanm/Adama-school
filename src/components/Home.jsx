import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsPage from '../news/NewsPage'; // Import NewsPage component
import { useNavigate } from 'react-router-dom';
import Gallery from './Gallery';

const Home = () => {
  const navigate = useNavigate();

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



  return (
    <main className="main-content">
      <section className="hero">
        <video autoPlay loop muted className="background-video">
          <source src=".././video/Adama_City.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div> {/* Add overlay here */}
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

      {/* Replaced section - Smart Study Tips & Tricks */}
      <section id="tips-tricks-section" className="study-tips">
      <h2>Smart Study Tips & Tricks</h2>
      <div className="tips-content">

        <img
          src=".././photos/adama3.jpg" // Example image, adjust path as necessary
          alt="Study Tips"
          className="tips-image"
        />
        <motion.ul
          className="tips-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <li>Prioritize active learning and recall</li>
          <li>Use the Pomodoro technique to manage your time</li>
          <li>Create visual aids to enhance memory</li>
          <li>Stay organized with a study schedule</li>
          <li>Minimize distractions and set clear goals</li>
          <button className="cta-button" onClick={() => navigate('/LibraryPage')}>
            {t('Library')}
          </button>
        </motion.ul>
        
      </div>
    </section>
    



      <section>
      <h2>Gallery</h2>
      <div >
      {/* Other home page content */}
      <Gallery />
      {/* Other home page content */}
    </div>
      </section>

      <section>

      <div >
      {/* Other home page content */}
      <NewsPage />
      {/* Other home page content */}
    </div>
      </section>


    </main>
  );
};

export default Home;
