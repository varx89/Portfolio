import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <header id='navigation'>
        <Navigation />
      </header>

      <section id='home'>
        <Body />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='portfolio'>
        <Portfolio />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <section id='footer'>
        <Footer />
      </section>
      
    </div>
  );
}

export default App;
