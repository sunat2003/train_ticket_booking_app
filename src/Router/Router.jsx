import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import About from "../Pages/About/about";
import Booking from "../Pages/Booking/booking";
import Login from "../Pages/Login/login";
import Signup from "../Pages/SignUp/signup";
import Mainpage from "../Pages/Main/mainpage";

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="home/" element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="booking/" element={<Booking />} />
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPage;
