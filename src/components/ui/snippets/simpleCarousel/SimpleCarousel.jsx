"use client";

import { useState } from "react";

export default function SimpleCarousel({ preview = false }) {

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/id/1015/800/400",
      title: "Mountain View"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1016/800/400",
      title: "Forest Path"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1018/800/400",
      title: "Lake Reflection"
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">

      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">

        <img
          src={slides[index].image}
          alt={slides[index].title}
          className="w-full h-[250px] object-cover"
        />

      </div>

      {/* TITLE */}
      <p className="text-center text-white mt-4 text-sm">
        {slides[index].title}
      </p>

      {/* BUTTONS */}
      <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4">

        <button
          onClick={prev}
          className="bg-black/60 text-white px-3 py-1 rounded-lg hover:bg-black"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="bg-black/60 text-white px-3 py-1 rounded-lg hover:bg-black"
        >
          ▶
        </button>

      </div>

    </div>
  );
}