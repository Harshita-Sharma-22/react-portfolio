import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "home" },
        { name: "About", href: "about" },
        { name: "Projects", href: "projects" },
        { name: "Contact", href: "contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/harshita-sharma-thandla/",
          external: true,
        },
        {
          name: "GitHub",
          href: "https://github.com/Harshita-Sharma-22/",
          external: true,
        },
        {
          name: "Email",
          href: "mailto:harshita.sharma.thandla@gmail.com",
          external: true,
        },
      ],
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth",
    });
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Harshita Sharma<span className="text-primary">.</span>
            </h3>

            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              Full Stack Developer focused on building scalable, performant,
              and clean web applications.
            </p>
          </motion.div>

          {/* LINKS */}
          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium text-white mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition"
                      >
                        {link.name}
                        <FiArrowUpRight className="opacity-0 group-hover:opacity-100 text-xs transition" />
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-sm text-neutral-400 hover:text-white transition"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="border-t border-neutral-800 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-neutral-500 text-xs">
            © 2025 Harshita Sharma
          </p>

          <div className="flex items-center gap-6">
            <p className="text-neutral-500 text-xs">
              Built with <span className="text-primary">React</span> &{" "}
              <span className="text-primary">Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;