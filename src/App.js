import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <AllProjects />
    </div>
  );
}

export default App;
