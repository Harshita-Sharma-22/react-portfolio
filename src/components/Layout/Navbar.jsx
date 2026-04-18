import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 120;

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.href);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-950/70 backdrop-blur-xl border-b border-neutral-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            {/* LOGO - Enhanced with glow effect */}
            <button
              onClick={() => scrollToSection("home")}
              className="group relative flex items-center gap-1 text-xl font-semibold text-white"
            >
              <span className="relative transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]">
                HS
              </span>
              <span className="text-primary group-hover:translate-x-[2px] group-hover:scale-125 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]">
                .
              </span>
              {/* Glow effect on hover */}
              <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/20 rounded-full scale-150" />
            </button>

            {/* DESKTOP NAV - Enhanced with underline animations */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`nav-link group relative px-4 py-2 text-sm rounded-lg transition-all duration-300 focus:outline-none overflow-hidden ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Active background with gradient and pulse */}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-700 border border-neutral-600/50"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Subtle pulse effect */}
                      <span className="absolute inset-0 rounded-lg bg-primary/5 animate-pulse" />
                      {/* Top glow */}
                      <span className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    </motion.span>
                  )}

                  {/* Hover underline - slides in from left */}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-primary to-primary/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />

                  {/* Hover glow effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg" />

                  {/* Top shine effect on hover */}
                  <span className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/0 group-hover:via-white/20 to-transparent transition-all duration-300" />

                  <span className="relative z-10 group-hover:translate-y-[-1px] transition-transform duration-300">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>

            {/* CTA - Enhanced with gradient and shimmer */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-5 py-2 text-sm font-medium rounded-lg bg-primary text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] active:scale-[0.97]"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent rounded-lg" />
                
                {/* Button border glow */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_12px_rgba(255,255,255,0.2)]" />
                
                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300 text-black">
                  Hire Me
                </span>
              </button>
            </div>

            {/* MOBILE BUTTON - Enhanced */}
            <button
              aria-label="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 group p-2 -m-2"
            >
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px] bg-primary" : "group-hover:bg-primary"}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "group-hover:w-5 group-hover:bg-primary"}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px] bg-primary" : "group-hover:bg-primary"}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Enhanced */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`mobile-nav-link group relative text-2xl font-medium transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-primary scale-110"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {/* Active indicator - left accent */}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="activeMobile"
                      className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[3px] bg-gradient-to-r from-primary to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover underline - expands from center */}
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Active glow */}
                  {activeSection === link.href && (
                    <span className="absolute inset-0 -z-10 blur-xl bg-primary/20 scale-150 animate-pulse" />
                  )}
                  
                  {/* Hover glow */}
                  <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg bg-white/5 scale-150" />
                  
                  <span className="relative group-hover:tracking-wider transition-all duration-300">
                    {link.name}
                  </span>
                </motion.button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="group relative mt-4 px-7 py-3 rounded-lg bg-primary text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                
                {/* Glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 rounded-lg" />
                
                <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
                  Hire Me
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;