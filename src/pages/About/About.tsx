import { Hero } from "../../components";
import { collapseContent } from "./About.content";
import Collapse from "../../components/Collapse";
import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <>
      <Hero
        image={{
          src: `${process.env.PUBLIC_URL}/assets/images/about-hero.png`,
          alt: "kasa app a propos",
        }}
      />
      <section className={styles.aboutSection}>
        {collapseContent.map((content) => (
          <Collapse
            key={content.id}
            title={content.title}
            content={content.content}
          />
        ))}
      </section>
    </>
  );
};

export default AboutPage;
