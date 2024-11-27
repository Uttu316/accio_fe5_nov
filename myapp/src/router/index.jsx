import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import Profile from "../pages/profile";
import PetShop from "../pages/petshop";
import PetDetails from "../pages/petDetails";
import NotFound from "../pages/notFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/petshop" element={<PetShop />} />

        <Route path="/pet/:pet/:petId" element={<PetDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
