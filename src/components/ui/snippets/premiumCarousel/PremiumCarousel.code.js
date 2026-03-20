export const premiumCarouselCode = `
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

.dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: white;
}

export default function PremiumCarousel() {

  const slides = [
    {
      image: "https://picsum.photos/id/1015/900/400",
      title: "Mountain Landscape",
    },
    {
      image: "https://picsum.photos/id/1016/900/400",
      title: "Forest Nature",
    },
    {
      image: "https://picsum.photos/id/1018/900/400",
      title: "Lake Reflection",
    },
  ];

  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      
    <div className="w-full max-w-4xl mx-auto relative">

      {/* SLIDE */}
      <div className="overflow-hidden rounded-xl">

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={slides[index].title}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[260px] object-cover"
          />
        </AnimatePresence>

      </div>

      {/* TITLE */}
      <p className="text-center text-white mt-4 text-sm">
        {slides[index].title}
      </p>

      {/* ARROWS */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">

        <button
          onClick={prev}
          className="bg-black/60 text-white px-3 py-2 rounded-lg hover:bg-black transition"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="bg-black/60 text-white px-3 py-2 rounded-lg hover:bg-black transition"
        >
          ▶
        </button>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">

  {slides.map((_, i) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className="dot"
    />
  ))}

</div>

    </div>
    </div>
  );
}
`;