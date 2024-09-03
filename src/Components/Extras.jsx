import React from 'react';
import newsImage from "./assets/logo-fb.png";

function Extras({ news }) {
  return (
    <div>
      <div className="landing-extras_container">
        {news && news.results && news.results.slice(1, 7).map((item, index) => (
          <div key={index} className="landing-container_extra">
            <img src={item.image_url || newsImage} alt="" className="landing-img_extra" />
            <h2 className="landing-title_extra">{item.title || "Important news come here"}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extras;
