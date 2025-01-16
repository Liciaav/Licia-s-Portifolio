import './Project.css';

function Project() {
  const projects = [
    {
      title: "READme",
      imageUrl: "./src/image/readme.webp",
      githubLink: "https://github.com/Liciaav/Licia-README",
    },
    {
      title: "My Cars",
      imageUrl: "./src/image/cars.jpg",
      githubLink: "https://github.com/Liciaav/Licia-My-Cars",
    },
    {
      title: "Weather App",
      imageUrl: "./src/image/wheather.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Weather.app",
    },
    {
      title: "CMS",
      imageUrl: "./src/image/emplotee.avif",
      githubLink: "https://github.com/Liciaav/CMS-project",
    },
    {
      title: "Candidate Search",
      imageUrl: "./src/image/candidate-search.jpg",
      githubLink: "https://github.com/Liciaav/Licia-s-Candidate-Search",
    },
    {
      title: "Kanban Board",
      imageUrl: "./src/image/kanban-board.avif",
      githubLink: "https://github.com/Liciaav/Licia-Kanban-Board",
    },
    {
      title: "Social Network",
      imageUrl: "./src/image/social-network.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Social-Network",
    },
    {
      title: "Book Search",
      imageUrl: "./src/image/book-search.jpg",
      githubLink: "https://github.com/Liciaav/Licia-Book-Search",
    },
    {
      title: "Happiest of Hours",
      imageUrl: "./src/image/happy-hour.jpg",
      githubLink: "https://github.com/BriannaVitan/Happiest-of-Hours",
    },
    {
      title: "Trip Planner 3000",
      imageUrl: "./src/image/viagem.webp",
      githubLink: "https://github.com/kaneganteng/Trip-Planner-3000",
    },
    {
      title: "Hangman 2",
      imageUrl: "./src/image/hangman.webp",
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
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;