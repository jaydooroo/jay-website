import React from "react";
import "./About.css"; // Create this CSS file for custom styles

const About = () => {
  return (
    <>
      <section className="dark-section">
        <div className="content-container">
          <h1>Software Programmer</h1>
          <p>Currently: Product designer at WAF</p>
          <p>Latest work: Accessibility edu-cards tool</p>
          <p>Location: Tours, France</p>
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
