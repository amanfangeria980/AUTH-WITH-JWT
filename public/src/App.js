import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Secret from "./pages/Secret";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Secret />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
