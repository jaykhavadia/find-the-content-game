import React, { useState, useRef, useEffect } from 'react';

const InfiniteAds = ({ onFindContent }) => {
  const [ads, setAds] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Populate ads with random text and insert "content" text in random locations
    const newAds = Array.from({ length: 50 }, (_, i) => (i === Math.floor(Math.random() * 50) ? "content" : `Ad content ${i + 1}`));
    setAds(newAds);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight) {
        setAds((prevAds) => [...prevAds, ...Array.from({ length: 50 }, (_, i) => `Ad content ${prevAds.length + i + 1}`)]);
      }
    };
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => containerRef?.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ height: 'calc(100vh - 50px)', overflowY: 'auto' }}>
      {ads.map((ad, index) => (
        <div key={index} onClick={() => ad === "content" && onFindContent()} style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
          {ad}
        </div>
      ))}
    </div>
  );
};

export default InfiniteAds;
