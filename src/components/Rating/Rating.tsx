import { RatingProps } from "./Rating.interface";
import styles from "./Rating.module.scss";

const Rating = ({ rating }: RatingProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rating}>
      {stars.map((starCount) => (
        <span
          key={starCount}
          className={`material-symbols-outlined ${
            starCount > parseInt(rating) ? styles.disabled : ""
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
};

export default Rating;
