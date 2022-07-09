import styles from "./NavButton.module.scss";
import { useLocation } from "react-router-dom";
import { NavButtonProps } from "./NavButton.interface";

const NavButton = ({ children, href }: NavButtonProps) => {
  const location = useLocation();
  const isOnPath = location.pathname === href;

  return (
    <div className={styles.navButtonContainer}>
      <a
        href={href}
        className={`${styles.navButton}`}
      >
        {children}
      </a>
      <div className={`${styles.underline} ${isOnPath ? styles.active : ""}`} />
    </div>
  );
};

export default NavButton;
