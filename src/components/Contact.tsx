import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">
            <span className="gradient-text">GET IN TOUCH</span>
          </h2>
          <p className="section-subtitle">
            Have questions or ready to start your build? Reach out to us today.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <span className="icon">📞</span>
              </div>
              <div className="info-text">
                <h3 style={{ marginTop: "0" }}>Call Us</h3>
                <p>Speak with our team directly</p>
                <a href="tel:4803709316" className="contact-link">
                  (480) 370-9316
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <span className="icon">📍</span>
              </div>
              <div className="info-text">
                <h3 style={{ marginTop: "0" }}>Visit Our Shop</h3>
                <p>Stop by and see us in person</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11029+N+24th+Ave+Suite+801+Phoenix+AZ+85029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  11029 N 24th Ave, Suite 801
                  <br />
                  Phoenix, AZ 85029
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <span className="icon">⏰</span>
              </div>
              <div className="info-text">
                <h3 style={{ marginTop: "0" }}>Shop Hours</h3>
                <div className="hours-status">
                  <span className="status-badge closed">Currently Closed</span>
                  <p>Opens 10:00 AM</p>
                </div>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Mon - Fri</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-card">
              <h3>Ready to Build?</h3>
              <p className="cta-text">
                Schedule a consultation with our team to discuss your project
                and get a personalized quote.
              </p>
              <div className="cta-buttons">
                <a href="tel:4803709316" className="btn btn-primary">
                  Call for Quote
                </a>
                <button className="btn btn-outline">Send Message</button>
              </div>
            </div>

            <div className="why-us">
              <h3>Why Choose Moon Performance?</h3>
              <ul className="benefits-list">
                <li>✓ Expert technicians with years of experience</li>
                <li>✓ Quality parts and expert installation</li>
                <li>✓ Personalized service for your build</li>
                <li>✓ Competitive pricing and financing options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
