import { useState } from "react";
import InputItem from "../userForm/inputItem";
import styles from "./styles.module.css";
import { validEmail, validPassword } from "../../utils/validations";
let intialErrors = {
    email: "",
    password: "",
    error: "",
  }
const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(intialErrors);

  const validateForm = () => {
    setErrors(intialErrors)
    const { email, password } = state;
    let isValidEmail = validEmail(email);

    if (!isValidEmail) {
      setErrors({ ...errors,password:"", email: "Enter valid email" });
      return false;
    }

    let isValidPassword = validPassword(password);
    if (!isValidPassword) {
      setErrors({ ...errors,email:"", password: "Enter valid password" });
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

  const onSubmit = (e) => {
    e.preventDefault(); // prevents the reloading the page

    let isVaidForm = validateForm();

    if (isVaidForm) {
      //submit the data
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.formHeading}>User Login</h1>

      <div className={styles.formContainer}>
        <form onSubmit={onSubmit}>
          <InputItem
            placeholder={"Enter email"}
            label={"Email"}
            type={"email"}
            name={"email"}
            value={state.email}
            error={errors.email}
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

          <button onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
