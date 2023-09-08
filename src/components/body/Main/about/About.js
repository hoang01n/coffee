import React from "react";
import "./about.css";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="home">
        <div className="content">
          <h3>fresh coffe in the moning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            ipsum error magnam nulla sit voluptatum omnis consequuntur alias
            totam blanditiis hic earum excepturi voluptas consectetur
            dignissimos perspiciatis fugit reiciendis. Praesentium?
          </p>
          <Link className="btn">get your</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
