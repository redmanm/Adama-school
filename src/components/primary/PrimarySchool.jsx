import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PrimarySchool.css';
import { useTranslation } from 'react-i18next';

import axios from 'axios';


const schools = [
  { 
    name: 'Wonji Shoa Senior Secondary School', 
    location: 'Adama', 
    students: 350, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2012, 
    img: '.././photos/Wonji Shoa Senior Secondary School 1.jpg', 
    latitude: '8.46703303787526', 
    longitude: '39.227468025412804', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Adama Boset Secondary School', 
    location: 'Adama', 
    students: 460, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2014, 
    img: '.././photos/Adama Boset Secondary School 1.jpg', 
    latitude: '8.541907510913235', 
    longitude: '39.2690803345678', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Hawas Secondary School', 
    location: 'Adama', 
    students: 380, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2011, 
    img: '.././photos/Hawas Secondary School 2.jpg', 
    latitude: '8.769610869087291', 
    longitude: '38.95691753467094', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Hawas Melkesa Secondary School', 
    location: 'Adama', 
    students: 500, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2007, 
    img: '.././photos/Hawas Melkesa Secondary School 3.jpg', 
    latitude: '8.412581759570566', 
    longitude: '39.34072131079108', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Adama Secondary School', 
    location: 'Adama', 
    students: 420, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2013, 
    img: '.././photos/student1.jpg', 
    latitude: '8.529627108997945', 
    longitude: '39.25862830486706', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Bole Preparatory School', 
    location: 'Adama', 
    students: 400, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2009, 
    img: '.././photos/Bole Preparatory School 1.jpg', 
    latitude: '8.767575008949692', 
    longitude: '38.9596641165518', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Goro Secondary School', 
    location: 'Adama', 
    students: 310, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2010, 
    img: '.././photos/student1.jpg', 
    latitude: '8.557324879492164', 
    longitude: '39.26111389597881', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Ifa Boru Sire Ababune Secondary School', 
    location: 'Adama', 
    students: 390, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2011, 
    img: '.././photos/student1.jpg', 
    latitude: '8.526342628057574,', 
    longitude: '39.23688556305454', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Wonji Secondary School', 
    location: 'Adama', 
    students: 370, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2006, 
    img: '.././photos/student1.jpg', 
    latitude: '8.458597434288821', 
    longitude: '39.214209411320674', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Dembela Secondary School', 
    location: 'Adama', 
    students: 420, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2008, 
    img: '.././photos/Dembela Secondary School 1.jpg', 
    latitude: '8.231964094895616', 
    longitude: '39.03982768668039', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Wonji Didimtu Secondary School', 
    location: 'Adama', 
    students: 450, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2012, 
    img: '.././photos/student1.jpg', 
    latitude: '8.461187333171774', 
    longitude: '39.21382069303573', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Burka Secondary School', 
    location: 'Adama', 
    students: 400, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2010, 
    img: '.././photos/Burka Secondary School 1.jpg', 
    latitude: '8.533977238007196', 
    longitude: '39.27363208136973', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Adama Abdi Boru Elementary School', 
    location: 'Adama', 
    students: 430, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2011, 
    img: '.././photos/Adama Abdi Boru Elementary School 1.jpg', 
    latitude: '8.5625816765507', 
    longitude: '39.26477464875146', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Gada Kilole', 
    location: 'Adama', 
    students: 430, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2011, 
    img: '.././photos/Gada Kilole 1.jpg', 
    latitude: '8.53411349707479', 
    longitude: '39.25392074816173', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Ifa Boru Sekakalo Secondary School', 
    location: 'Adama', 
    students: 500, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2005, 
    img: '.././photos/student1.jpg', 
    latitude: '8.570157715104958', 
    longitude: '39.25297093394556', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Adama Model Senior Secondary School', 
    location: 'Adama', 
    students: 450, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2010, 
    img: '.././photos/student1.jpg', 
    latitude: '8.571757726616358', 
    longitude: '39.2583612461529', 
    description: 'The best school in Adama' 
  },
  { 
    name: 'Ifa Boru Dabe Secondary School', 
    location: 'Adama', 
    students: 300, 
    female: 560, 
    male: 850, 
    teachers: 50, 
    staff: 20, 
    buildYear: 2008, 
    img: '.././photos/student1.jpg', 
    latitude: '8.557177668824914', 
    longitude: '39.25672415411586', 
    description: 'The best school in Adama' 
  },
];


const PrimarySchool = () => {
  // const [schools, setSchools] = useState([]);

  // useEffect(() => {
  //   // Fetch schools data from the backend
  //   axios.get('http://localhost:5000/schools')
  //     .then((response) => {
  //       setSchools(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching schools:', error);
  //     });
  // }, []);




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
