import React,{useState} from "react";
import "./App.css";
import FirstPage from "./components/firstPage";
import Counter from "./components/Counter";
import Form from "./components/form";
import UserForm from "./components/userForm";
import ClassComp from "./components/class";
import LifeCycle from "./components/lifeCycyle";

const App = () => {

  const [toggle,setToggle] =useState(true)

  const onToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <React.Fragment>
      {/* <FirstPage/> */}
      {/* <Counter /> */}
      {/* <Form/> */}
      {/* <UserForm/> */}

      {/* <ClassComp  firstTask={"Wake up"}/> */}

      {toggle&&<LifeCycle/>}
      <button onClick={onToggle}>
        {toggle?"Hide the Comp":"Show the COmp"}
      </button>
    </React.Fragment>
  );
};

export default App;
