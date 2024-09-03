import React from "react";
import newsImage from "./assets/logo-fb.png";
import Extras from "./Extras";
import Carousel from "./Carousel";

function Landing({ location, news }) {

  const results = news && news.results; 

  const images = results && results.length > 0
  ? results.map((item) => item.image_url) 
  : [newsImage];

  const titles = results && results.length > 0
  ? results.map((item) => item.title)
  : ["Title"];

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

        <Carousel images={images} titles = {titles}/>
      </div>
      <Extras news={news} />
    </div>
  );
}

export default Landing;
