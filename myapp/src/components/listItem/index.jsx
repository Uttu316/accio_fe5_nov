const ListItem = (props) => {
  const { name, age } = props;

  return (
    <li>
      {name} {age}
    </li>
  );
};

export default ListItem;

