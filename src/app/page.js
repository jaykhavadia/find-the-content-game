"use client";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import NoSkipAd from "./components/NoSkipAd";
import { redirect } from "next/navigation";

export default function Home() {
  const [showAd, setShowAd] = useState(false);
  const [AdDuration, setAdDuration] = useState(30);

  // Function to handle showing the no-skip ad
  const triggerNoSkipAd = () => {
    setShowAd(true);
  };

  // Close ad handler
  const closeAd = () => {
    setShowAd(false);
    redirect("/home");
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
    <div className='mt-52 min-h-80 flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>Welcome to the Game</h1>
      <p className='text-xl'>Try to find the content without cheating!</p>
      <p className='mt-8 text-xl'>Do you wanna se ad?</p>
      <div className='mt-8 min-w-72 flex justify-between '>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            setAdDuration(10);
            triggerNoSkipAd();
          }}
        >
          Yes
        </button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => triggerNoSkipAd()}
        >
          No
        </button>
      </div>
      {/* Display the NoSkipAd modal when showAd is true */}
      {showAd && <NoSkipAd onClose={closeAd} duration={AdDuration} />}
    </div>
  );
}
