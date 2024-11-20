import styles from "./userform.module.css";

const InputItem = ({ name,type, value, label, onChange }) => {

  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        type={type}
        className={styles.input}
      />
    </div>
  );
};

export default InputItem;
