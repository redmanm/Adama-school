import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaHandsHelping, FaHistory } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="intro-text"
          animate={{ x: [0, 15, -15, 0] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        >
          Welcome to Adama School Portal, where we blend playful learning with expert instruction. Our mission is to provide a nurturing environment for our students to thrive academically and personally.
        </motion.p>

        <div className="photo-grid">
          <motion.div
            className="photo-item"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://adama.cloud.com.et/gallery_images/1706607763.jpg" alt="School Building" />
          </motion.div>
          <motion.div
            className="photo-item"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://adama.cloud.com.et/gallery_images/1700586322.jpg" alt="Classroom" />
          </motion.div>
          <motion.div
            className="photo-item"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://adama.cloud.com.et/gallery_images/1689975892.jpg" alt="Students at Play" />
          </motion.div>
        </div>

        <div className="mission-vision-values">
          <motion.div
            className="mission card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaBullseye className="icon" />
            <h3>Mission</h3>
            <p>
              Adama city administration’s mission is creating a resilient & suitable city for residence, making the city the hub of investments, trade, industry, commerce & conference/tourism.
            </p>
          </motion.div>

          <motion.div
            className="vision card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaEye className="icon" />
            <h3>Vision</h3>
            <p>
              Aspire to see Adama City as a Strong Industrial Center by 2043.
            </p>
          </motion.div>

          <motion.div
            className="core-values card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaHandsHelping className="icon" />
            <h3>Core Values</h3>
            <p>
              Excellence, teamwork, and innovation; open and continuous communications; diversity, integrity, and humor; a helpful, courteous, and positive attitude.
            </p>
          </motion.div>
        </div>

      </div>

      <div className="history-adama">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          History of Adama City
        </motion.h2>
        <motion.p
          className="history-text"
          animate={{ x: [0, 15, -15, 0] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        >
          Adama, also known as Nazreth, has a rich history that dates back to the early 20th century. Initially established as a small settlement, Adama has grown into one of the most important cities in Ethiopia, known for its strategic location and vibrant culture. The city has played a significant role in the country's development, particularly in trade and industry.
        </motion.p>
        <motion.div
          className="history-icon"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <FaHistory className="icon" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
