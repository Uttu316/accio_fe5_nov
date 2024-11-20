import { useState } from "react";
import InputItem from "./inputItem";
import styles from "./userform.module.css";

const UserForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    isAgree: false,
    gender: "",
  });

  const onChange = (e) => {
    let {name,id,value,checked} = e.target

    if(name==='gender'){
        value = id
    }
    if(name==='isAgree'){
        value = checked
    }
    
    setState({...state,[name]:value})
  };

  console.log(state)
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Login</h2>
        <form className={styles.form}>
          <InputItem
            value={state.name}
            name={"name"}
            label={"Name"}
            onChange={onChange}
          />
          <InputItem
            name={"email"}
            label={"Email"}
            type={"email"}
            value={state.email}
            onChange={onChange}
          />
          <InputItem
            name={"phone"}
            label={"Mobile"}
            type={"tel"}
            value={state.phone}
            onChange={onChange}
          />
          <div className={styles.radioItem}>
            <p className={styles.radioTitle}>Gender</p>
            <div className={styles.radios}>
              <span>
                <input
                  onChange={onChange}
                  value={state.gender}
                  className={styles.radio}
                  type="radio"
                  id="male"
                  name="gender"
                />
                <label className={styles.radioLabel} htmlFor="male">
                  Male
                </label>
              </span>
              <span>
                <input
                  onChange={onChange}
                  value={state.gender}
                  className={styles.radio}
                  type="radio"
                  id="female"
                  name="gender"
                />
                <label className={styles.radioLabel} htmlFor="female">
                  Female
                </label>
              </span>
              <span>
                <input
                  onChange={onChange}
                  value={state.gender}
                  className={styles.radio}
                  type="radio"
                  id="other"
                  name="gender"
                />
                <label className={styles.radioLabel} htmlFor="other">
                  Others
                </label>
              </span>
            </div>
          </div>
          <div className={styles.checkItem}>
            <input
              id="isAgree"
              name="isAgree"
              type="checkbox"
              onChange={onChange}
              value={state.isAgree}
              className={styles.checkbox}
            />
            <label className={styles.checkLabel} htmlFor="isAgree">
              I agree with agreements
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UserForm;
