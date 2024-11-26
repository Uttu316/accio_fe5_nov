import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/profile";
import PetShop from "../pages/petshop";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/petshop" element={<PetShop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
