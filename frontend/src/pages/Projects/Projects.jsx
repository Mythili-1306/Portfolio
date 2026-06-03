import "./Projects.css";
import { FaBrain, FaCloud } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      icon: <FaBrain />,
      title: "Insider Threat Detection Using Machine Learning",
      desc: "Developed a Django-based web application to detect insider threats using user behavior analytics. Implemented Random Forest, XGBoost, SVM, and KNN algorithms, achieving 97.5% prediction accuracy. Applied SMOTE for class balancing and built a real-time dashboard with authentication, threat scoring, and audit logging.",
      technologies: [
        "Python",
        "Django",
        "Machine Learning",
        "Random Forest",
        "XGBoost",
        "MySQL",
      ],
    },
    {
      icon: <FaCloud />,
      title: "Secure Cloud Storage Using SSGK Encryption",
      desc: "Designed and implemented a secure cloud storage system using Secret Sharing Group Key (SSGK) encryption. Integrated access control mechanisms and intrusion detection features to improve data privacy, storage efficiency, and protection against unauthorized access.",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "MySQL",
        "Cryptography",
        "Cloud Security",
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">Projects</h2>

      <p className="projects-subtitle">
        Academic and real-world projects focused on Machine Learning,
        Cloud Security, Data Analytics, and Software Development.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              {project.icon}
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;