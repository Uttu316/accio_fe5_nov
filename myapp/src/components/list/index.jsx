import "./list.css";
const List = () => {
  const names = [
    {
      name: "Pawan",
      id: "3232",
    },
    {
      name: "Adarsh",
      id: "1211",
    },
    {
      name: "Monika",
      id: "2313",
    },
    {
      name: "Nidhi",
      id: "7821",
    },
  ];
  return (
    <div className="list">
      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
