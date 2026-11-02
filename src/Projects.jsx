import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "AI Prompt Generator",
    category: "AI/ML",
    description:
      "An AI-powered prompt generation application that creates structured and useful prompts based on user requirements using a large language model.",
    tech: "Python · Groq · LLM · Streamlit",
    github: "https://github.com/gautamkhatri57/AI-Prompt-Genrator",
    demo: "https://ai-prompt-genrator-5ynp8rsggcskzdgyehlyah.streamlit.app",
  },
  {
    number: "02",
    title: "Sales Analysis Dashboard",
    category: "Data",
    description:
      "An interactive data analytics dashboard that processes CSV and Excel files, generates visual insights, and provides useful KPIs and filters for sales analysis.",
    tech: "Python · Pandas · Plotly · Streamlit",
    github: "https://github.com/gautamkhatri57/AI-Sales-Analysis",
    demo: "https://ai-sales-analysis-qwnpsphwsdi7qxnjrjeduw.streamlit.app",
  },
  {
    number: "03",
    title: "AI Recruitment System",
    category: "AI/ML",
    description:
      "An AI-powered recruitment platform with separate candidate and admin portals. It analyses resumes against job descriptions, generates and evaluates interview questions, and produces resume, interview and overall scores with a final hiring recommendation.",
    tech: "Python · FastAPI · PostgreSQL · React · NLP",
    github: "https://github.com/gautamkhatri57/AI_Recruitment_System",
    demo: "https://ai-recruitment-candidate-m4sx.onrender.com",
  },
  {
    number: "04",
    title: "CopyHart AI Assistant",
    category: "AI/ML",
    description:
      "A RAG-based AI assistant built around a dedicated business knowledge base to provide relevant and context-aware information.",
    tech: "Python · RAG · Streamlit · Gemini",
    github: "https://github.com/gautamkhatri57/copyhart-ai-assistant",
    demo: "https://copyhart-ai-assistant-4kmbcy5tfuvwqnxkbb62tm.streamlit.app",
  },
  {
    number: "05",
    title: "CopyHart Lead Chatbot",
    category: "Full-Stack",
    description:
      "A web-based lead generation chatbot designed to collect customer information and support business enquiry workflows.",
    tech: "PHP · MySQL · HTML · CSS · JavaScript",
    github: "https://github.com/gautamkhatri57/CopyHart-Lead-chatbot",
    demo: "https://copyhart-lead-chatbot.onrender.com/#services",
  },
  {
    number: "06",
    title: "True Sleep Mattress",
    category: "Full-Stack",
    // TODO: edit this description + tech to match what the site really does
    description:
      "A responsive web application for a mattress brand, designed to present products and give customers a clean, easy-to-browse experience.",
    tech: "Web App · Deployed on Render",
    // TODO: replace with the exact repo URL (this is currently your profile)
    github: "https://github.com/gautamkhatri57",
    demo: "https://treu-sleep.onrender.com",
  },
];

const FILTERS = ["All", "AI/ML", "Data", "Full-Stack"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="project-filters" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <span className="project-tech">{project.tech}</span>

            {project.github || project.demo ? (
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            ) : (
              project.note && (
                <div className="project-links">
                  <span className="project-note">{project.note}</span>
                </div>
              )
            )}
          </article>
        ))}
      </div>
    </>
  );
}

export default Projects;
