import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
// Move roles outside component to prevent recreation on every render
const roles = [
  "React Developer",
  "MERN Stack Developer",
  "Frontend Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    
    const handleTyping = () => {
      if (!deleting) {
        // Typing forward
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setDeleting(true), 500);
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next role
          setDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const typingSpeed = deleting ? 40 : 60;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, index]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-16 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-16 w-80 h-80 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm tracking-[0.25em] uppercase mb-4">
              Hello I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
              Harshita Sharma
            </h1>

            <h2 className="text-lg md:text-xl text-neutral-400 mb-6 font-medium h-7">
              {text}
              <span className="animate-pulse text-primary ml-1">|</span>
            </h2>

            <p className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
              I build scalable and performant web applications with a focus on
              clean architecture, modern UI, and seamless user experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("projects")}
                className="px-7 py-3 text-sm font-medium rounded-lg bg-primary text-black transition hover:opacity-90 active:scale-[0.97]"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="px-7 py-3 text-sm font-medium rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 hover:bg-neutral-900/60 transition"
              >
                Contact Me
              </button>

              <a
                href="/assets/harshita-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition"
              >
                Resume
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/harshita-sharma-thandla/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Harshita-Sharma-22"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:harshita.sharma.thandla@gmail.com"
                className="w-11 h-11 flex items-center justify-center border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition"
              >
                <HiOutlineMail />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src="/assets/profile-pic.png"
                  alt="Harshita Sharma"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;