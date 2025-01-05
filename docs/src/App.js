import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Characters from './components/Characters';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


