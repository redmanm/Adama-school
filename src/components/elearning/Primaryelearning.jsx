import React from 'react';
import { motion } from 'framer-motion';
import './PrimaryElearning.css';

const Primaryelearning = () => {
  return (
    <div className="elearning-container">
      <motion.h1 
        className="elearning-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Welcome to Smart Learning
      </motion.h1>

      <motion.p 
        className="elearning-subtitle"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Enhance Your Skills with Our Online Courses
      </motion.p>

      <motion.div 
        className="elearning-image-container"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img src="https://via.placeholder.com/600x400" alt="Learning" className="elearning-image" />
      </motion.div>

      <motion.button
        className="elearning-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Primaryelearning;
