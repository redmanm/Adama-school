import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Datas = () => {
  const [schools, setSchools] = useState([]);
  const [privateSchools, setPrivateSchools] = useState([]);

  useEffect(() => {
    // Fetch schools data from the backend
    axios.get('http://localhost:5000/schools')
      .then((response) => {
        setSchools(response.data);
      })
      .catch((error) => {
        console.error('Error fetching schools:', error);
      });

    // Fetch private schools data from the backend
    axios.get('http://localhost:5000/schools2')
      .then((response) => {
        setPrivateSchools(response.data);
      })
      .catch((error) => {
        console.error('Error fetching private schools:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Adama Schools</h1>
      <div className="school-list">
        {schools.map((school, index) => (
          <div key={index} className="school-card">
            <img src={school.img} alt={school.name} style={{ width: '200px', height: '150px' }} />
            <h2>{school.name}</h2>
            <p><strong>Location:</strong> {school.location}</p>
            <p><strong>Students:</strong> {school.students}</p>
            <p><strong>Female:</strong> {school.female}</p>
            <p><strong>Male:</strong> {school.male}</p>
            <p><strong>Teachers:</strong> {school.teachers}</p>
            <p><strong>Staff:</strong> {school.staff}</p>
            <p><strong>Build Year:</strong> {school.buildYear}</p>
            <p><strong>Description:</strong> {school.description}</p>
          </div>
        ))}
      </div>

      <h1>Private Schools</h1>
      <div className="school-list">
        {privateSchools.map((school, index) => (
          <div key={index} className="school-card">
            <img src={school.img} alt={school.name} style={{ width: '200px', height: '150px' }} />
            <h2>{school.name}</h2>
            <p><strong>Location:</strong> {school.location}</p>
            <p><strong>Students:</strong> {school.students}</p>
            <p><strong>Female:</strong> {school.female}</p>
            <p><strong>Male:</strong> {school.male}</p>
            <p><strong>Teachers:</strong> {school.teachers}</p>
            <p><strong>Staff:</strong> {school.staff}</p>
            <p><strong>Build Year:</strong> {school.buildYear}</p>
            <p><strong>Payment:</strong> {school.payment}</p>
            <p><strong>Description:</strong> {school.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datas;
