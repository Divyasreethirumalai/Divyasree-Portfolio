import {useEffect} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="hero">
    <div className="hero-text">
      <motion.div
      animate={{y:[0,-10,0]}}
      transition={{repeat:Infinity,duration:2}}
      style={{fontSize:"40px"}}
      >
        💻
      </motion.div>
      <motion.h1
      initial={{ opacity: 0, x:-50 }}
      animate={{ opacity: 1, x:0 }}
      transition={{ duration: 0.8 }}
      >
        Hi, I'm Divyasree T 
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Full Stack Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ maxWidth: "600px", margin: "20px auto" }}
      >
        Computer Science student passionate about building user-friendly
        and scalable web applications. Skilled in React, Node.js, Python,
        and modern web technologies.
      </motion.p>
    <Link to="/projects">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: "linear-gradient(45deg, #38bdf8, #a78bfa)",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px"
        }} 
      >
        View Projects
      </motion.button>
    </Link>
    </div>

    <motion.div
      className="hero-image"
      animate={{y:[0,-15,0]}}
      transition={{repeat:Infinity,duration:3}}
      >
        {"Profile"}
      </motion.div>
    </div>
  );
}

export default Home;