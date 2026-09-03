import { motion } from "framer-motion";

function About() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Figma"],
    },
  ];

  const highlights = [
    {
      number: "01",
      title: "Responsive Development",
      description:
        "Building interfaces that are clean, responsive, and easy to use across different devices.",
    },
    {
      number: "02",
      title: "Full-Stack Applications",
      description:
        "Working across frontend, backend, APIs, and databases to create complete web applications.",
    },
    {
      number: "03",
      title: "Practical Solutions",
      description:
        "Turning real-world problems and ideas into useful applications with a focus on usability.",
    },
  ];

  return (
    <main className="about-page">
      {/* Hero / Introduction */}
      <section className="about-intro">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ABOUT ME</span>

          <h1>
            Building practical
            <span> digital experiences.</span>
          </h1>

          <p>
            I'm a Computer Science and Engineering student focused on
            full-stack development. I enjoy turning ideas into responsive,
            user-friendly web applications and solving practical problems
            through clean and maintainable code.
          </p>
        </motion.div>
      </section>

      {/* About + Skills */}
      <section className="about-content">
        <motion.div
          className="about-card about-description"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="card-label">A LITTLE MORE</span>

          <h2>From ideas to working applications.</h2>

          <p>
            I enjoy exploring how different parts of a web application work
            together — from designing intuitive interfaces to building
            backend functionality and connecting databases.
          </p>

          <p>
            Through academic projects, internships, and personal projects,
            I've gained hands-on experience working with modern web
            technologies and developing solutions around real-world use cases.
          </p>

          <div className="developer-tags">
            <span>Full Stack Development</span>
            <span>Web Applications</span>
            <span>Problem Solving</span>
          </div>
        </motion.div>

        <motion.div
          className="about-card skills-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="card-label">TECHNICAL SKILLS</span>

          <h2>My toolkit.</h2>

          <div className="skill-groups">
            {skillGroups.map((group, index) => (
              <motion.div
                className="skill-group"
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What I Build */}
      <section className="highlights-section">
        <motion.div
          className="highlights-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">WHAT I BUILD</span>
          <h2>Focused on creating useful digital products.</h2>
        </motion.div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <motion.div
              className="highlight-card"
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
            >
              <span className="highlight-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
