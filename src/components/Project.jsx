import './Project.css';

function Project() {
  const projects = [
    {
      title: "READme",
      imageUrl: "/images/readme.webp",
      githubLink: "https://github.com/Liciaav/Licia-README",
    },
    {
      title: "My Cars",
      imageUrl: "/images/cars.jpg",
      githubLink: "https://github.com/Liciaav/Licia-My-Cars",
    },
    {
      title: "Weather App",
      imageUrl: "/images/wheather.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Weather.app",
    },
    {
      title: "CMS",
      imageUrl: "/images/employee.avif",
      githubLink: "https://github.com/Liciaav/CMS-project",
    },
    {
      title: "Candidate Search",
      imageUrl: "/images/candidate-search.jpg",
      githubLink: "https://github.com/Liciaav/Licia-s-Candidate-Search",
    },
    {
      title: "Kanban Board",
      imageUrl: "/images/kanban-board.avif",
      githubLink: "https://github.com/Liciaav/Licia-Kanban-Board",
    },
    {
      title: "Social Network",
      imageUrl: "/images/social-network.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Social-Network",
    },
    {
      title: "Book Search",
      imageUrl: "/images/book-search.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Book-Search",
    },
    {
      title: "Happiest of Hours",
      imageUrl: "/images/happy-hour.jpg",
      githubLink: "https://github.com/BriannaVitan/Happiest-of-Hours",
    },
    {
      title: "Trip Planner 3000",
      imageUrl: "/images/viagem.webp",
      githubLink: "https://github.com/kaneganteng/Trip-Planner-3000",
    },
    {
      title: "Hangman 2",
      imageUrl: "/images/hangman.webp",
      githubLink: "https://github.com/IsakTL/hangman-2",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={project.imageUrl} alt={`${project.title} image`} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
            </div>

            <div class="flip-card-back">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Veja Codigo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;