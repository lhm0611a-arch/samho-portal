import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const images = [
  "/yard.png", // 1. Shipyard Aerial (Uploaded by user)
  "https://images.unsplash.com/photo-1581092160607-ee22731c9a41?auto=format&fit=crop&w=1280&q=70", // 2. Steel/Engineering
  "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1280&q=70", // 3. Welding
  "https://images.unsplash.com/photo-1605335128084-3c87e0b5104e?auto=format&fit=crop&w=1280&q=70", // 4. Cargo Ship
  "https://images.unsplash.com/photo-1598506899127-d46338e55e0c?auto=format&fit=crop&w=1280&q=70", // 5. Gantry Cranes
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1280&q=70"  // 6. Industrial workers
];

export function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Preload images immediately so they don't pop in late
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s transition is a good balance between fast and smooth
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0f18]">
      {/* 
        Rendering all images at once and animating their opacity 
        prevents the browser from having to re-fetch/re-decode them, 
        making the transition much smoother and faster.
      */}
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          initial={false}
          animate={{ 
            opacity: index === i ? 0.8 : 0, 
            scale: index === i ? 1 : 1.05,
            zIndex: index === i ? 10 : 0
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover saturate-[1.2]"
          alt={`Shipyard Background ${i + 1}`}
        />
      ))}
      
      {/* Gradients to keep text readable while allowing colorful background to show */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-blue-500/10 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
