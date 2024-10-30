function Portfolio() {
    return (
      <section>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    );
  }

  function Project({ title, imageUrl, deployedLink, githubLink }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
        <a href={deployedLink}>View Live</a>
        <a href={githubLink}>View Code</a>
      </div>
    );
  }
  