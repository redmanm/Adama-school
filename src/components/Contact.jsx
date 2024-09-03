import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import the leaflet CSS
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = 'https://api.web3forms.com/submit';
    const apiKey = '200d700f-a776-4a7f-a640-bbd32daa09ec';

    const formDetails = {
      ...formData,
      access_key: apiKey,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    }
  };

  const position = [8.5410610, 39.2701042]; // Coordinates for the map
  const zoomLevel = 15; // Zoom level for the map

  return (
    <div className="contact-us-page">
      <h1 className="fade-in">Contact Us</h1>
      
      {/* Information Cards */}
      <div className="info-cards-container">
        <div className="info-card animate">
          <i className="fas fa-map-marker-alt"></i>
          <h3>OUR MAIN OFFICE</h3>
          <p>Adama, East Shoa, Ethiopia</p>
        </div>
        <div className="info-card animate">
          <i className="fas fa-phone-alt"></i>
          <h3>PHONE NUMBER</h3>
          <p>9141</p>
        </div>
        <div className="info-card animate">
          <i className="fas fa-envelope"></i>
          <h3>EMAIL</h3>
          <p>adamaschoolportal@gmail.com</p>
        </div>
        
        {/* Social Media Card */}
        <div className="social-media-card animate">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/adamaschoolportal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/adamaschoolportal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://t.me/adamaschoolportal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://www.youtube.com/@adamaschoolportal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Form and Map */}
      <div className="form-map-container">
        <div className="contact-form-container animate">
          {submitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
              ></textarea>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Map Card */}
        <div className="map-card animate">
          <h3>Our Location</h3>
          <MapContainer center={position} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Adama School Portal<br />East Shoa, Ethiopia
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
