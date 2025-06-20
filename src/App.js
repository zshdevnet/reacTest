// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* Main Content */}
      <div style={{ minHeight: '90vh', padding: '20px' }}>
        <h1>Welcome to MyReactApp 🚀</h1>
        <p>This is your first clean React project!</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
