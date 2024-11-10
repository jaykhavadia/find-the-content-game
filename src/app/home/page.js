"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import InfiniteAds from "../components/InfiniteAds";
import AdGrid from "../components/AdGrid";
import NoSkipAd from "../components/NoSkipAd";
import { redirect } from "next/navigation";

export default function Home() {
  const [showAdOverlay, setShowAdOverlay] = useState(false);
  const [isCheating, setIsCheating] = useState(false);
  const [timerVisible, setTimerVisible] = useState(true);
  const handleFindContent = () => {
    if (isCheating) {
      toast.error("Baap Say Shanpati nahii", { autoClose: 3000 });
      closeAd();
      return;
    }
    alert("Congratulations! You found the content!");
  };

  const closeAd = () => {
    redirect('/');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        toast.error("NO CHEATING", { autoClose: 3000 });
        setTimerVisible(false);
        setShowAdOverlay(true);
        setIsCheating(true);
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
      <InfiniteAds onFindContent={handleFindContent} />

      <AdGrid />
      {showAdOverlay && <NoSkipAd onClose={closeAd} duration={3} timerVisible={timerVisible} />}
      <ToastContainer />
    </div>
  );
}
