import {useEffect,useState} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import profileImg from "../assets/Divyasree.jpg";

function Home() {

  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {

    fetch("http://localhost:8000/portfolio-data")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPortfolio(data);
      });
    
    fetch("http://localhost:8000/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page: "/",
        event: "visit"
      })
    });
  }, []);

  if (!portfolio) {
    return(
      <div className="loading">
       <h1>Loading...</h1>
      </div>
    );
  }

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
        Hi, I'm {portfolio.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {portfolio.role}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Computer Science student passionate about building user-friendly
        and scalable web applications. Skilled in React, Node.js, Python,
        and modern web technologies.
      </motion.p>
    <Link to="/projects">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
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
      <img
        src={profileImg}
        alt="Profile"
      />
      </motion.div>
    </div>
  );
}

export default Home;