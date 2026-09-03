import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Zophrix Private Limited",
      duration: "Jun 2026 – Jul 2026",
      description: [
        "Developed and enhanced responsive frontend components using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with the team to debug issues, test features, and improve application performance using Git.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Git"],
    },
    {
      role: "Python Intern",
      company: "Infosys Springboard",
      duration: "Dec 2025 – Jan 2026",
      description: [
        "Contributed to the development of a web platform connecting freelancers and recruiters.",
        "Collaborated with team members to implement features and enhance application functionality.",
      ],
      technologies: ["Python", "Web Development", "Git"],
    },
    {
      role: "Web Development Intern",
      company: "Vault of Codes",
      duration: "Jul 2025 – Aug 2025",
      description: [
        "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap.",
        "Implemented interactive UI components and improved user experience through responsive design.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      role: "Artificial Intelligence & Machine Learning Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025",
      description: [
        "Developed an employee salary prediction model using machine learning regression techniques.",
        "Built a dashboard to visualize prediction results and project insights as part of a collaborative team.",
      ],
      technologies: ["Python", "Machine Learning", "Regression", "Data Visualization"],
    },
  ];

  return (
    <div className="page experience-page">
      <h1>Experience</h1>

      <p>
        Hands-on experience across full-stack development, web development,
        Python, and machine learning.
      </p>

      <div className="experience-list">
        {experiences.map((experience, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
          >
            <div className="experience-header">
              <div>
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>
              </div>

              <span className="experience-duration">
                {experience.duration}
              </span>
            </div>

            <ul>
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="experience-tech">
              {experience.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;