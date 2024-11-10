"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import InfiniteAds from "../components/InfiniteAds";
import AdGrid from "../components/AdGrid";

export default function Home() {
  const [showAdOverlay, setShowAdOverlay] = useState(false);
  const handleFindContent = () => {
    alert("Congratulations! You found the content!");
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        toast.error("NO CHEATING", { autoClose: 3000 });
        setShowAdOverlay(true);
        setTimeout(() => {
          setShowAdOverlay(false);
          window.location.reload();
        }, 30000); // 30 seconds
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      {/* <InfiniteAds onFindContent={handleFindContent} /> */}

      <AdGrid />
      {showAdOverlay && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <h2>Watch this ad for 30 seconds</h2>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
