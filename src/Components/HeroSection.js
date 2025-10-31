import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/HeroSection.css"; 

import slide1 from "../Assets/hero_img1.jpg";
import slide2 from "../Assets/hero_img2.jpg";
import slide3 from "../Assets/hero_image3.jpg";
import dccbLogo from "../Assets/DCCB.png"; // translucent logo

function HeroSection() {
  const slides = [
    { image: slide1, title: "VISAKHAPATNAM" },
    { image: slide2, title: "ANAKAPALLE" },
    { image: slide3, title: "ALLURI SEETHARAMARAJU" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-overlay">
              <img src={dccbLogo} alt="DCCB Logo" className="hero-logo" />
              <h1 className="hero-text">{slide.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default HeroSection;
