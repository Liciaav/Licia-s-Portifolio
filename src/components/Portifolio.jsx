import Project from './Project';

function Portfolio() {
    return (
      <section>
        {Project.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    );
  }
  export default Portfolio;
