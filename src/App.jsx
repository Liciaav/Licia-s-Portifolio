import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;