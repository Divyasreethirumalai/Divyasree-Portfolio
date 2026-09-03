import { motion } from "framer-motion";

function Blog() {
  const blogs = [
    {
      title: "My Full Stack Development Journey",
      desc: "What I learned while building applications with React, Node.js, Express, and PostgreSQL — from frontend development to backend integration and deployment.",
      date: "2026",
    },
    {
      title: "Exploring Machine Learning in Real-World Applications",
      desc: "My learning journey in Machine Learning, exploring how data, algorithms, and predictive models can be used to solve real-world problems.",
      date: "2026",
    },
    {
      title: "Building CareerTwin AI",
      desc: "Exploring the development of my final-year project, combining AI and web technologies to build a career-focused platform.",
      date: "2026",
    },
  ];

  return (
    <div className="page">
      <h1>Blog & Insights</h1>

      <p>
        Sharing what I learn while building projects and growing as a developer.
      </p>

      <div className="projects-grid blog-grid">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className="card blog-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -6 }}
          >
            <span className="blog-number">
              0{i + 1}
            </span>

            <h3>{blog.title}</h3>

            <p>{blog.desc}</p>

            <small>{blog.date}</small>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blog;