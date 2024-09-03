import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PrimarySchool.css';
import { useTranslation } from 'react-i18next';

import axios from 'axios';




const PrimarySchool = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Fetch schools data from the backend
    axios.get('http://localhost:5000/schools')
      .then((response) => {
        setSchools(response.data);
      })
      .catch((error) => {
        console.error('Error fetching schools:', error);
      });
  }, []);




  const { t } = useTranslation();

  const [ratings, setRatings] = useState(Array(schools.length).fill(0));
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const navigate = useNavigate();



  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };
  const handleImageClick = (school) => {
    navigate(`/school/${school.name}`, { state: { school } });
};



//   const handleImageClick = (school) => {
//     navigate(/school/${school.name}, { state: { school } });
//   };

  // Filter schools based on search criteria
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchName.toLowerCase()) &&
    school.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div className="primary-school-page">
      
      <h1>{t('public School')}</h1>
      {/* <h1>Governmental Schools</h1> */}
      <div className="search-container">
        <input
          type="text"
          placeholder={t("Search by name")}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder={t("Search by location")}
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="school-grid">
        {filteredSchools.map((school, index) => (
          <div key={index} className="school-card">
            <img
              src={school.img}
              alt={school.name}
              className="school-image"
              onClick={() => handleImageClick(school)}
            />
            <div className="school-info">
              <h2>{t(school.name)}</h2>
              <p><strong>{t('location')}:</strong> {school.location}</p>
              <p><strong>{t('student number')}:</strong> {school.students}</p>
              <p><strong>{t('builtyear')}:</strong> {school.buildYear}</p>
              <div className="rating">
                <p>{t('rate')}:</p>
                {[...Array(5)].map((star, i) => (
                  <span
                    key={i}
                    className={i < ratings[index] ? 'star rated' : 'star'}
                    onClick={() => handleRating(index, i + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PrimarySchool;