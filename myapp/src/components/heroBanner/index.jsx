import styles from "./styles.module.css";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { PetContext } from "../../contexts/petContext";

const HeroBanner = () => {
  const { offer } = useContext(PetContext);

  return (
    <div className={styles.heroBanner}>
      <img src={logo} className={styles.logo} />
      <h3>{offer}</h3>
    </div>
  );
};

export default HeroBanner;
