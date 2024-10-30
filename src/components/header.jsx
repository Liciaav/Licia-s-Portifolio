function Header({ setCurrentSection, currentSection }) {
    return (
      <header>
        <h1>Your Name</h1>
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