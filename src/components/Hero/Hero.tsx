import { HeroProps } from "./Hero.interface";
import styles from "./Hero.module.scss";

const Hero = ({ title, image }: HeroProps) => {
  return (
    <section className={styles.hero}>
      {title && <h1>{title}</h1>}
      <div className={styles.overlay} />
      <img className="imageCover" src={image.src} alt={image.alt} />
    </section>
  );
};

export default Hero;
