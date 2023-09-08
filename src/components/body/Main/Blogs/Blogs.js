import React from "react";
import blogs from "./product1.jpg";
import "./Blog.css";
import {Link} from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <section className="blogs" id="blogs">
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={blogs} width="40%" alt="" />
            </div>
            <div className="content">
              <Link className="title">tasty and refreshing coffee</Link>
              <span>ny admin/ 21 st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                debitis dolorum, vel sed vitae nesciunt fuga odit totam
                blanditiis assumenda consequuntur corrupti quasi inventore.
                Nobis nesciunt rerum reprehenderit et aspernatur.
              </p>
              <Link className="btn">read more</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs} width="40%" alt="" />
            </div>

            <div className="content">
              <Link className="title">tasty and refreshing coffee</Link>
              <span>ny admin/ 21 st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                debitis dolorum, vel sed vitae nesciunt fuga odit totam
                blanditiis assumenda consequuntur corrupti quasi inventore.
                Nobis nesciunt rerum reprehenderit et aspernatur.
              </p>
              <Link className="btn">read more</Link>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={blogs} width="40%" alt="" />
            </div>

            <div className="content">
              <Link href="" className="title">
                tasty and refreshing coffee
              </Link>
              <span>ny admin/ 21 st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                debitis dolorum, vel sed vitae nesciunt fuga odit totam
                blanditiis assumenda consequuntur corrupti quasi inventore.
                Nobis nesciunt rerum reprehenderit et aspernatur.
              </p>
              <Link href="" className="btn">
                read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
