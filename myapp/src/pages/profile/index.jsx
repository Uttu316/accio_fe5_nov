import { Link, useNavigate } from "react-router";

const Profile = () => {
  let navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  const onHome = () => {
    navigate("/");
  };
  return (
    <div id="profile">
      <h1>Profile</h1>
      <Link to="/">Go to Home</Link>
      <Link to="/about">Go to About</Link>

      <button onClick={onBack}>Go back</button>
      <button onClick={onHome}>Go Home</button>
    </div>
  );
};

export default Profile;
