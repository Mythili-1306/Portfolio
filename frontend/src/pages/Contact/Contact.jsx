import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || name.length < 2) {
      newErrors.name = "Enter a valid name";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!message || message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      "7960cfad-f439-455c-b49b-1b05a8dc8497"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();

        setTimeout(() => {
          setResult("");
        }, 3000);
      } else {
        setResult("❌ Failed to send message.");
      }
    } catch (error) {
      setResult("❌ Something went wrong.");
    }
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have a project, internship opportunity, or collaboration idea?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-wrapper">

        <div className="contact-info">
          <span className="contact-badge">Let's Connect</span>

          <h2>Let's build something together.</h2>

          <p>
            I'm always interested in discussing technology,
            development, machine learning, data analytics,
            and exciting opportunities.
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <a href="mailto:mythilisuthari@gmail.com">
              mythilisuthari@gmail.com
            </a>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <a href="tel:+917396491302">
              +91 73******02
            </a>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
          />
          {errors.name && <span>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
          />
          {errors.email && <span>{errors.email}</span>}

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
          />
          {errors.message && <span>{errors.message}</span>}

          <button type="submit">
            Send Message
          </button>

          {result && (
            <p className="result-text">{result}</p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;