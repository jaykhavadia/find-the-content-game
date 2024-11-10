"use client";
import React, { useState, useEffect } from "react";

const NoSkipAd = ({ onClose, duration = 30 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    // Start countdown timer
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanClose(true);
    }
  }, [timeLeft]);

  return (
    <div style={modalStyles}>
      <div
        style={modalContentStyles}
        className='flex flex-col justify-center items-center'
      >
        <h2>Advertisement</h2>
        {/* <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2825016877369969'
          crossorigin='anonymous'
        ></script>
        <ins
          className='adsbygoogle'
          style='display:block'
          data-ad-client='ca-pub-2825016877369969'
          data-ad-slot='4070965389'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}

        {/* Display the countdown timer */}
        <p style={{ fontSize: "18px" }}>
          {canClose
            ? "You can now close the ad."
            : `Please wait ${timeLeft} seconds to close.`}
        </p>

        {/* Disable the button until countdown is complete */}
        <button onClick={onClose} disabled={!canClose} style={buttonStyles}>
          {canClose ? "Close Ad" : "Wait..."}
        </button>
      </div>
    </div>
  );
};

// Styling for the modal (basic CSS-in-JS for demo purposes)
const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  minWidth: "800px",
  minHeight: "600px",
};

const buttonStyles = {
  marginTop: "15px",
  padding: "10px 20px",
  fontSize: "16px",
};

export default NoSkipAd;
