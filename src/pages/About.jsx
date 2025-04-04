import React from "react";
import "./About.css";
import JehyeonLeeBug from "../assets/JehyeonLee_bug.jpg";

const About = () => {
  return (
    <>
      <section className="dark-section">
        <div className="content-container">
          <div className="text-content">
            <h1>Software Programmer</h1>
            <p>Currently: Product designer at WAF</p>
            <p>Latest work: Accessibility edu-cards tool</p>
            <p>Location: Tours, France</p>
          </div>
          <div className="image-container">
            <img
              src={JehyeonLeeBug}
              alt="Profile"
              className="profile-image"
              style={{ width: "160%", height: "100%" }} // ensure image fits container
            />
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="content-container">
          <h2>The accessible design blog</h2>
          <p>
            Good design includes everyone, right? That’s why I interview
            Disabled people to better understand their needs...
          </p>
          <button>Start reading →</button>
        </div>
      </section>
    </>
  );
};

export default About;
