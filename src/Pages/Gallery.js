import React from "react";
import "./Gallery.css";
import Product1 from "../Assets/Gallery/Product1.jpg";
import Product2 from "../Assets/Gallery/Product2.jpg";
import Product3 from "../Assets/Gallery/Product3.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Explore our products and memories</p>

      {/* 🏦 Bank Products Section */}
      <section className="gallery-section">
        <h2 className="section-title">Bank Products</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={Product1} alt="" />
            <div className="overlay">
              <span>Product 1</span>
            </div>
          </div>

          <div className="gallery-item">
            <img src={Product2} alt="Bank Product 2" />
            <div className="overlay">
              <span>Product 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* 📸 Photos Section */}
      <section className="gallery-section">
        <h2 className="section-title">Photos</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={Product3} alt="Bank Event Photo" />
            <div className="overlay">
              <span>Event Photo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
