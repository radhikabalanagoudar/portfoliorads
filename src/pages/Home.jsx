import { Link } from "react-router-dom";
import "./pages.css";

function Home() {
  const skills = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Git"];

  return (
    <div className="page container hero">
      <div className="hero-status">
        <span className="hero-status-dot" />
        available for internships
      </div>

      <p className="eyebrow">whoami</p>
      <h1>Hi, I'm Radhika.</h1>
      <p className="hero-lede">
        I'm a full-stack developer in training, currently learning to build
        web applications with the MERN stack — MongoDB, Express, React and
        Node.js. This site is where I'm collecting what I build along the way.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          view projects →
        </Link>
        <Link to="/contact" className="btn btn-outline">
          get in touch
        </Link>
      </div>

      <p className="eyebrow">currently working with</p>
      <div className="skills-row">
        {skills.map((skill) => (
          <span className="pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;
