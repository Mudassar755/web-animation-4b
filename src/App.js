import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import SVGsComponent from './components/SVGsComponent';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import About from './components/About'



function App() {

  return (
    <div>
      <Header />
      <ContentSection />
      <About />
      {/* <SVGsComponent /> */}

    </div>
  );
}

export default App;
