import '../styles/Services.css';

function Services(){
  const services = [
    {
      title: 'Performance Tuning',
      description: 'Custom ECU tuning to maximize your Evo\'s potential',
      icon: '🚀'
    },
    {
      title: 'Maintenance & Repairs',
      description: 'Expert maintenance and repair services for all Evo models',
      icon: '🔧'
    },
    {
      title: 'Engine Builds',
      description: 'Complete engine builds and rebuilds for maximum performance',
      icon: '⚙️'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">
          <span className="gradient-text">OUR SERVICES</span>
        </h2>
        <p className="section-subtitle">
          Expert services for your Mitsubishi Evolution
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
