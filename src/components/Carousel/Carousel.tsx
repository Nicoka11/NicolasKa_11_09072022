import { useState } from "react";
import { CarouselProps } from "./Carousel.interface";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);

  const increment = () => {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const decrement = () => {
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  return (
    <section className={styles.carouselContainer}>
      {images.length > 1 && (
        <>
          <button className={styles.button} onClick={decrement}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              chevron_left
            </span>
          </button>
          <div className={styles.counter}>
            <div className={styles.currentIndex}>
              {images.map((_, i) => (
                <p
                  key={`counter-${i}`}
                  style={{ transform: `translateY(${i * 100 - 100 * index}%)` }}
                >
                  {i + 1}
                </p>
              ))}
            </div>
            <p>/ {images.length}</p>
          </div>
        </>
      )}
      {images.map((image, i) => (
        <img
          className={`imageCover ${styles.carouselImage}`}
          key={i}
          src={image.src}
          alt={image.alt}
          style={{ transform: `translateX(${i * 100 - 100 * index}%)` }}
        />
      ))}
      {images.length > 1 && (
        <button className={styles.button} onClick={increment}>
          <span className={`material-symbols-outlined ${styles.icon}`}>
            chevron_right
          </span>
        </button>
      )}
    </section>
  );
};

export default Carousel;
