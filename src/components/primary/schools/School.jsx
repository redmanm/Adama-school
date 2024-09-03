import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './School.css';
import { useTranslation } from 'react-i18next';

const School = () => {
  const [result, setResult] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { school } = location.state;

  const schoolCoordinates = [
    parseFloat(school.latitude),
    parseFloat(school.longitude),
  ];

  const galleryImages = [
    school.img ? school.img : 'default_image_path.jpg',
    'https://adama.cloud.com.et/gallery_images/1706607763.jpg',
    '.././photos/adama1.jpg',
    '.././photos/adama2.jpg',
    '.././photos/adama3.jpg',
    '.././photos/adama4.jpg',
    '.././photos/adama5.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "200d700f-a776-4a7f-a640-bbd32daa09ec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setShowSuccessMessage(true); // Show success message
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide after 3 seconds
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="school-page">
      <h1 className="school-title animate-title">{t(school.name)}</h1>
      <div className="school-details-card">
        <div className="card">
          <h2>{t('School Information')}</h2>
          <p><strong>{t('Location')}:</strong> {school.location}</p>
          <p><strong>{t('Students')}:</strong> {school.students}</p>
          <p><strong>{t('Build Year')}:</strong> {school.buildYear}</p>
          <p><strong>{t('Teachers')}:</strong> {school.teachers || 'N/A'}</p>
          <p><strong>{t('Staff')}:</strong> {school.staff || 'N/A'}</p>
          <p><strong>{t('Male Students')}:</strong> {school.male || 'N/A'}</p>
          <p><strong>{t('Female Students')}:</strong> {school.female || 'N/A'}</p>
        </div>
      </div>

      <div className="school-description-map">
        <div className="school-description animate-description">
          <h2>{t('About the School')}</h2>
          <p>Welcome to {school.name}, located in the beautiful city of {school.location}. Established in {school.buildYear}, we are proud to serve {school.students} students, providing quality education and fostering a nurturing environment.</p>
        </div>
        <div className="school-map-card">
          <div className="map-container">
            <MapContainer center={schoolCoordinates} zoom={13} style={{ height: '200px', width: '100%', borderRadius: '10px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={schoolCoordinates}>
                <Popup>{school.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="gallery-container">
            <div className="gallery">
              <button className="prev-btn" onClick={handlePrevImage}>&#10094;</button>
              <img
                src={galleryImages[currentImageIndex]}
                alt="School Gallery"
                className="gallery-image animate-gallery-image"
                onClick={toggleFullScreen}
              />
              <button className="next-btn" onClick={handleNextImage}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>

      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={toggleFullScreen}>
          <button className="prev-btn full" onClick={handlePrevImage}>&#10094;</button>
          <img
            src={galleryImages[currentImageIndex]}
            alt="Full Screen"
            className="fullscreen-image"
          />
          <button className="next-btn full" onClick={handleNextImage}>&#10095;</button>
        </div>
      )}

      {showSuccessMessage && (
        <div className="success-message animate-success">
          <p>🎉 Your feedback has been submitted successfully! 🎉</p>
        </div>
      )}

      <div className="feedback-section">
        <h2 className="animate-feedback-title">{t('We Value Your Feedback')}</h2>
        <form className="feedback-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={feedback.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit" className="submit-btn">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default School;
