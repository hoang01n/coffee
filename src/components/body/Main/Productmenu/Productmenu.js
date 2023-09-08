import React from "react";
import Product from "./product-1.jpg";
import "./Productmenu.css";
import {Link} from "react-router-dom";

const Productmenu = () => {
  return (
    <div>
      <section className="menu" id="menu">
        <h1 className="heading">
          our<span>menu</span>our{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link className="btn">add to cart</Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $17.99 <span>22.99</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $15 <span>20.9</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $15.99 <span>18.5</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $11 <span>12.99</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd heakty</h3>
            <div className="price">
              $7.99 <span>9.99</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src={Product} width="100px" height="100px" alt="" />
            <h3>tsaty abd </h3>
            <div className="price">
              $5.99 <span>7.99</span>
            </div>
            <Link href="" className="btn">
              add to cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productmenu;
