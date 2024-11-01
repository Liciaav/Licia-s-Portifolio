function Portfolio() {
    return (
      <section>
        {Projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    );
  }

  function Project({ title, imageUrl, deployedLink, githubLink }: {
      title: any,
      imageUrl: any,
      deployedLink: any,
      githubLink: any
  )}; any
    return (
      <div>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
        <a href={deployedLink}>View Live</a>
        <a href={githubLink}>View Code</a>
      </div>
    );
  }

  export default Project;
  