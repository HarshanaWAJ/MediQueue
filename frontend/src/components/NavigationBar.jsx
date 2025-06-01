import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeNavbar = () => {
    if (expanded) setExpanded(false);
  };

  const toggleNavbar = () => setExpanded(!expanded);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => (location.pathname === path ? 'active fw-bold' : '');

  return (
    <>
      {/* Add this in your public/index.html:
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      */}
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          scrolled ? 'bg-white shadow-sm' : ''
        } transition-navbar navbar-light`}
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <div className="container">
          {/* Logo and brand name */}
          <Link
            className={`navbar-brand d-flex align-items-center ${
              scrolled ? 'text-primary' : 'text-dark'
            } fw-bold`}
            to="/"
            onClick={closeNavbar}
          >
            {/* <img
              src="/logo192.png"
              alt="Logo"
              width="30"
              height="30"
              className="me-2 rounded-circle"
            /> */}
            Medi-Queue
          </Link>

          {/* Hamburger toggle button */}
          <button
            className={`navbar-toggler border-0 ${
              scrolled ? 'text-primary' : 'text-white'
            }`}
            type="button"
            aria-controls="navbarNav"
            aria-expanded={expanded ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="material-icons" style={{ fontSize: '28px' }}>
              menu
            </span>
          </button>

          {/* Collapsible menu items */}
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link px-3 ${isActive('/')}`}
                  onClick={closeNavbar}
                >
                  <span className="material-icons me-1">home</span> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={`nav-link px-3 ${isActive('/services')}`}
                  onClick={closeNavbar}
                >
                  <span className="material-icons me-1">miscellaneous_services</span> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link px-3 ${isActive('/about')}`}
                  onClick={closeNavbar}
                >
                  <span className="material-icons me-1">info</span> About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link px-3 ${isActive('/contact')}`}
                  onClick={closeNavbar}
                >
                  <span className="material-icons me-1">contact_mail</span> Contact
                </Link>
              </li>
            </ul>

            {/* Login/Register buttons */}
            <div className="d-flex gap-2">
              <Link
                to="/login"
                className={`btn btn-primary rounded-pill px-4 fw-semibold ${
                  scrolled ? '' : 'text-white border-white'
                }`}
                onClick={closeNavbar}
              >
                <span className="material-icons me-1">login</span> Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary rounded-pill px-4 fw-semibold"
                onClick={closeNavbar}
              >
                <span className="material-icons me-1">person_add</span> Register
              </Link>
            </div>
          </div>
        </div>

        {/* Smooth transition styles */}
        <style>{`
          .transition-navbar {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
          .nav-link.active {
            color: #0d6efd !important;
            border-bottom: 2px solid #0d6efd;
          }
          .navbar-toggler {
            outline: none !important;
          }
          .material-icons {
            vertical-align: middle;
          }
        `}</style>
      </nav>
    </>
  );
}

export default NavigationBar;
