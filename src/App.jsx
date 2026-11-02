import { useEffect, useState } from "react";
import "./App.css";
import "./theme.css";
import Projects from "./Projects";

const NAV = ["home", "about", "skills", "projects", "experience", "contact"];

const SKILL_GROUPS = [
  {
    title: "AI & MACHINE LEARNING",
    items: ["Python", "Artificial Intelligence", "Machine Learning", "TensorFlow", "RAG / LLMs"],
  },
  {
    title: "DATA",
    items: ["Data Analytics", "Pandas", "SQL", "PostgreSQL", "Plotly"],
  },
  {
    title: "BUILD & SHIP",
    items: ["FastAPI", "React", "Streamlit", "PHP · MySQL"],
  },
  {
    title: "TOOLS",
    items: ["Git & GitHub", "Render Deployment"],
  },
];

function App() {
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  // Highlight nav link of the section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Gautam Khatri
        </a>

        <div className="nav-links">
          {NAV.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Gautam Khatri</h1>
            <h2>AI/ML Student & Developer</h2>

            <p className="hero-text">
              I build practical AI/ML applications, data analytics
              solutions, and software projects focused on solving
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="button button-dark"
              >
                View Projects ↓
              </a>

              <a
                href="https://github.com/gautamkhatri57"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-light"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/gautam-khatri-343324416/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-light"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>6</strong>
                <span>PROJECTS</span>
              </div>
              <div>
                <strong>6</strong>
                <span>LIVE DEMOS</span>
              </div>
              <div>
                <strong>1</strong>
                <span>INTERNSHIP</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section reveal">
          <p className="section-label">ABOUT</p>
          <h2>About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am a TYBCA student specializing in AI and Data Science,
                with a strong interest in Artificial Intelligence,
                Machine Learning, and Data Analytics.
              </p>

              <p>
                I enjoy building practical applications, working with
                data, and turning ideas into usable software products.
                My projects cover AI, analytics, automation,
                web applications, and backend development.
              </p>
            </div>

            <div className="about-details">
              <div className="detail">
                <span>Education</span>
                <strong>BCA — AI & Data Science</strong>
              </div>
              <div className="detail">
                <span>Current Level</span>
                <strong>TYBCA</strong>
              </div>
              <div className="detail">
                <span>Focus</span>
                <strong>AI / ML & Data Analytics</strong>
              </div>
              <div className="detail">
                <span>Looking For</span>
                <strong>AI/ML Internship</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section reveal">
          <p className="section-label">SKILLS</p>
          <h2>Skills</h2>

          <p className="section-description">
            Technologies and tools I have worked with across my
            academic, personal, and internship projects.
          </p>

          <div className="skill-groups">
            {SKILL_GROUPS.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skills-list">
                  {group.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section reveal">
          <p className="section-label">PROJECTS</p>
          <h2>Selected Projects</h2>

          <p className="section-description">
            A selection of AI, data analytics, automation, and
            software development projects I have built.
          </p>

          <Projects />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section reveal">
          <p className="section-label">EXPERIENCE</p>
          <h2>Experience</h2>

          <div className="experience-card">
            <div>
              <span className="experience-type">INTERNSHIP · 2026</span>
              <h3>AI / Software Development Intern</h3>
              <p className="experience-company">
                CopyHart Services Pvt. Ltd.
              </p>
            </div>

            <div className="experience-description">
              <p>
                Worked on practical AI and software development
                projects including an AI Resume Analyser, Candidate
                Onboarding Management System, chatbot workflows,
                automated email systems, application testing,
                updates, and deployment.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact reveal">
          <p className="section-label">CONTACT</p>
          <h2>Let's Connect</h2>

          <p className="section-description">
            I'm open to AI/ML internship opportunities,
            data-focused roles, and interesting technology projects.
          </p>

          <div className="contact-links">
            <a href="mailto:gautamkhatri325@gmail.com">Email ↗</a>
            <a
              href="https://github.com/gautamkhatri57"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/gautam-khatri-343324416/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Gautam Khatri</p>
        <p>AI / ML · Data Analytics · Development</p>
      </footer>

      <button
        type="button"
        aria-label="Back to top"
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;
