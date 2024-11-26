import LoaderCard from "../loaderCard";
import styles from "./styles.module.css";

const PetList = (props) => {
  const { petTitle } = props;
  return (
    <section className={styles.listWrapper}>
      <h2 className={styles.listTitle}>{petTitle}</h2>

      <div className={styles.listContainer}>
        <LoaderCard />

        <div className={styles.listItem}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={"https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}
            />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.litItemTitle}>Pet Name</p>
            <p className={styles.litItemDescription}>Pet Breed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetList;
