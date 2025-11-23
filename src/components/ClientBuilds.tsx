import '../styles/ClientBuilds.css';

function ClientBuilds() {
  const builds = [
    {
      title: 'Stage 1 Builds',
      description: 'Entry-level performance upgrades including intake, exhaust, and ECU tuning',
      image: '/images/moon1.jpg',
      alt: 'Stage 1 Evo Build'
    },
    {
      title: 'Stage 2 Builds',
      description: 'Enhanced performance with turbo upgrades, fuel system improvements, and more',
      image: '/images/moon2.jpg',
      alt: 'Stage 2 Evo Build'
    },
    {
      title: 'Stage 3 Builds',
      description: 'Full race builds with built engines, big turbos, and custom tuning',
      image: '/images/moon3.jpg',
      alt: 'Stage 3 Evo Build'
    }
  ];

  return (
    <section id="client-builds" className="client-builds-section">
      <div className="client-builds-container">
        <h2 className="section-title">
          <span className="gradient-text">CLIENT BUILDS</span>
        </h2>
        <p className="section-subtitle">
          Custom builds tailored to your performance goals
        </p>
        
        <div className="client-builds-grid">
          {builds.map((build, index) => (
            <div key={index} className="build-card">
              <div className="build-image-container">
                <img 
                  src={build.image} 
                  alt={build.alt} 
                  className="build-image"
                />
              </div>
              <h3 className="build-title">{build.title}</h3>
              <p className="build-description">{build.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientBuilds;
