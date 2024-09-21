import React, { useState } from "react";
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

  const handleTransitionEnd = () => {
    setHasTransitionEnded(true);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec bg-cy-300 selection:text-cyan-900 selection:bg-cyan-300">
      {/* Show transition screen until it ends */}
      {!hasTransitionEnded && <TransitionScreen onTransitionEnd={handleTransitionEnd} />}

      {/* After transition, show the main content */}
      {hasTransitionEnded && (
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#eea033_100%)]"></div>
        </div>
      )}
      <div className="container mx-auto px-8">
        {hasTransitionEnded && (
          <>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Experience />
            <Projects />
            <Contact />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
