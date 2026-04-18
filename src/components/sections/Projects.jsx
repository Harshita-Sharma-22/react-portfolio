import React, { useState, useEffect } from "react";
import { FiGithub, FiExternalLink, } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  // ✅ Carousel state (per project)
  const [currentIndex, setCurrentIndex] = useState({});

  const filters = ["All", "Frontend", "Full Stack", "Backend"];

  const projects = [
    {
      id: 1,
      title: "Modern Portfolio Website",
      category: "Frontend",
      level: "Advanced",
      role: "Frontend Developer",
      images: [
        "/assets/project-1.png",
        "/assets/project-1-2.png",
        "/assets/project-1-3.png",
      ],
      description:
        "High-performance portfolio with reusable components and smooth UI interactions.",
      impact: [
        "Reusable component architecture",
        "Smooth scroll & animations",
        "Optimized performance",
      ],
      technologies: ["React", "Tailwind", "Vite"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "TaskFlow Manager",
      category: "Full Stack",
      level: "Advanced",
      role: "Full Stack Developer",
      images: [
        "",
        "",
        ""
      ],
      description:
        "Task management system with authentication and REST APIs.",
      impact: [
        "JWT authentication",
        "REST API architecture",
        "MongoDB schema design",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true,
      github: "#",
      live: null,
    },
    {
  id: 3,
  title: "MiniVerse – Multi App Hub",
  category: "Frontend",
  level: "Intermediate",
  role: "Frontend Developer",
  images: [
    "/assets/project-3.png",
    "/assets/project-3-2.png",
    "/assets/project-3-3.png"
  ],
  description: "A centralized platform integrating multiple mini applications like weather forecast, task manager, to-do list, and utilities in a single responsive interface.",
  impact: [
    "Modular multi-app architecture",
    "Seamless navigation between apps",
    "Optimized UI/UX for productivity"
  ],
  technologies: ["React", "Vite", "Tailwind CSS", "Bun"],
  github: "https://github.com/Harshita-Sharma-22/mini-verse",
  live: "https://miniverse-by-harshita.netlify.app/"
},
    {
      id: 4,
      title: "E-Commerce REST API",
      category: "Backend",
      level: "Intermediate",
      role: "Backend Developer",
images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
        "",
        ""
      ],      description:
        "Scalable backend API with authentication and structured endpoints.",
      impact: ["REST API design", "Auth middleware"],
      technologies: ["Node", "Express", "MySQL"],
      featured: true,
      github: "#",
      live: null,
    },
  ];

  // ✅ Helpers
  const getImages = (project) => {
    return project.images ? project.images : [project.image];
  };

  const nextSlide = (id, length) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] === length - 1 ? 0 : (prev[id] || 0) + 1,
    }));
  };

  const prevSlide = (id, length) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? length - 1 : (prev[id] || 0) - 1,
    }));
  };

  // ✅ Optional Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const updated = { ...prev };
        projects.forEach((p) => {
          const imgs = getImages(p);
          if (imgs.length > 1) {
            updated[p.id] =
              updated[p.id] === imgs.length - 1
                ? 0
                : (updated[p.id] || 0) + 1;
          }
        });
        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const levelColor = (level) => {
    if (level === "Advanced")
      return "text-cyan-400 border-cyan-400/30 bg-cyan-400/5";
    return "text-blue-400 border-blue-400/30 bg-blue-400/5";
  };

  return (
    <section id="projects" className="relative z-10 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-[0.25em] text-primary uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-sm">
            Real-world applications demonstrating frontend engineering,
            backend architecture, and scalable development practices.
          </p>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1.5 text-sm rounded-lg border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  : "border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-900/60"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, i) => {
              const images = getImages(project);
              const current = currentIndex[project.id] || 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group relative border rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer bg-neutral-900/40 backdrop-blur-sm
                  ${
                    hovered === project.id
                      ? "border-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.12)]"
                      : "border-neutral-800"
                  }
                  ${project.featured ? "" : ""}
                `}
                >
                  {/* IMAGE CAROUSEL */}
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <img
                      src={images[current]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-contain bg-black transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dots */}
                    {images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full ${
                              idx === current ? "bg-white" : "bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* badges, icons, role (UNCHANGED) */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {project.featured && (
                        <span className="text-[10px] px-2 py-1 rounded-md bg-primary/20 border border-primary/40 text-primary backdrop-blur-sm font-medium tracking-wider uppercase">
                          Featured
                        </span>
                      )}
                      <span
                        className={`text-[10px] px-2 py-1 rounded-md border backdrop-blur-sm font-medium ${levelColor(
                          project.level
                        )}`}
                      >
                        {project.level}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT (UNCHANGED) */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-400 mb-4">
                      {project.description}
                    </p>
                    <ul className="text-xs text-neutral-400 space-y-1 mb-4">
  {project.impact.map((point, idx) => (
    <li key={idx} className="flex items-start gap-2">
      <span className="text-primary">•</span>
      <span>{point}</span>
    </li>
  ))}
</ul>

<div className="flex items-center gap-3 mt-4">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border border-neutral-700 text-neutral-300 hover:text-white hover:border-primary transition"
    >
      <FiGithub size={14} />
      Code
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-primary text-black hover:opacity-90 transition"
    >
      <FiExternalLink size={14} />
      Live
    </a>
  )}
</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;