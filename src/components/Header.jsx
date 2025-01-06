function Header({ setCurrentSection, currentSection}){
    return (
      <header>
        <h1 style={{ textAlign: "center", fontSize: "40px", fontFamily: "cursive" }}>Licia Arcanjo Vasconcelos</h1>
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
  }
    export default Header;
