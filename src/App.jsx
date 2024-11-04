import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';

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
      <AboutMe/>
    </div>
  );
}

export default App;