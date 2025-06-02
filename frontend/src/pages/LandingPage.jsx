import React, { useState, useEffect } from 'react';
import '../styles/LandingPageStyles.css';

import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import heroImage4 from '../assets/hero4.jpg';

import contentImage1 from '../assets/content1.jpg';

function LandingPage() {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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

    {/* Contents */}
      <div className="container mt-5">
        <div className="content-1">
          <div className="content-description">
            <h2>All Hospital Services in One Digital Hub</h2>
            <p>
              Centralizing and digitalizing hospital services streamlines healthcare delivery by integrating all essential functions—appointments, patient records, 
              prescriptions, and billing—into a unified digital platform. This approach not only reduces administrative burdens but also enhances efficiency, transparency, 
              and accessibility for both patients and medical staff. With everything connected in one system, patients can access care faster, avoid long queues, 
              and experience more coordinated, personalized treatment across departments and facilities.
            </p>
          </div>
          <div className="image">
            <img src={contentImage1} alt="Hospital platform" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
