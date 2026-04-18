import { motion } from "framer-motion";

function Projects() {
  
  const projects = [
    {
      title: "Portfolio Tracker System",
      desc: "Built a full-stack portfolio with click tracking and analytics dashboard.",
      tech: "React, Node.js, Express"
    },
    {
      title: "Employee Salary Prediction",
      desc: "Machine learning model with dashboard visualization.",
      tech: "Python, ML, Streamlit"
    },
    {
      title: "EasyBuy Website Clone",
      desc: "Responsive e-commerce UI clone using Bootstrap.",
      tech: "HTML, CSS, Bootstrap"
    },
    {
      title: "To-Do List Web App",
      desc: "Simple and stylish task manager with responsive UI.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "Disease Prediction (Research)",
      desc: "Deep learning model to predict hypertension & diabetes (85% accuracy).",
      tech: "Python, TensorFlow"
    }
  ];

  return (
    <div className="project-grid">

      <h1>Projects</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
    {projects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default Projects;