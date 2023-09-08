import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="share">
          <Link href="" className="fab fa-facebook-f"></Link>
          <Link href="" className="fab fa-twitter">
            {" "}
          </Link>
          <Link href="" className="fab fa-instagram"></Link>
          <Link href="" className="fab fa-linkedin"></Link>
          <Link href="" className="fab fa-pinterest"></Link>
        </div>
        <div className="links">
          <Link href="">Home</Link>
          <Link href="">Product</Link>
          <Link href="">Blogs</Link>
          <Link href="">Login</Link>
          <Link href="">Register</Link>
        </div>
        <div className="credit">
          created bt <span>mr. hoang</span> | all right reserved
        </div>
      </section>
    </div>
  );
};

export default Footer;
