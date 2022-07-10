import { Navigate, useParams } from "react-router-dom";
import { getLodging } from "../../api/getLodging";
import { Carousel, Collapse, Rating, Tag } from "../../components";
import styles from "./Lodging.module.scss";

const LodgingPage = () => {
  const { id } = useParams();
  if (!id) {
    return <Navigate to="/" />;
  }
  const lodging = getLodging(id);
  if (!lodging) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Carousel
        images={lodging?.pictures.map((pic, index) => ({
          src: pic,
          alt: `${lodging.title}-${index}`,
        }))}
      />
      <section className={styles.infoSection}>
        <div className={styles.leftInfo}>
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <div className={styles.tagList}>
            {lodging.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.host}>
            <p>
              {lodging.host.name.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </p>
            <div className={styles.hostImage}>
              <img
                className="imageCover"
                src={lodging.host.picture}
                alt={`${lodging.host.name} hôte de : ${lodging.title}`}
              />
            </div>
          </div>
          <Rating rating={lodging.rating} />
        </div>
      </section>
      <section className={styles.collapseSection}>
        <Collapse title="Description" content={lodging.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className={styles.equipmentList}>
              {lodging.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </section>
    </>
  );
};

export default LodgingPage;
