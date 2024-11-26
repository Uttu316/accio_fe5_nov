import styles from "./styles.module.css";

const PetCard = ({ image, id, name, subtitle, desc }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.litItemTitle}>{name}</p>
        <p className={styles.litItemSubtitle}>{subtitle}</p>
        <p className={styles.litItemDescription}>{desc}</p>
      </div>
    </div>
  );
};

export default PetCard;
