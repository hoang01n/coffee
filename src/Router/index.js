import React from "react";
import {Route, Routes} from "react-router-dom";

import Blogs from "../components/page/Blogs/Blogs";
import Products from "../components/page/Products/Products";
import Home from "../components/page/home/Home";

import Login from "../components/page/Login/Login";
import Register from "../components/page/Register/Register";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Products" element={<Products />} />

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
