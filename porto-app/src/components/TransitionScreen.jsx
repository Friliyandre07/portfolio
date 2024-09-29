import React, { useEffect, useState } from "react";

const TransitionScreen = ({ onTransitionEnd }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showHi, setShowHi] = useState(false);

  useEffect(() => {
    const staircaseTimer = setTimeout(() => {
      setShowHi(true);
    }, 2000);

    const transitionTimer = setTimeout(() => {
      setIsVisible(false);
      onTransitionEnd();
    }, 5000);

    return () => {
      clearTimeout(staircaseTimer);
      clearTimeout(transitionTimer);
    };
  }, [onTransitionEnd]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          {/* Staircase Animation */}
          <div style={styles.staircaseAnimation}>
            <div style={{ ...styles.step, ...styles.step1 }}></div>
            <div style={{ ...styles.step, ...styles.step2 }}></div>
            <div style={{ ...styles.step, ...styles.step3 }}></div>
            <div style={{ ...styles.step, ...styles.step4 }}></div>
            <div style={{ ...styles.step, ...styles.step5 }}></div>
          </div>

          {/* "Hi :D" text fades in after staircase animation */}
          {showHi && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold animate-fade">
              Hi :D
            </div>
          )}
        </div>
      )}

      <style>
        {`
          @keyframes moveIn {
            to {
              left: 0;
            }
          }
        `}
      </style>
    </>
  );
};

// Inline styles for the staircase animation and "Hi :D" text
const styles = {
  staircaseAnimation: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  step: {
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "20%", // Adjust step height as necessary
    left: "100%", // Starts off-screen
    animation: "moveIn 0.6s forwards",
  },
  step1: {
    top: "0",
    animationDelay: "0.1s",
  },
  step2: {
    top: "20%",
    animationDelay: "0.3s",
  },
  step3: {
    top: "40%",
    animationDelay: "0.5s",
  },
  step4: {
    top: "60%",
    animationDelay: "0.7s",
  },
  step5: {
    top: "80%",
    animationDelay: "0.9s",
  },
};

export default TransitionScreen;
