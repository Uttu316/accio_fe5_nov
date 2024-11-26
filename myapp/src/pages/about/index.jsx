import { Link } from "react-router";

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default About;
