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
import CancellationRefunds from './pages/CancellationRefunds';
import TermsConditions from './pages/TermsConditions';
import Privacy from './pages/Privacy';

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
          <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
