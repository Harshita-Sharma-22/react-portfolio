import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log(formData);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-10 px-6 text-white">

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] text-primary uppercase mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Work <span className="text-primary">Together</span>
          </h2>

          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-sm">
            Open to internships, full-time roles, and freelance opportunities.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">
              Let’s build something impactful.
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              I enjoy building scalable and performance-driven web applications.
              Feel free to reach out for collaboration or opportunities.
            </p>

            {/* EMAIL */}
            <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/50 flex items-center gap-4">
              <FiMail className="text-primary text-xl" />
              <div>
                <p className="text-xs text-neutral-400">Email</p>
                <p className="text-sm text-white">
                  harshita.sharma.thandla@gmail.com
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/50 flex items-center gap-4">
              <FiMapPin className="text-primary text-xl" />
              <div>
                <p className="text-xs text-neutral-400">Location</p>
                <p className="text-sm text-white">
                  Thandla, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-900/50 flex items-center gap-4">
              <FiLinkedin className="text-primary text-xl" />
              <div>
                <p className="text-xs text-neutral-400">LinkedIn</p>
                <p className="text-sm text-white">
                  https://www.linkedin.com/in/harshita-sharma-thandla/
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-neutral-800 rounded-xl p-7 bg-neutral-900/50"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div className="relative">
                <FiUser className="absolute top-3 left-3 text-neutral-500" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-neutral-500" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <FiMessageSquare className="absolute top-3 left-3 text-neutral-500" />
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-10 pr-3 text-sm resize-none focus:outline-none focus:border-primary"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-black py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend />
              </button>

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-green-400 text-sm text-center">
                  This is only demo, you can contact me through Mail or LinkedIn. 
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}