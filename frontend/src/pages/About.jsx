import { motion } from "framer-motion";

function About() {

  const skills = [
    "React", "Node.js", "Python",
    "HTML", "CSS", "Bootstrap",
    "SQL", "Figma"
  ];

  return (
    <div className="hero">
      <div>
      <h1>About Me</h1>

      <p style={{ maxWidth: "700px", margin: "auto" }}>
        I am a Computer Science and Engineering student at Jeppiaar Institute of Technology 
        with a strong interest in full-stack development and machine learning. 
        I enjoy building real-world applications that are both scalable and user-friendly.
      </p>
      </div>

      <div>
      <h2 style={{ marginTop: "40px" }}>Skills</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
      
      </div>
    </div>
  );
}

export default About;