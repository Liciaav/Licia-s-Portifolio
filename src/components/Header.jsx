function Header({ setCurrentSection, currentSection}){
    return (
      <header>
        <nav>
          {['AboutMe', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={currentSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </nav>
        <h1>Licia Arcanjo Vasconcelos</h1>
      </header>
    );
  }
    export default Header;
