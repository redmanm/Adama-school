import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './PrivateSchool.css';
import { useTranslation } from 'react-i18next';

// Sample data for schools with additional properties
const schools = [
  { 
    name: 'Makkobili School', 
    location: 'Adama', 
    payment: 2500, 
    img: '.././photos/Makkobili School 1.jpg', 
    latitude: '8.558909297325568', 
    longitude: '39.26345264015705', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 25,
    female: 240,
    male: 220
  },
  { 
    name: 'Dabe Artu KG And Primary School', 
    location: 'Adama', 
    payment: 2250, 
    img: '.././photos/Dabe Artu KG And Primary School1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 230,
    male: 230
  },
  { 
    name: 'NAFYAD School (Main Campus)', 
    location: 'Adama', 
    payment: 2500, 
    img: '.././photos/NAFYAD School (Main Campus)1.jpg', 
    latitude: '8.537412', 
    longitude: '39.26454', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 28,
    female: 250,
    male: 210
  },
  { 
    name: 'Kegna Academy', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Kegna Academy1.jpg', 
    latitude: '8.544949686359889', 
    longitude: '39.282319240225384', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 32,
    female: 260,
    male: 200
  },
  { 
    name: 'Hollyseviour School', 
    location: 'Adama', 
    payment: 2300, 
    img: '.././photos/Hollyseviour school1.jpg', 
    latitude: '8.561970076898413', 
    longitude: '39.268903224814345', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 27,
    female: 245,
    male: 215
  },
  { 
    name: 'Chilalo School', 
    location: 'Adama', 
    payment: 2100, 
    img: '.././photos/Chilalo School1.jpg', 
    latitude: '7.950654113360877', 
    longitude: '39.13368788666927', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 22,
    female: 220,
    male: 240
  },
  { 
    name: 'Dana Atsede Hitsanat School', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Dana Atsede hitsanat School 1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 29,
    female: 235,
    male: 225
  },
  { 
    name: 'Arsema Youth Academy', 
    location: 'Adama', 
    payment: 2600, 
    img: '.././photos/Arsema Youth Academy1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 31,
    female: 245,
    male: 215
  },
  { 
    name: 'Wonderland Academy', 
    location: 'Adama', 
    payment: 2200, 
    img: '.././photos/Wonderland academy1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 26,
    female: 240,
    male: 220
  },
  { 
    name: 'Hagotel School ', 
    location: 'Adama', 
    payment: 2000, 
    img: '.././photos/Hagotel School1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 24,
    female: 230,
    male: 230
  },
  { 
    name: 'Abdi Boru Primary and Secondary School', 
    location: 'Adama', 
    payment: 2200, 
    img: '.././photos/Abdi Boru Primary and Secondary School1.jpg', 
    latitude: '8.561751476984966', 
    longitude: '39.26464944022531', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 250,
    male: 210
  },
  { 
    name: 'Akbar School', 
    location: 'Adama', 
    payment: 2000, 
    img: '.././photos/Akbar school1.jpg', 
    latitude: '8.928177169266737', 
    longitude: '38.56636269695826', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 23,
    female: 235,
    male: 225
  },
  { 
    name: 'Wise Adama Yuuz Academy', 
    location: 'Adama', 
    payment: 2300, 
    img: '.././photos/Wise Adama Yuuz academy1.jpg', 
    latitude: '8.564277175574079', 
    longitude: '39.26588501324163', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 27,
    female: 240,
    male: 220
  },
  { 
    name: 'Kamara School ', 
    location: 'Adama', 
    payment: 2100, 
    img: '.././photos/Kamara School 6.jpg', 
    latitude: '8.562035151008509', 
    longitude: '39.29603954207762', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 26,
    female: 245,
    male: 215
  },
  { 
    name: 'Hill Top Academy', 
    location: 'Adama', 
    payment: 2400, 
    img: '.././photos/Hill Top Academy1.jpg', 
    latitude: '9.017515093164981', 
    longitude: '38.73396842303185', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 30,
    female: 250,
    male: 210
  },
  { 
    name: 'Barnabas School', 
    location: 'Adama', 
    payment: 2600, 
    img: '.././photos/Barnabas School1.jpg', 
    latitude: '8.573484279379961', 
    longitude: '39.26773812117688', 
    description: 'The best school in Adama', 
    students: 460, 
    buildYear: 2014,
    staff: 35,
    female: 260,
    male: 200
  }
];


const PrivateSchool = () => {
  const { t } = useTranslation();
  const [ratings, setRatings] = useState(Array(schools.length).fill(0));
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPayment, setSearchPayment] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  // Filter schools based on search criteria
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(searchName.toLowerCase()) &&
    school.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
    (searchPayment === '' || school.payment <= parseInt(searchPayment))
  );

  // Navigate to the detailed school page
  const handleImageClick = (school) => {
    navigate(`/school/${school.name}`, { state: { school } });
  };

  return (
    <div className="private-school-page">
      <h1>{t('Private School')}</h1>
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
        <input
          type="number"
          placeholder={t("Search by payment")}
          value={searchPayment}
          onChange={(e) => setSearchPayment(e.target.value)}
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
              onClick={() => handleImageClick(school)} // Add click event
            />
            <div className="school-info">
              <h2>{t(school.name)}</h2>
              <p><strong>{t('location')}:</strong> {school.location}</p>
              <p><strong>Payment per month:</strong> {school.payment} Birr</p>
              <p><strong>Description:</strong> {school.description}</p>
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

export default PrivateSchool;



