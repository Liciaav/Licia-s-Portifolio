import { useState } from 'react';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Portifolio from './components/Portifolio';
import Contato from './components/Contato';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('SobreMim');

  const renderSection = () => {
    switch (currentSection) {
      case 'Portifolio':
        return <Portifolio />;
      case 'Contato':
        return <Contato />;
      case 'Curriculum':
        return <Curriculum />;
      default:
        return <SobreMim />;
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
