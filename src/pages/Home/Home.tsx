import { Hero, LodgingCard } from "../../components";
import { getAllLodgings } from "../../api/getLodging";
import styles from "./Home.module.scss";

const HomePage = () => {
  const allLodgings = getAllLodgings();
  return (
    <>
      <Hero
        title="Chez vous, partout et ailleurs"
        image={{
          src: `${process.env.PUBLIC_URL}/assets/images/home-hero.png`,
          alt: "bienvenue sur Kasa",
        }}
      />
      <div className={styles.grid}>
        {allLodgings.map((lodging) => (
          <LodgingCard key={lodging.id} lodging={lodging} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
