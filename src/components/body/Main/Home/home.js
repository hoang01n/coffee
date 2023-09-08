import React from "react";
import coffe from "./about.jpg";
import "./home.css";
import {Link} from "react-router-dom";

const home = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>
        <div className="row">
          <div className="image">
            <img src={coffe} alt="" width="100%" />
          </div>
          <div className="content">
            <h3>what makes our coffe special?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              eaque porro modi magni sed magnam perspiciatis aliquam esse
              exercitationem autem inventore dolorem soluta id, maiores corrupti
              laboriosam nesciunt deserunt officiis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              earum dicta laboriosam maiores accusantium saepe rem, inventore
              minima, ducimus placeat necessitatibus pariatur at facere
              doloribus. Iure magnam illo sapiente mollitia!
            </p>
            <Link className="btn">buy now </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
