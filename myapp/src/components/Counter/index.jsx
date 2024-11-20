import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   let count = 0;

  const onAdd = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
    console.log("Minus", count);
  };
  return (
    <div>
      <h1>Hello Counter {count}</h1>
      <div>
        <button onClick={onAdd}>Add</button>
        <button onClick={onMinus}>Minus</button>
      </div>
    </div>
  );
};

export default Counter;
