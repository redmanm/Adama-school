import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://th.bing.com/th/id/R.0b9592d1e8a89c1239a0d6a849c59bfb?rik=Ib5gnkls2HA%2fpA&pid=ImgRaw&r=0" alt="Narayana Group of Schools" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Academics</li>
          <li>Admission</li>
          <li>Digital Initiatives</li>
          <li>More</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
