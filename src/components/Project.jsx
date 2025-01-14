import './Project.css';

function Project() {
  const projects = [
    {
      title: "READme",
      imageUrl: "./src/image/placeholder.jpg",
      githubLink: "https://github.com/Liciaav/Licia-README",
    },
    {
      title: "My Cars",
      imageUrl: "./src/image/cars.webp",
      githubLink: "https://github.com/Liciaav/Licia-My-Cars",
    },
    {
      title: "Weather App",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/Liciaav/Licia-Weather.app",
    },
    {
      title: "CMS",
      imageUrl: "./src/image/placeholder.jpg",
      githubLink: "https://github.com/Liciaav/CMS-project",
    },
    {
      title: "Candidate Search",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/Liciaav/Licia-s-Candidate-Search",
    },
    {
      title: "Kanban Board",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/Liciaav/Licia-Kanban-Board",
    },
    {
      title: "Social Network",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/Liciaav/Licia-Social-Network",
    },
    {
      title: "Book Search",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/Liciaav/Licia-Book-Search",
    },
    {
      title: "Happiest of Hours",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/BriannaVitan/Happiest-of-Hours",
    },
    {
      title: "Trip Planner 3000",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/kaneganteng/Trip-Planner-3000",
    },
    {
      title: "Hangman 2",
      imageUrl: "./src/image/wheather.jpeg",
      githubLink: "https://github.com/IsakTL/hangman-2",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
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