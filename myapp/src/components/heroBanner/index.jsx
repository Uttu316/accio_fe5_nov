import styles from "./styles.module.css";
import logo from "../../assets/logo.jpg";
import { forwardRef, useContext } from "react";
import { PetContext } from "../../contexts/petContext";

const HeroBanner = forwardRef((props, ref) => {
  const { offer } = useContext(PetContext);

  return (
    <div className={styles.heroBanner}>
      <img src={logo} className={styles.logo} />
      <h3 ref={ref}>{offer}</h3>
    </div>
  );
});

export default HeroBanner;
