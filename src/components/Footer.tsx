import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>MOON PERFORMANCE</h2>
            <p>Your trusted partner for high-performance vehicle builds and tuning.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:4803709316">(480) 370-9316</a>
              </li>
              <li>
                <a href="mailto:info@moonperformance.com">info@moonperformance.com</a>
              </li>
              <li>
                <span>11029 N 24th Ave, Suite 801<br />Phoenix, AZ 85029</span>
              </li>
              <li>
                <span>Mon-Fri: 10:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Engine Tuning</li>
              <li>Performance Upgrades</li>
              <li>Turbo Installations</li>
              <li>Dyno Tuning</li>
              <li>Custom Fabrication</li>
              <li>Maintenance & Repairs</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Moon Performance. All Rights Reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider">|</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
