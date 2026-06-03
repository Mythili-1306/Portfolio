import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./About.css";
import profile from "../images/about.JPG";
import resume from "./Resume.pdf";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="intro-img">
        <div className="my-image">
          <img src={profile} alt="Suthari Mythili" className="profile" />
        </div>

        <div className="introduction">
          <h1 className="about-title">ABOUT ME</h1>

          <p>
            I am <span className="name-color">Suthari Mythili</span>, a
            Computer Science & Engineering student and aspiring Data Analytics
            and Python Developer from Malla Reddy College of Engineering for
            Women, Hyderabad.
          </p>

          <p>
            I have hands-on experience in Python, Django, Machine Learning,
            Data Analytics, Cloud Computing, and Web Development. My interests
            include building intelligent applications, secure cloud solutions,
            and solving real-world problems through technology.
          </p>

          <p>
            I developed projects such as <strong>Insider Threat Detection Using
            Machine Learning</strong> and <strong>Secure Cloud Storage using
            Secret Sharing Group Key (SSGK) Encryption</strong>, focusing on
            security, analytics, and scalable software development.
          </p>

          <p>
            I am passionate about continuous learning, innovation, and creating
            impactful software solutions that combine technology with practical
            applications.
          </p>

          <ul className="socials">
            <li>
              <a
                href="https://www.linkedin.com/in/mythili-suthari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Mythili-1306"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/mythili._.1306_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </a>
            </li>
          </ul>

          <div className="download-resume">
            <a href={resume} download="Suthari_Mythili_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;