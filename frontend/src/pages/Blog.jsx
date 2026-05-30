import { motion } from "framer-motion";

function Blog() {
  const blogs = [
    {
      title: "My Full Stack Internship Journey",
      desc: "Learning React, backend integration, and real-world portfolio development.",
      date: "April 2026"
    },
    {
      title: "Why I Chose React for Frontend",
      desc: "React makes UI development faster, cleaner, and more dynamic.",
      date: "April 2026"
    },
    {
      title: "Building a Tracking System",
      desc: "Understanding how user activity can be logged and analyzed using backend APIs.",
      date: "April 2026"
    }
  ];

  return (
    <div className="page">
      <h1>Blog & Insights</h1>
      <p>Sharing my learning journey and project insights.</p>

      <div className="projects-grid" style={{ marginTop: "30px" }}>
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}>
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