import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import CoffeeChat from './components/CoffeeChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <AllProjects />
      <CoffeeChat />
      <Footer />
    </div>
  );
}

export default App;
