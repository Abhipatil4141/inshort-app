import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/abhijeet-patil4141/" target="__blank">
          Abhijeet P. Patil
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://instagram.com/its_abhi_patil_4141_?igshid=OGQ5ZDc2ODk2ZA==" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhijeet-patil4141/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://x.com/AbhiPatil4141?t=z_mQUUwJG9LaFpklxdVKxA&s=09" target="__blank">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;