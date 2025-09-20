import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">MOON PERFORMANCE LLC</span>
        </h1>
        <p className="hero-subtitle">
          Elite auto servicing and tuning shop specializing in
          <br />
          <span className="highlight">Mitsubishi Evolutions</span>
        </p>
        
        <div className="hero-cta">
          <a href="/contact" className="cta-button call-now">
            <span className="phone-icon">📞</span> Call Now
          </a>
          <a href="/shop" className="cta-button visit-shop">
            <span className="location-icon">📍</span> Visit Shop
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <h3 className="stat-value">5.0<span className="star">★</span></h3>
            <p className="stat-label">Rating (109 Reviews)</p>
          </div>
          {/* <div className="stat-item">
            <h3 className="stat-value">EVO</h3>
            <p className="stat-label">Specialists</p>
          </div> */}
          <div className="stat-item">
            <h3 className="stat-value">PHOENIX</h3>
            <p className="stat-label">Arizona</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
