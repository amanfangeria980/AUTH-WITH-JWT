import { useNavigate } from "react-router-dom";

const Secret = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/register");
  };
  return (
    <div>
      <h1>Super Secret Page</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Secret;
