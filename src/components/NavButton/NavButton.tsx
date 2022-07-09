import styles from "./NavButton.module.scss";
import { useLocation } from "react-router-dom";
import { NavButtonProps } from "./NavButton.interface";

const NavButton = ({ children, href }: NavButtonProps) => {
  const location = useLocation();
  const isOnPath = location.pathname === href

  return (
    <a href={href} className={`${styles.navButton} ${isOnPath ? styles.active : ""}`}>
      {children}
    </a>
  );
};

export default NavButton;
