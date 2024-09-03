import React from 'react';
import Slider from 'react-slick';
import './MainContent.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContent = () => {
  const scrollToSection = () => {
    document.getElementById('cta-section').scrollIntoView({ behavior: 'smooth' });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = ['https://th.bing.com/th/id/R.0b9592d1e8a89c1239a0d6a849c59bfb?rik=Ib5gnkls2HA%2fpA&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.wlihHDka3wIs3zWOuCuX3QHaDe?w=299&h=164&c=7&r=0&o=5&pid=1.7',
    'https://constative.com/wp-content/uploads/2015/11/adama2.jpg', // Repeat for demonstration
    'https://th.bing.com/th/id/R.0b9592d1e8a89c1239a0d6a849c59bfb?rik=Ib5gnkls2HA%2fpA&pid=ImgRaw&r=0'
  ];

  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-text">
          <h1>Pre Primary</h1>
          <p>Where Playful Learning Meets Expert Instruction</p>
          <button className="cta-button" onClick={scrollToSection}>Learn More</button>
        </div>
        <div className="hero-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={'Slide ${index}'} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section id="cta-section" className="cta">
        <h2>Discover Our Programs</h2>
        <p>Join us for an engaging and enriching pre-primary education experience.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </main>
  );
};

export default MainContent;
