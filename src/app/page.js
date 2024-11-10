"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import NoSkipAd from "./components/NoSkipAd";

export default function Home() {
  const [showAd, setShowAd] = useState(true);

  // Function to handle showing the no-skip ad
  const triggerNoSkipAd = () => {
    setShowAd(true);
  };

  // Close ad handler
  const closeAd = () => {
    setShowAd(false);
    // Optionally, add any additional logic here when the ad closes
  };

  // Detect Ctrl+F (simulate "cheat" behavior)
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        triggerNoSkipAd();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className='h-72 flex flex-col justify-center items-center'>
      <h1 className='text-2xl' >Welcome to the Game</h1>
      <p className='text-xl' >Try to find the content without cheating!</p>

      {/* Display the NoSkipAd modal when showAd is true */}
      {showAd && <NoSkipAd onClose={closeAd} duration={30} />}
    </div>
  );
}
