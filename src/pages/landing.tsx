import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ClientBuilds from '../components/ClientBuilds';
import ClientReviews from '../components/ClientReviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ClientBuilds />
        <ClientReviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;