import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TransitionScreen from "./components/TransitionScreen";

const App = () => {
  const [hasTransitionEnded, setHasTransitionEnded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleTransitionEnd = () => {
    setHasTransitionEnded(true);
    // Trigger fade-in after transition ends
    setTimeout(() => {
      setFadeIn(true);
    }, 100); // Slight delay to avoid abrupt transition
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased bg-black selection:text-cyan-900 selection:bg-cyan-300">
      {/* Show transition screen until it ends */}
      {!hasTransitionEnded && <TransitionScreen onTransitionEnd={handleTransitionEnd} />}

      {/* Main content and background with fade-in */}
      {hasTransitionEnded && (
        <>
          {/* Background linear gradient */}
          <div
            className={`fixed inset-0 h-full w-full transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "linear-gradient(180deg, #000 50%, #eea033 150%)", // Adjust angle and colors as needed
            }}
          ></div>

          {/* Main content fades in */}
          <div
            className={`relative z-10 container mx-auto px-8 transition-opacity duration-1000 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
