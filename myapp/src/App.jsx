import React from "react";
import "./App.css";
import FirstPage from "./components/firstPage";
import Counter from "./components/Counter";
import Form from "./components/form";
import UserForm from "./components/userForm";
import ClassComp from "./components/class";

const App = () => {
  return (
    <React.Fragment>
      {/* <FirstPage/> */}
      {/* <Counter /> */}
      {/* <Form/> */}
      {/* <UserForm/> */}

      <ClassComp  firstTask={"Wake up"}/>
    </React.Fragment>
  );
};

export default App;
