import React from 'react';
import './App.css';
import Section1 from './components/section1/section1.component';
import Section2 from './components/section2/section2.component';
import Section3 from './components/section3/section3.component';
import Header from './components/header/header.component';
import SocialIcons from './components/socialicons/socialicons.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <SocialIcons />
    </div>
  );
}

export default App;
