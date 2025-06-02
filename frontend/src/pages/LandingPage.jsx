import React, { useState, useEffect } from 'react';
import '../styles/LandingPageStyles.css';

import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import heroImage4 from '../assets/hero4.jpg';

function LandingPage() {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main mt-5" style={{ paddingTop: '1rem' }}>
      <section className="hero" aria-label="Hero section">
        <div className="slideshow">
          {images.map((img, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`slide ${isActive ? 'active-slide' : 'inactive-slide'}`}
                style={{ backgroundImage: `url(${img})` }}
                aria-hidden={!isActive}
              />
            );
          })}
        </div>

        <div className="overlay">
          <h1 className='headline'>Medi Queue System </h1>
          <h2 className="subheadline">Centralizing Hospital Services for You</h2>
          <p className="description">
            Streamline your healthcare experience with Medi Queue — a platform designed to connect you
            with all government hospital services in one easy-to-access place. No more waiting lines, no
            more confusion.
          </p>
        </div>
      </section>

      <div className="container"></div>
    </div>
  );
}

export default LandingPage;
