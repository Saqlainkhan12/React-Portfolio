import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="contact-grid">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">CONTACT</span>

            <h2 className="section-title">
              Let's Build{" "}
              <span className="text-gradient">Together</span>
            </h2>

            <p>
              Have a project in mind?
              <br />
              Let's create something modern,
              fast and beautiful.
            </p>

            <div className="contact-info">
              <div>
                <FaPhoneAlt />
                <span>+92 323 1824597</span>
              </div>

              <div>
                <FaEnvelope />
                <span>khansaqikhan96@gmail.com</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>Punjab, Pakistan</span>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="https://github.com/Saqlainkhan12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saqlain-khan-928826424"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              <FaPaperPlane />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;