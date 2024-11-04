function Header({ setCurrentSection, currentSection}:any ):any
    return (
      <header>
        <h1>Licia Arcanjo Vasconcelos</h1>
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
      </header>
    );

    export default Header;
