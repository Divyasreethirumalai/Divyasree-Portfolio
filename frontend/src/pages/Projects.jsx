import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import careertwinImage from "../assets/careertwin.png";
const filters = ["All", "Full Stack", "Frontend", "AI/ML"];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://divyasree-portfolio-backend.onrender.com/portfolio-data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        return res.json();
      })
      .then((data) => {
        const projectData = data.projects || [];

        setProjects(projectData);
        setFiltered(projectData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Projects fetch error:", err);
        setError("Unable to load projects right now.");
        setLoading(false);
      });
  }, []);

  const filterProjects = (category) => {
    setActiveFilter(category);

    if (category === "All") {
      setFiltered(projects);
      return;
    }

    const filteredData = projects.filter(
      (project) => project.category === category
    );

    setFiltered(filteredData);
  };

  const featuredProject = projects.find((project) => project.featured);

  const regularProjects = filtered.filter(
    (project) => !project.featured
  );

  return (
    <main className="projects-page">
      {/* Header */}
      <section className="projects-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY WORK
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects I've Built
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of projects where I turn ideas into responsive,
          user-focused web applications using modern technologies.
        </motion.p>
      </section>

      {/* Filters */}
      <motion.div
        className="project-filters"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => filterProjects(filter)}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Loading */}
      {loading && (
        <div className="projects-status">
          <p>Loading projects...</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="projects-status error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Featured Project */}
          {activeFilter === "All" && featuredProject && (
            <motion.section
              className="featured-project"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="featured-content">
                <div className="project-top">
                  <span className="project-type">
                    {featuredProject.type}
                  </span>

                  <span className="featured-badge">
                    Featured
                  </span>
                </div>

                <h2>{featuredProject.title}</h2>

                <p className="project-description">
                  {featuredProject.description}
                </p>

                <div className="tech-list">
                  {featuredProject.tech
                    ?.split(",")
                    .map((technology) => (
                      <span key={technology}>
                        {technology.trim()}
                      </span>
                    ))}
                </div>

                <div className="project-links">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="featured-visual">
                <div className="visual-glow"></div>

                <div className="visual-content">
                  <img src={careertwinImage} alt="CareerTwin AI project preview" />
                </div>
              </div>
            </motion.section>
          )}

          {/* Regular Projects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="projects-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {(activeFilter === "All"
                ? regularProjects
                : filtered
              ).map((project, index) => (
                <motion.article
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="project-card-top">
                    <span className="project-category">
                      {project.category}
                    </span>

                    {project.type && (
                      <span className="project-small-type">
                        {project.type}
                      </span>
                    )}
                  </div>

                  <h2>{project.title}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-list">
                    {project.tech
                      ?.split(",")
                      .map((technology) => (
                        <span key={technology}>
                          {technology.trim()}
                        </span>
                      ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="projects-status">
              <p>No projects found in this category.</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Projects;
