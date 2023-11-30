import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/index';
import WeddingGallery from './pages/WeddingGallery';
import PortraitGallery from './pages/PortraitGallery'
import NewbornGallery from './pages/NewbornGallery'


function App() {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>} />
        <Route path="/weddinggallery" element={<WeddingGallery isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>} />
        <Route path='/portraitgallery' element={<PortraitGallery isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>} />
        <Route path='/newborngallery' element={<NewbornGallery isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/> } />
      </Routes>
    </Router>
  );
}

export default App;
