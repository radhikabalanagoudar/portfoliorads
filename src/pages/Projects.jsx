import "./pages.css";

function Projects() {
  const projects = [
    {
      title: "Vehicle Service Management System — Backend",
      description:
        "A REST API for managing customers, vehicles and service requests, with register/login authentication using hashed passwords and JWT tokens. Built with a modular structure — separate config, models, controllers and routes.",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"]
    },
    {
      title: "Personal Portfolio (this site)",
      description:
        "A multi-page portfolio built with React and React Router, styled from scratch, to bring together everything learned about components, routing and frontend structure.",
      tags: ["React", "Vite", "React Router", "CSS"]
    }
  ];

  return (
    <div className="page container">
      <p className="eyebrow">03 — projects</p>
      <h2>Things I've built</h2>

      <div className="project-grid section-gap">
        {projects.map((project) => (
          <div className="card project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="card project-card project-card-empty">
          + add your next project here
        </div>
      </div>
    </div>
  );
}

export default Projects;
