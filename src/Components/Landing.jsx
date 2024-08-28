import React from "react";
import newsImage from "./assets/logo-fb.png";

function Landing() {
  return (
    <div>
      <div className="landing-container">
        <h1 className="landing-header">News - Top news of Albania</h1>
        <img src={newsImage} alt="" className="landing-img" />
        <h2 className="landing-title">Important news come here</h2>
      </div>{" "}
      <div className="landing-extras_container">
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
        <div className="landing-container_extra">
          <img src={newsImage} alt="" className="landing-img_extra" />
          <h2 className="landing-title_extra">Important news come here</h2>
        </div>{" "}
      </div>
    </div>
  );
}

export default Landing;
