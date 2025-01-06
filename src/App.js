import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Characters from './components/Characters';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/characters" Component={Characters} />
      <Route path="/roadmap" Component={Roadmap} />
      <Route path="/contact" Component={Contact} />
      <Route path="*" Component={Error} />
      </Routes>
    </HashRouter>
  );
}

export default App;


