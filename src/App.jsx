import React from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Chatbot from "./components/Chatbot";
import TechBackground from "./components/ui/TechBackground";

function App() {
  return (
    // FIX: removed "relative" from root — TechBackground is fixed, doesn't need it
    <div className="bg-neutral-950 text-gray-300 min-h-screen overflow-x-hidden">

      {/* GLOBAL BACKGROUND — fixed, sits behind everything */}
      <TechBackground />

      {/* FIX: Navbar gets its own z-50, no change needed */}
      <Navbar />

      {/* FIX: everything visible (main + footer) is wrapped in relative z-10
          so it always sits above the fixed canvas background */}
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* FIX: Footer moved inside z-10 wrapper — was outside before */}
        <Footer />
      </div>

      {/* Chatbot stays at z-50 via its own fixed positioning */}
      <Chatbot />
    </div>
  );
}

export default App;