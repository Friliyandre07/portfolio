import React, { useEffect, useState } from "react";

const TransitionScreen = ({ onTransitionEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to end the transition after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onTransitionEnd();
    }, 3000); // Transition duration

    return () => clearTimeout(timer);
  }, [onTransitionEnd]);

  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="animate-pulse text-5xl text-white">Welcome</div>
      </div>
    )
  );
};

export default TransitionScreen;
