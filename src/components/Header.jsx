function Header({ setCurrentSection, currentSection }) {
  return (
    <header style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>Licia Arcanjo Vasconcelos</h1>
      <h2 style={{ textAlign: "center", fontSize: "20px" }}>Full Stack Desenvolvedora Web</h2>
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
