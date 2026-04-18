import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const getLevel = (value) => {
    if (value >= 85) return "Advanced";
    if (value >= 70) return "Intermediate";
    return "Basic";
  };

  const levelStyle = (level) => {
    switch (level) {
      case "Advanced":   return "border-primary/40 text-primary";
      case "Intermediate": return "border-blue-500/30 text-blue-400";
      default:           return "border-neutral-600 text-neutral-400";
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js",              level: 75, desc: "Hooks & scalable UI architecture" },
        { name: "JavaScript (ES6+)",  level: 80, desc: "Async logic & modern JS" },
        { name: "HTML5 & CSS3",       level: 90, desc: "Semantic responsive layouts" },
        { name: "Tailwind CSS",       level: 85, desc: "Utility-first styling" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js",     level: 75, desc: "REST APIs & middleware" },
        { name: "Express.js",  level: 72, desc: "Routing & auth systems" },
        { name: "MongoDB",     level: 60, desc: "CRUD & schema design" },
        { name: "MySQL",       level: 75, desc: "Relational queries" },
      ],
    },
  ];

  const softSkills = [
    "Team Collaboration",
    "Communication",
    "Problem Solving",
    "Time Management",
    "Adaptability",
  ];

  return (
    // FIX: added z-10 at the section level (was only on inner div before)
    <section id="skills" className="relative z-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.25em] text-primary uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skill <span className="text-primary">Set</span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            A focused stack of technologies and professional skills used to
            build scalable and maintainable web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* TECHNICAL */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-8">
              Technical Skills
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/50 backdrop-blur-sm hover:border-primary/40 transition"
                >
                  <h4 className="text-lg font-semibold text-white mb-5">
                    {category.title}
                  </h4>

                  <div className="space-y-5">
                    {category.skills.map((skill, index) => {
                      const level = getLevel(skill.level);
                      return (
                        <div key={index}>
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-200 text-sm">
                              {skill.name}
                            </span>
                            <span className={`text-xs px-3 py-1 rounded-full border ${levelStyle(level)}`}>
                              {level}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
                            {skill.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-8">
              Professional Skills
            </h3>

            <div className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/50 backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-md border border-neutral-700 text-neutral-300 hover:border-primary hover:text-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;