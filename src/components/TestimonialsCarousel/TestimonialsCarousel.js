import React, { useState } from "react";
import Testimonial from "./Testimonial";
import "./TestimonialsCarousel.css";

const TestimonialsCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel-container">
      <h1 className="heading">Testimonials</h1>

      <div className="carousel-wrapper">
        <div class="arrow-left" onClick={goToPrevSlide}></div>
        <div className="carousel">
          {items.map((item, index) =>
            activeIndex == index ? <Testimonial item={item} /> : null
          )}
        </div>
        <div class="arrow-right" onClick={goToNextSlide}></div>
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex == index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
