import React from "react";
import Header from "../../body/Header/Header";
import Blog from "../../body/Main/Blogs/Blogs";
import Footer from "../../body/Footer/Footer";
import About from "../../body/Main/about/About";

const Blogs = () => {
  return (
    <div>
      <Header />
      <About />
      <h1 className="heading">
        our <span>blogs</span>
      </h1>
      <Blog />
      <Blog />
      <Blog />

      <Footer />
    </div>
  );
};

export default Blogs;
