import { LodgingCardProps } from "./LodgingCard.interface";
import styles from "./LodgingCard.module.scss";

const LodgingCard = ({ lodging }: LodgingCardProps) => {
  return (
    <a href={`/lodgings/${lodging.id}`}>
      <article className={styles.container}>
        <h2>{lodging.title}</h2>
        <div className={styles.overlay} />
        <img className="imageCover" src={lodging.cover} alt={lodging.title} />
      </article>
    </a>
  );
};

export default LodgingCard;
