
import React, { useState } from "react";
import LifeCycle from ".";



const LifeCycleWrapper = ()=>{
    const [toggle,setToggle] =useState(true)

    const onToggle = ()=>{
      setToggle(!toggle)
    }
    return (
        <React.Fragment>
        {toggle&&<LifeCycle/>}
        <button onClick={onToggle}>
          {toggle?"Hide the Comp":"Show the COmp"}
        </button>
        </React.Fragment>
    )
}

export default LifeCycleWrapper