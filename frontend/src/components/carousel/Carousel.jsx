import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import styles from "./carousel.module.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JkPKxPfuSy6YB4LzC8MsVAwJb-bjmCOpNw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3_X2CliA9TWhPuVIbHqsGaMGRbM8p08rkA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNpYyUCQyunt9ChrDl_HYs9L3W2zOqfE6NA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6HzSHmeg0Qa77G8cAB2YnflMsdvdnvKEiA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeErpIPMdpCcmZtxw2VLScjambZtjzsfVRA&s",
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    new Flickity(carouselRef.current, {
      wrapAround: true,
      autoPlay: 3000,
      prevNextButtons: true,
      pageDots: false,
      draggable: true,
      cellAlign: "center",
      contain: true,
    });
  }, []);

  return (
    <section className={styles.carousel}>
      <div className="gallery" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className={`gallery-cell ${styles.slider}`}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.sliderImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
