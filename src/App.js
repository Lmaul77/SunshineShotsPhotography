import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import WeddingGallery from './pages/WeddingGallery';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddinggallery" element={<WeddingGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
