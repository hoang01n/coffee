import React from "react";
import "./Concat.css";
const Contact = () => {
  // let url =
  //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5081.8746744348055!2d106.74913372877997!3d10.837228620221007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527ec3d3f5293%3A0xd3d967597ac027f7!2zQ-G7mWkgQ29mZmVl!5e0!3m2!1sen!2s!4v1689398225332!5m2!1sen!2s";
  return (
    <div>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          {/* <iframe
            className="map"
            src={url}
            width="600"
            height="450"
            style={{border: "0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" name="" id="" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" name="" id="" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" name="" id="" placeholder="number" />
            </div>
            <input
              type="submit"
              name=""
              id=""
              value="contact now"
              className="btn"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
