import ListItem from "../listItem";
import "./list.css";
const List = () => {
  const names = [
    {
      name: "Pawan",
      id: "3232",
      age: 20,
    },
    {
      name: "Adarsh",
      id: "1211",
      age: 19,
    },
    {
      name: "Monika",
      id: "2313",
      age: 22,
    },
    {
      name: "Nidhi",
      id: "7821",
      age: 21,
    },
  ];
  return (
    <div className="list">
      <ul>
        {names.map((item) => (
          <ListItem key={item.id} name={item.name} age={item.age} />
        ))}
      </ul>
    </div>
  );
};

export default List;
