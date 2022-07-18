import { React } from "react";
import ProfileImage from "../assets/profile.jpg";

function Info() {
  return (
    <div className="info">
      <img src={ProfileImage} className="info-img" />
      <h4 className="info-name">Parth Marfatia</h4>
      <p className="info-designation">Frontend Developer</p>
      <a href="https://www.parthmarfatia.com" className="info-website">
        parthmarfatia.com
      </a>
      <div className="info-icons">
        <button className="info-mail">
          <i className="fa-solid fa-envelope info-icon-content"></i>Email
        </button>
        <button className="info-linkedin">
          <i className="fa-brands fa-linkedin info-icon-content"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
