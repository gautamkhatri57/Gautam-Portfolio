function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Prompt Generator",
      description:
        "An AI-powered prompt generation application that creates structured and useful prompts based on user requirements using a large language model.",
      tech: "Python · Groq · LLM · Streamlit",
      github:
        "https://github.com/gautamkhatri57/AI-Prompt-Genrator",
      demo:
        "https://ai-prompt-genrator-5ynp8rsggcskzdgyehlyah.streamlit.app",
    },

    {
      number: "02",
      title: "Sales Analysis Dashboard",
      description:
        "An interactive data analytics dashboard that processes CSV and Excel files, generates visual insights, and provides useful KPIs and filters for sales analysis.",
      tech: "Python · Pandas · Plotly · Streamlit",
      github:
        "https://github.com/gautamkhatri57/AI-Sales-Analysis",
      demo:
        "https://ai-sales-analysis-qwnpsphwsdi7qxnjrjeduw.streamlit.app",
    },

    {
      number: "03",
      title: "AI Resume Analyser",
      description:
        "An AI-powered resume analysis application designed to analyse candidate resumes and provide useful insights through a simple web interface.",
      tech: "Python · AI/ML · Streamlit",
      github: "",
      demo: "",
    },

    {
      number: "04",
      title: "Candidate Onboarding Management System",
      description:
        "A full-stack recruitment platform with authentication, candidate management, interview workflows, status tracking, management dashboards, and automated email notifications.",
      tech: "FastAPI · PostgreSQL · React · JWT",
      github:
        "https://github.com/gautamkhatri57/candidate-onboarding-system",
      demo:
        "https://ai-recruitment-candidate-m4sx.onrender.com",
    },

    {
      number: "05",
      title: "CopyHart AI Assistant",
      description:
        "A RAG-based AI assistant built around a dedicated business knowledge base to provide relevant and context-aware information.",
      tech: "Python · RAG · Streamlit · Gemini",
      github:
        "https://github.com/gautamkhatri57/copyhart-ai-assistant",
      demo:
        "https://copyhart-ai-assistant-4kmbcy5tfuvwqnxkbb62tm.streamlit.app",
    },

    {
      number: "06",
      title: "CopyHart Lead Chatbot",
      description:
        "A web-based lead generation chatbot designed to collect customer information and support business enquiry workflows.",
      tech: "PHP · MySQL · HTML · CSS · JavaScript",
      github:
        "https://github.com/gautamkhatri57/CopyHart-Lead-chatbot",
      demo:
        "https://copyhart-lead-chatbot.onrender.com/#services",
    },
  ];

  return (
    <div className="projects-grid">

      {projects.map((project) => (
        <article
          className="project-card"
          key={project.number}
        >

          <div className="project-top">
            <span className="project-number">
              {project.number}
            </span>

            <span className="project-arrow">
              ↗
            </span>
          </div>

          <h3>
            {project.title}
          </h3>

          <p>
            {project.description}
          </p>

          <span className="project-tech">
            {project.tech}
          </span>

          {(project.github || project.demo) && (
            <div className="project-links">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              )}

            </div>
          )}

        </article>
      ))}

    </div>
  );
}

export default Projects;