import { useNavigate } from "react-router";
import styles from "./styles.module.css";
import { useContext } from "react";
import { PetContext } from "../../contexts/petContext";

const PetCard = ({ image, pet, id, name, subtitle, desc }) => {
  const navigate = useNavigate();
  const { offer, setOffer } = useContext(PetContext);

  const onPetClick = () => {
    navigate(`/pet/${pet}/${id}`);
  };
  return (
    <div className={styles.listItem} onClick={onPetClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.litItemTitle}>{name}</p>
        <p className={styles.litItemSubtitle}>{subtitle}</p>
        <p className={styles.litItemDescription}>{desc}</p>
        <p>{offer}</p>
      </div>
    </div>
  );
};

export default PetCard;
