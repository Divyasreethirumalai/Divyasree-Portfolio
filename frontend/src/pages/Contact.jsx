import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_ue9e775",
        "template_k36eel9",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "Xq4e0cAY_PLvvnbbS"
      );

      setStatus("Message sent successfully! ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h1>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>

        {status && <p className="contact-status">{status}</p>}
      </motion.form>

      <div className="contact-links">
        <a href="mailto:sreeiit123@gmail.com">
          📧 Email Me
        </a>

        <a
          href="https://wa.me/919003302540"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>

        <a
          href="https://www.linkedin.com/in/divyasree-t-215319295"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/Divyasreethirumalai"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;