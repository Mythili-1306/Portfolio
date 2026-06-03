import "./Home.css";
import profile from "../images/developer-girl.png";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">

        <div className="home-content">
          <span className="home-tag">
            Data Analytics & Python Developer
          </span>

          <h1 className="home-title">
            Hi, I'm <span>Suthari Mythili</span>
          </h1>

          <p className="home-text">
            Computer Science Engineering student with expertise in
            Python, Django, Machine Learning, Data Analytics and
            Web Development. Passionate about building secure,
            intelligent and scalable software solutions.
          </p>

          <div className="home-buttons">
            <div className="projects-btn">
              <a href="#projects">View Projects</a>
            </div>

            <div className="explore-btn">
              <a href="#about">About Me</a>
            </div>
          </div>

          <div className="home-stats">
            <div className="stat-card">
              <h3>97.5%</h3>
              <p>ML Accuracy</p>
            </div>

            <div className="stat-card">
              <h3>2+</h3>
              <p>Internships</p>
            </div>

            <div className="stat-card">
              <h3>4+</h3>
              <p>Certifications</p>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img src={profile} alt="Mythili" />
        </div>

      </div>
    </section>
  );
}

export default Home;
