import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/portfolio-data")
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects);
        setFiltered(data.projects);
      });

  }, []);

  const filterProjects = (category) => {

    if (category === "All") {
      setFiltered(projects);
    }

    else {
      const filteredData = projects.filter(
        (project) => project.category === category
      );

      setFiltered(filteredData);
    }
  };

  return (
    <div className="page">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        My Projects
      </motion.h1>

      <div className="filter-buttons">

        <button onClick={() => filterProjects("All")}>
          All
        </button>

        <button onClick={() => filterProjects("ML")}>
          ML
        </button>

        <button onClick={() => filterProjects("Web")}>
          Web
        </button>

        <button onClick={() => filterProjects("Full Stack")}>
          Full Stack
        </button>

      </div>

      <div className="projects-grid">

        {filtered.map((project, index) => (

          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
          >

            <h2>{project.title}</h2>

              <p style={{ marginTop: "10px" }}>
                {project.description}
              </p>

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >

                <span
                  style={{
                    background: "#38bdf8",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    color: "white"
                  }}
                >
                  {project.category}
                </span>

                <span style={{ fontSize: "14px", color: "#cbd5e1" }}>
                  {project.tech}
                </span>

              </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Projects;