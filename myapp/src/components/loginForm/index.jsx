import { useState } from "react";
import InputItem from "../userForm/inputItem";
import styles from "./styles.module.css";
import { validPassword, validUsername } from "../../utils/validations";
import { signin } from "../../services/signin";
let intialErrors = {
  username: "",
  password: "",
  error: "",
};
const LoginForm = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(intialErrors);

  const validateForm = () => {
    setErrors(intialErrors);
    const { username, password } = state;
    let isValidUsername = validUsername(username);

    if (!isValidUsername) {
      setErrors({ ...intialErrors, username: "Enter valid username" });
      return false;
    }

    let isValidPassword = validPassword(password);
    if (!isValidPassword) {
      setErrors({ ...intialErrors, password: "Enter valid password" });
      return false;
    }

    return true;
  };
  const onInput = (e) => {
    const { name, value } = e.target;
    const newValue = {
      ...state,
      [name]: value,
    };
    setState(newValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // prevents the reloading the page

    let isVaidForm = validateForm();

    if (isVaidForm) {
      //submit the data
      const data = {
        password: state.password,
        username: state.username,
      };

      try {
        const userData = await signin(data);
        console.log({ userData });
      } catch (e) {
        setErrors({ ...intialErrors, error: e });
      }
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.formHeading}>User Login</h1>

      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <InputItem
            placeholder={"Enter username"}
            label={"Usename"}
            name={"username"}
            value={state.username}
            error={errors.username}
            onChange={onInput}
          />
          <InputItem
            placeholder={"Enter password"}
            label={"Password"}
            type={"password"}
            name={"password"}
            onChange={onInput}
            value={state.password}
            error={errors.password}
          />

          {!!errors.error && <p className={styles.error}>{errors.error}</p>}

          <button className={styles.btn} onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
