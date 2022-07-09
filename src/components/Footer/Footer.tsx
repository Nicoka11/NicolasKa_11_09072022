import styles from "./Footer.module.scss";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.logo}>
          <Logo color="white" />
        </div>
        <p className={styles.subtitle}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
