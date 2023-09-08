import React from "react";

import "./Products.css";
import {useState} from "react";
import {useEffect} from "react";
// import axios from "axios";
import {Link} from "react-router-dom";
const Products = ({products}) => {
  const [data, setData] = useState([]);
  // Example context value

  useEffect(() => {
    const products = [
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "S",
        id: 3,
      },
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "S",
        id: 4,
      },
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "L",
        id: 1,
      },
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "l",
        id: 5,
      },
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "l",
        id: 6,
      },
      {
        name: "coffe FEE",
        price: "5000",
        sale_price: "80000",
        image:
          "https://vinpack.vn/uploads/details/2021/07/images/tui-zip-2-mat-giay-kraft-dung-ca-phe-in-lua-2-mau-truc-tiep-len-mat-truoc-tui-gan-van-thong-hoi-1-chieu-1.jpg",
        description:
          " cà phê nguyên chất, bản vị nó đậm đà, hương vị mang lại cực kì ngon",
        size: "l",
        id: 7,
      },
    ];
    setData(products);
  }, []);

  return (
    <div>
      <div className="products" id="products">
        <h1 className="heading">
          our
          <span>products</span>
        </h1>
        <div className="box-container">
          {data.map((d) => (
            <div className="box" key={`product-${d.id}`}>
              <Link to="">
                <div className="icons">
                  <i href="" className="fas fa-shopping-cart"></i>
                  <i href="" className="fas fa-heart"></i>
                  <i href="" className="fas fa-eye"></i>
                </div>
                <div className="image">
                  <img src={d.image} width="100%" height={"300px"} alt="" />
                </div>
                <div className="content">
                  <h3>fresh coffee</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="price">
                    $15.99 <span>$20.99</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* 
        <div className="box">
          <div className="icons">
            <a href="" className="fas fa-shopping-cart"></a>
            <a href="" className="fas fa-heart"></a>
            <a href="" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={products} width="100%" alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icons">
            <a href="" className="fas fa-shopping-cart"></a>
            <a href="" className="fas fa-heart"></a>
            <a href="" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={products} width="100%" alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icons">
            <a href="" className="fas fa-shopping-cart"></a>
            <a href="" className="fas fa-heart"></a>
            <a href="" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={products} width="100%" alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icons">
            <a href="" className="fas fa-shopping-cart"></a>
            <a href="" className="fas fa-heart"></a>
            <a href="" className="fas fa-eye"></a>
          </div>
          <div className="image">
            <img src={products} width="100%" alt="" />
          </div>
          <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
