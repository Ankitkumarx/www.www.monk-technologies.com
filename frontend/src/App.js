import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import './styles/responsive.css';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Training from './pages/Training';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
