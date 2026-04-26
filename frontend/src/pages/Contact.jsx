import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>Feel free to connect with me for opportunities and collaborations.</p>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="5" placeholder="Your Message"></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
          type="submit"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;