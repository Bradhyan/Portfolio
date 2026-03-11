export const SimpleCarouselCode = `
import { useState } from "react";

export default function SimpleCarousel() {

  const slides = [
    { image: "image1.jpg", title: "Slide One" },
    { image: "image2.jpg", title: "Slide Two" },
    { image: "image3.jpg", title: "Slide Three" }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">

      <img src={slides[index].image} alt="" />

      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>

    </div>
  );
}
`;