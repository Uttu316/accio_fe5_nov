import { Link } from "react-router";

const NotFound = () => {
  return (
    <div id="not_found">
      <h1>Wrong URL</h1>
      <h2>404</h2>
      <p>
        <Link replace to="/">
          Go to Home
        </Link>
        <Link replace to="/petshop">
          Visit Pet shop
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
