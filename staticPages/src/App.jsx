import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Design from './pages/services/Design';
import Development from './pages/services/Development';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/services">Services</Link>
  <Link to="/contact">Contact</Link>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="design" element={<Design />} />
          <Route path="development" element={<Development />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
