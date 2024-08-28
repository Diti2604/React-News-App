import React from "react";
import newsImage from "./assets/logo-fb.png";
import Extras from "./Extras";

function Landing({ location }) {
  return (
    <div>
      <div className="landing-container">
        <div className="landing-header-container">
          <h1 className="landing-header">
            News - Top news of {location ? location.country_name : "Albania"}
          </h1>
          {location && (
            <img
              src={location.country_flag}
              alt={`${location.country_name} flag`}
              className="country-img"
            />
          )}
        </div>
        <img src={newsImage} alt="" className="landing-img" />
        <h2 className="landing-title">Important news come here</h2>
      </div>{" "}
      <Extras />
    </div>
  );
}

export default Landing;
