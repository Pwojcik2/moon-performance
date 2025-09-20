import { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/images/moon.jpg" alt="Moon Performance" className="logo-img" />
          </a>
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="/" className="navbar-link">Home</a></li>
            <li><a href="/services" className="navbar-link">Services</a></li>
            <li><a href="/builds" className="navbar-link">Builds</a></li>
            <li><a href="/reviews" className="navbar-link">Reviews</a></li>
            <li><a href="/contact" className="navbar-link">Contact</a></li>
          </ul>
        </div>
        
        <div className="navbar-cta">
          <a href="/contact" className="call-now-btn">Call Now</a>
        </div>
        
        <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
