import { Link } from "react-router";

const Home = () => {
  return (
    <div id="home">
      <h1>Home</h1>

      <Link to="/profile">Go to profile</Link>
      <Link to="/about">Go to About</Link>
      <div>
        <Link to="/petshop">Visit Pet Shop</Link>
      </div>
    </div>
  );
};

export default Home;
