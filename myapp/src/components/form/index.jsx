import { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    name: "ABC",
    age: "",
    isStudent: false,
  });

  const { name } = state;

  const onChange = (e) => {
    let { value ,name} = e.target;

    setState({...state,[name]:value})
  };

  console.log(state)
  return (
    <div>
      <h1>Hello {name}</h1>
      <div>
        <input name="name"  onChange={onChange} />
      </div>
      <div>
        <input name="age" onChange={onChange} />
      </div>
      <div>
        <input name="isStudent" onChange={onChange} />
      </div>
    </div>
  );
};

export default Form;
