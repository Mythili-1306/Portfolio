import "./Skills.css";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiTensorflow,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaPython />,
      title: "Python",
      desc: "Programming, automation, data processing and analytics.",
    },
    {
      icon: <FaJava />,
      title: "Java",
      desc: "Object-oriented programming and application development.",
    },
    {
      icon: <SiDjango />,
      title: "Django",
      desc: "Building secure and scalable web applications.",
    },
    {
      icon: <SiMysql />,
      title: "MySQL",
      desc: "Database design, management and queries.",
    },
    {
      icon: <FaDatabase />,
      title: "Machine Learning",
      desc: "Predictive models and intelligent systems.",
    },
    {
      icon: <SiTensorflow />,
      title: "Data Analytics",
      desc: "Data analysis and insights for decision making.",
    },
    {
      icon: <FaGithub />,
      title: "Git & GitHub",
      desc: "Version control and collaborative development.",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML",
      desc: "Semantic and accessible web page structure.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      desc: "Responsive layouts and modern UI design.",
    },
  ];

  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">SKILLS</h2>

      <p className="skills-subtitle">
        Technologies and tools I have worked with through academic projects,
        internships, and practical development experience.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>

            <h4>{skill.title}</h4>

            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;