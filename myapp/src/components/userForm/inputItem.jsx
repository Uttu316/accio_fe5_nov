import styles from "./userform.module.css";

const InputItem = ({
  name,
  type,
  error,
  placeholder,
  value,
  label,
  onChange,
}) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        className={styles.input}
      />
      {!!error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputItem;
