import React, { useState } from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./project.css";
const projects = [
  {
    number: "01",
    title: "AgriFlow",
    category: "Web Application",
    description:
      "A smart farmer procurement system with slot booking, token generation and queue tracking.",
    tech: "React · CSS · JavaScript",
  },
  {
    number: "02",
    title: "Student Management",
    category: "Database Project",
    description:
      "A student information system to manage student details, departments and academic records.",
    tech: "React · MySQL",
  },
  {
    number: "03",
    title: "Portfolio Website",
    category: "Frontend Project",
    description:
      "A responsive personal portfolio built with React components and browser routing.",
    tech: "React · React Router · CSS",
  },
];
const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Java", level: 65 },
  { name: "Python", level: 60 },
  { name: "Cyber Security", level: 65 },
];
function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <span className="eyebrow">HELLO, WELCOME TO MY SPACE</span>
        <h1>
          I'm <span>Subhalakshmi R</span>
          <br />
          A Creative Developer.
        </h1>
        <p>
          I'm a Cyber Security student who enjoys building
          interactive websites, exploring AI, and solving
          real-world problems through technology.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            Explore My Work ↗
          </Link>
          <Link to="/contact" className="outline-btn">
            Let's Connect
          </Link>
        </div>
        <div className="hero-tags">
          <span>Web Development</span>
          <span>Artificial Intelligence</span>
          <span>Cyber Security</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="profile-circle">
          <div className="profile-symbol">&lt;/&gt;</div>
          <h2>SUBHA</h2>
          <p>Code · Create · Explore</p>
        </div>
        <div className="floating-card card-top">
          <span>✦</span> Creative Mind
        </div>
        <div className="floating-card card-bottom">
          <span>✧</span> Always Learning
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <span className="eyebrow">GET TO KNOW ME</span>
        <h1>More Than Just <span>Code.</span></h1>
        <p>A little about my world, interests and goals.</p>
      </div>
      <div className="about-layout">
        <div className="about-card about-main">
          <div className="about-icon">✦</div>
          <h2>Hi, I'm Subhalakshmi R</h2>
          <p>
            I'm a B.E. Computer Science student specializing
            in Cyber Security. I enjoy learning how technology
            works and creating useful digital experiences.
          </p>
          <p>
            I like combining creative thinking with logical
            problem-solving. Every project gives me a chance
            to learn something new and improve my skills.
          </p>
        </div>
        <div className="about-card">
          <span className="mini-label">01 / INTEREST</span>
          <h3>Web Development</h3>
          <p>Creating clean, responsive and interactive websites.</p>
        </div>
        <div className="about-card">
          <span className="mini-label">02 / INTEREST</span>
          <h3>Artificial Intelligence</h3>
          <p>Exploring intelligent systems and new technologies.</p>
        </div>
        <div className="about-card">
          <span className="mini-label">03 / INTEREST</span>
          <h3>Cyber Security</h3>
          <p>Learning about secure systems and digital safety.</p>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <span className="eyebrow">THINGS I'VE BUILT</span>
        <h1>Selected <span>Projects.</span></h1>
        <p>Ideas transformed into practical digital experiences.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>
              <span className="project-arrow">↗</span>
            </div>
            <span className="mini-label">
              {project.category}
            </span>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.split(" · ").map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <span className="eyebrow">MY TOOLKIT</span>
        <h1>Skills & <span>Exploration.</span></h1>
        <p>Technologies I work with and continue to explore.</p>
      </div>
      <div className="skills-layout">
        <div className="skills-card">
          <h2>Technical Skills</h2>
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-card explore-card">
          <h2>Currently Exploring</h2>
          <div className="explore-item">
            <span>01</span>
            <div>
              <h3>React Development</h3>
              <p>Components, hooks and routing</p>
            </div>
          </div>
          <div className="explore-item">
            <span>02</span>
            <div>
              <h3>Artificial Intelligence</h3>
              <p>Machine learning fundamentals</p>
            </div>
          </div>
          <div className="explore-item">
            <span>03</span>
            <div>
              <h3>Secure Coding</h3>
              <p>Building safer web applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Journey() {
  const journey = [
    {
      year: "01",
      title: "Started My Coding Journey",
      description:
        "Exploring programming fundamentals and learning how to solve problems with code.",
    },
    {
      year: "02",
      title: "Discovered Web Development",
      description:
        "Started building websites using HTML, CSS, JavaScript and React.",
    },
    {
      year: "03",
      title: "Building Real Projects",
      description:
        "Applying my knowledge through academic projects and creative experiments.",
    },
  ];
  return (
    <section className="content-page">
      <div className="section-heading">
        <span className="eyebrow">MY LEARNING STORY</span>
        <h1>The Journey <span>So Far.</span></h1>
        <p>Every step is a new opportunity to learn and grow.</p>
      </div>
      <div className="journey-list">
        {journey.map((item) => (
          <div className="journey-item" key={item.year}>
            <div className="journey-number">{item.year}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="journey-quote">
        <span>“</span>
        Learning never stops. Every project is a new beginning.
      </div>
    </section>
  );
}
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSuccess("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Thank you! Your message is ready.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="content-page">
      <div className="section-heading">
        <span className="eyebrow">LET'S TALK</span>
        <h1>Have an Idea? <span>Let's Connect.</span></h1>
        <p>Feel free to send a message or share an idea.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Start a conversation.</h2>
          <p>
            Have a project idea, collaboration opportunity,
            or just want to say hello? Send me a message.
          </p>
          <div className="contact-detail">
            <span>✉</span>
            <div>
              <small>Email</small>
              <p>subhalakshmi028@example.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <span>⌘</span>
            <div>
              <small>Interests</small>
              <p>Web · AI · Cyber Security</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <label>Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="What is this about?"
          />
          <label>Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            required
          />
          <button type="submit" className="primary-btn">
            Send Message ↗
          </button>
          {success && (
            <p className="contact-success">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
}
function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oops! This page does not exist.</p>
      <Link to="/" className="primary-btn">
        Back to Home
      </Link>
    </section>
  );
}
export default function Project() {
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Journey", path: "/journey" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="portfolio">
      <header className="navbar">
        <Link to="/" className="logo">
          subha<span>.</span>
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="nav-cta">
          Let's Talk ↗
        </Link>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>© 2026 Subhalakshmi R</span>
        <span>Designed with React ♡</span>
      </footer>
    </div>
  );
}