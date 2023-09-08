import React from "react";
import About from "./about/About.js";
import Home from "./Home/home.js";
import Productmenu from "./Productmenu/Productmenu.js";
import Products from "./Products/Products.js";

const Main = () => {
  return (
    <div>
      <About />
      <Home />
      <Productmenu />
      <Products />
    </div>
  );
};

export default Main;
