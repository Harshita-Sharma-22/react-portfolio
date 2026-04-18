import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-transparent text-white py-10 px-6 overflow-hidden"
    >
      <div className="relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] text-primary uppercase mb-3">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            MCA graduate focused on building scalable web applications with
            clean UI architecture, performance optimization, and modern frontend
            engineering practices.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <HiCodeBracket className="text-primary text-3xl" />
              Developer Journey
            </h3>

            {/* EXPERIENCE */}
            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-md hover:border-primary/40 transition">
              <p className="text-xs uppercase tracking-widest text-primary mb-2">
                Experience
              </p>

              <h4 className="text-white font-semibold text-lg">
                Fresher — Full Stack Developer
              </h4>

              <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                Hands-on experience building real-world projects using React,
                Node.js, and modern frontend tools with a focus on clean
                architecture and performance.
              </p>
            </div>

            {/* EDUCATION */}
            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-md hover:border-primary/40 transition">
              <p className="text-xs uppercase tracking-widest text-primary mb-2">
                Education
              </p>

              <h4 className="text-white font-semibold">
                Master of Computer Applications (MCA)
              </h4>

              <p className="text-neutral-400 text-sm">
                Bachelor of Science in Computer Science
              </p>
            </div>

            {/* INTRO */}
            <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
              <p>
                Hi, I'm{" "}
                <span className="text-white font-medium">
                  Harshita Sharma
                </span>
                , a Full Stack Developer focused on building scalable web
                applications with clean UI and efficient frontend architecture.
              </p>

              <p>
                I have worked on projects like project management systems and
                interactive web platforms, demonstrating strong problem-solving
                skills, responsive design, and real-world development practices.
              </p>
            </div>

            {/* RESUME */}
            <a
              href="/assets/harshita-resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 bg-primary text-black px-7 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              <HiOutlineDownload />
              Download Resume
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Frontend Development",
                desc: "Building responsive and scalable interfaces using React, Tailwind CSS, and modern component architecture.",
              },
              {
                title: "API Integration",
                desc: "Working with REST APIs, authentication systems, and dynamic backend-driven applications.",
              },
              {
                title: "UI Engineering",
                desc: "Designing clean, structured, and performance-focused user interfaces with strong visual hierarchy.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-md hover:border-primary/40 transition"
              >
                <h4 className="text-lg font-semibold mb-2 text-primary">
                  {card.title}
                </h4>

                <p className="text-neutral-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;