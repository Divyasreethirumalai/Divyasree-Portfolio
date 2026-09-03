import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assets/Divyasree.jpg";
import DivyasreeResume from "../assets/DIVYASREE_T_resume.pdf";

function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    // Fetch portfolio data
    fetch("http://localhost:8000/portfolio-data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPortfolio(data);
      })
      .catch((error) => {
        console.error("Portfolio data error:", error);

        // Fallback data if backend is unavailable
        setPortfolio({
          name: "Divyasree T",
          role: "Full Stack Developer",
        });
      });

    // Track portfolio visit
    fetch("http://localhost:8000/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: "/",
        event: "visit",
      }),
    }).catch((error) => {
      console.error("Tracking error:", error);
    });
  }, []);

  if (!portfolio) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {portfolio.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {portfolio.role}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Final-year Computer Science student focused on building
            responsive, user-friendly web applications. I work with React,
            Node.js, Python, and modern web technologies to turn ideas into
            practical solutions.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link to="/projects">
              <motion.button
                className="primary-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <span>↗</span>
              </motion.button>
            </Link>

            <a
              href={DivyasreeResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
                <span>↓</span>
              </motion.button>
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/divyasree-t-215319295/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a href="mailto:your-email@example.com">
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="hero-image"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <img
              src={profileImg}
              alt={`${portfolio.name} - Full Stack Developer`}
            />
          </motion.div>

          {/* Decorative glow */}
          <div className="hero-glow"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;