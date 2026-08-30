import "./pages.css";

function About() {
  return (
    <div className="page container">
      <p className="eyebrow">01 — about me</p>
      <h2>A little about me</h2>

      <div className="split section-gap">
        <div>
          <p>
            I am a AIML student at SDMCET, passionate about leveraging technology to solve real-world problems. I'm currently focused on building full-stack web applications and exploring the latest trends in artificial intelligence and machine learning.
          
          </p>
          
        </div>

        <div className="card fact-list">
          <div>
            <span className="fact-label">location</span>
            <span className="fact-value">DHARWAD, Karnataka</span>
          </div>
          <div>
            <span className="fact-label">focus</span>
            <span className="fact-value">Full-Stack Web Development</span>
          </div>
          <div>
            <span className="fact-label">currently learning</span>
            <span className="fact-value">React Router &amp; REST APIs</span>
          </div>
          <div>
            <span className="fact-label">hobbies</span>
            <span className="fact-value">Art,Reading,Traveling</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
