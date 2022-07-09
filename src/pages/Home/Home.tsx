import { Hero, LodgingCard } from "../../components";
import image from "../../assets/images/home-hero.png";
import { getAllLodgings } from "../../api/getLodging";
import styles from "./Home.module.scss"

const HomePage = () => {
  const allLodgings = getAllLodgings();
  return (
    <>
      <Hero
        title="Chez vous, partout et ailleurs"
        image={{
          src: image,
          alt: "bienvenue sur Kasa",
        }}
      />
      <div className={styles.grid}>
      {allLodgings.map((lodging) => (
        <LodgingCard lodging={lodging}/>
        ))}
        </div>
    </>
  );
};

export default HomePage;
