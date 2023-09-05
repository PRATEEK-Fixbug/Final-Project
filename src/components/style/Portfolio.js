// Portfolio.js

import React, { useEffect } from "react";
import'./Portfolio.css';

export default function Portfolio() {
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");
    
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    function changeBackgroundColor() {
      const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "red", "white", "grey", "brown"];
      const profileContent = document.querySelector(".profile-content");
    
      if (profileContent) {
        const currentColor = profileContent.style.backgroundColor;
        const currentIndex = colors.indexOf(currentColor);
    
        const nextIndex = (currentIndex + 1) % colors.length;
    
        profileContent.style.backgroundColor = colors[nextIndex];
      }
    }
    
  }, []);

  return (
    <div className="portfolio">
    <div className="profile-details1">
      <div className="profile-content1">
      <h1 style={{ color: 'rgb(190, 220, 20)', textAlign: 'center', backgroundColor: 'blue', padding: '10px' }}>
          Welcome to My Profile
        </h1>
        <br />
        <img
          className="profile-image1 profile-picture"
          src="https://pbs.twimg.com/profile_images/1552549629643964419/QZjHk3Xm_400x400.jpg"
          height="200"
          width="200"
          alt="Profile Image1"
        />
        <br />
        <h3>PRATEEK KUMAR SINGH</h3>
        <br />
        <p>WEB DEVELOPER - front end</p>
        <br />
        <p>Check out my amazing work and learn more about me!</p>
        <br />
        <h4>Skills:</h4>
        <ul>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
        </ul>
        <h4>Interests</h4>
        <ul>
          <li>Web Development</li>
          <li>Entrepreneurship</li>
          <li>Software Development</li>
        </ul>
        <h4>Hobbies</h4>
        <ul>
          <li>Coding</li>
          <li>Gymnasium</li>
          <li>Reading biography</li>
          <li>E Sports</li>
        </ul>
        <h5>Age: 20 years</h5>
        <h4>ABOUT:</h4>
        <p>
          I'm a passionate web developer with a love for coding and creativity. With several years of experience, I've worked on a variety of projects, ranging from simple websites to complex web applications.
        </p>
        <p>Feel free to explore my profile and get in touch if you're interested in collaborating or learning more about my work.</p>
        <h4>Contact:</h4>
        <a href="mailto:calledasprateek@gmail.com">calledasprateek@gmail.com</a>
        <h4>
          <a href="tel:7000829346">7000829346</a>
        </h4>
        </div>
        </div>
    </div>
  );
}
