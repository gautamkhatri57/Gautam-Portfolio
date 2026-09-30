import "./App.css";
import Projects from "./Projects";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <a href="#home" className="logo">
          Gautam Khatri
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">

            <p className="eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Gautam Khatri
            </h1>

            <h2>
              AI/ML Student & Developer
            </h2>

            <p className="hero-text">
              I build practical AI/ML applications, data analytics
              solutions, and software projects focused on solving
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a
                href="https://github.com/gautamkhatri57"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-dark"
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

          </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="section">

          <p className="section-label">
            ABOUT
          </p>

          <h2>
            About Me
          </h2>

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
        <section id="skills" className="section">

          <p className="section-label">
            SKILLS
          </p>

          <h2>
            Skills
          </h2>

          <p className="section-description">
            Technologies and tools I have worked with across my
            academic, personal, and internship projects.
          </p>

          <div className="skills-list">
            <span>Python</span>
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Data Analytics</span>
            <span>Pandas</span>
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>FastAPI</span>
            <span>Streamlit</span>
            <span>React</span>
            <span>TensorFlow</span>
            <span>Git & GitHub</span>
          </div>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="section">

          <p className="section-label">
            PROJECTS
          </p>

          <h2>
            Selected Projects
          </h2>

          <p className="section-description">
            A selection of AI, data analytics, automation, and
            software development projects I have built.
          </p>

          <Projects />

        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="section">

          <p className="section-label">
            EXPERIENCE
          </p>

          <h2>
            Experience
          </h2>

          <div className="experience-card">

            <div>
              <span className="experience-type">
                INTERNSHIP · 2026
              </span>

              <h3>
                AI / Software Development Intern
              </h3>

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
        <section id="contact" className="section contact">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's Connect
          </h2>

          <p className="section-description">
            I'm open to AI/ML internship opportunities,
            data-focused roles, and interesting technology projects.
          </p>

          <div className="contact-links">

            <a href="mailto:gautamkhatri325@gmail.com">
              Email ↗
            </a>

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
        <p>
          © 2026 Gautam Khatri
        </p>

        <p>
          AI / ML · Data Analytics · Development
        </p>
      </footer>

    </div>
  );
}

export default App;