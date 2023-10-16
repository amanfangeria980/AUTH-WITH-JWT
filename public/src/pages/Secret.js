import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Secret = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000/",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else {
          toast(`Hi! ${data.user}`, {
            theme: "dark",
          });
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  return (
    <>
      <div>
        <h1>Super Secret Page</h1>
        <button onClick={logOut}>Log Out</button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Secret;
