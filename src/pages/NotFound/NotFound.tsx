import styles from "./NotFound.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a href="/" className={styles.link}>
        Retourner sur la page d'accueil
      </a>
    </div>
  );
};

export default NotFoundPage;
