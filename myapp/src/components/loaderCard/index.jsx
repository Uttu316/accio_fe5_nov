import styles from "./styles.module.css";

const LoaderCard = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderImg}></div>
      <div className={styles.loaderTitle}></div>
      <div className={styles.loaderDesc}></div>
    </div>
  );
};

export default LoaderCard;
