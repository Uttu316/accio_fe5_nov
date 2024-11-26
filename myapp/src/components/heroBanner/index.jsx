import styles from "./styles.module.css";
import logo from "../../assets/logo.jpg";

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <img src={logo} className={styles.logo} />
    </div>
  );
};

export default HeroBanner;
