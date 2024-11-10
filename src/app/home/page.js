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
  const handleFindContent = () => {
    if (isCheating) {
      alert("Bap Say Shanpati nahii");
      closeAd();
      return;
    }
    alert("Congratulations! You found the content!");
  };

  const closeAd = () => {
    redirect("/");
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
        setIsCheating(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <InfiniteAds onFindContent={handleFindContent} />

      <AdGrid />
      {showAdOverlay && <NoSkipAd onClose={closeAd} duration={3} />}
      <ToastContainer />
    </div>
  );
}
