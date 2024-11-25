import { useState } from "react";
import styles from "./styles.module.css";
import LoginForm from "../loginForm";
import UserProfile from "../userProfile";




const UserWrapper = ()=>{
    const [isValidUser,setIsValidUser] = useState(false);


    return (
        <div  className={styles.wrapper}>
            {!isValidUser && <LoginForm/>}
            {isValidUser && <UserProfile/>}
        </div>
    )

}

export default UserWrapper