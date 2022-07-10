
import { TagProps } from "./Tag.interface";
import styles from "./Tag.module.scss";

const Tag = ({ children }: TagProps) => {
  return <div className={styles.tag}>{children}</div>;
};

export default Tag;