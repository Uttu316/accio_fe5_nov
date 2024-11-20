import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header_title}>I am a Header</h2>
    </header>
  );
};

export default Header;
