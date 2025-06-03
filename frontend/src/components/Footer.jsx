import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5 border-top border-secondary"s tyle={{ alignItems: 'center' }}>
      <div className="container">
        <div className="row gy-4 text-center text-md-justify">
          
          {/* Brand and Description */}
          <div className="col-md-3" style={{ textAlign: 'center' }}>
            <h5 className="fw-bold d-flex align-items-center justify-content-center mb-3" style={{ textAlign: 'center' }}>
              {/* <img 
                src="/logo192.png"
                alt="Medi-Queue Logo"
                width="35"
                height="35"
                className="me-2 rounded-circle border"
              /> */}
              Medi-Queue 
            </h5>
            <p className="small text-white" style={{ textAlign: 'center' }}>
              Streamline patient management with intelligent queueing for clinics and hospitals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-3" style={{ textAlign: 'center' }}>
            <h6 className="fw-semibold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled" style={{ textAlign: 'center' }}>
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><Link to="/services" className="footer-link">Services</Link></li>
              <li className="mb-2"><Link to="/about" className="footer-link">About</Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3" style={{ textAlign: 'center' }}>
            <h6 className="fw-semibold mb-3 text-uppercase">Resources</h6>
            <ul className="list-unstyled" style={{ textAlign: 'center' }}>
              <li className="mb-2"><a href="/faq" className="footer-link">FAQ</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3" style={{ textAlign: 'center' }}>
            <h6 className="fw-semibold mb-3 text-uppercase">Contact</h6>
            <p className="small mb-2"><i className="fas fa-envelope me-2"></i> support@jhsoftware.com</p>
            <p className="small mb-2"><i className="fas fa-map-marker-alt me-2"></i> Sri Lanka, Colombo</p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3" style={{ textAlign: 'center' }}>
              <a href="https://facebook.com/" className="me-3 text-light social-icon" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://facebook.com/" className="me-3 text-light social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com/" className="me-3 text-light social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://facebook.com/" className="text-light social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Footer Bottom */}
        <div className="text-center small text-white">
          &copy; {new Date().getFullYear()} JH Software Solutions. All rights reserved.
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .footer-link {
          color: #ccc;
          text-decoration: none;
        }
        .footer-link:hover {
          color: #fff;
          text-decoration: underline;
        }
        .social-icon {
          font-size: 16px;
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: #0d6efd;
        }
        img {
          background: white;
        }
      `}</style>

      {/* Load Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-pZgaGus8G8lrUGJrgvVfQeY5gA4XfV64aEAnbn+OGTC8eYvRoMIibGdFXyldCTk3HzPb+CZGEcRKeP27Riow3w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </footer>
  );
}

export default Footer;
