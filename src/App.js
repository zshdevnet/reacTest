// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function Home() {
  return (
    <div style={{ minHeight: '90vh', padding: '20px' }}>
      <h1>Welcome to MyReactApp 🚀</h1>
      <p>This is your first clean React project!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
