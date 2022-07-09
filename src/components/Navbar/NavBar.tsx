import styles from "./NavBar.module.scss";
import Logo from "../Logo";
import NavButton from "../NavButton";

const NavBar = () => {
  return (
    <div className="container">
      <header className={styles.navContainer}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <ul className={styles.navigation}>
          <li>
            <NavButton href="/">Accueil</NavButton>
          </li>
          <li>
            <NavButton href="/about">A Propos</NavButton>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
