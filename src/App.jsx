import { useState } from 'react';
import Header from './components/Header.jsx';
import SobreMim from './components/SobreMim.jsx';
import Portifolio from './components/Portifolio.jsx';
import Contato from './components/Contato.jsx';
import Curriculum from './components/Curriculum.jsx';
import Footer from './components/Footer.jsx';

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
