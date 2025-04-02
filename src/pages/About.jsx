import React from "react";
import "./About.css"; // Create this CSS file for custom styles

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="bio">
        <img
          src="/path/to/your-profile.jpg"
          alt="Your Name"
          className="profile-pic"
        />
        <p>
          Hi, I'm [Your Name]! I'm a passionate developer with a love for
          creating beautiful, responsive web applications. I specialize in
          front-end development using React, and I enjoy exploring new
          technologies to continuously improve my skills.
        </p>
      </div>
      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>React / JavaScript</li>
          <li>HTML & CSS</li>
          <li>Material-UI</li>
          <li>Responsive Design</li>
          <li>Git & Version Control</li>
        </ul>
      </section>
      <section className="journey">
        <h2>My Journey</h2>
        <p>
          My journey began [number] years ago when I discovered my passion for
          coding. Over the years, I've worked on numerous projects that have
          challenged and inspired me to grow as a developer. I'm always excited
          to tackle new challenges and learn something new every day.
        </p>
      </section>
    </div>
  );
};

export default About;
