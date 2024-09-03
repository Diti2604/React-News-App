import React from "react";
import newsImage from "./assets/logo-fb.png";

function News({news}) {
  return (
    <div>
      <div className="landing-container">
        <h1 className="landing-header">Selected News</h1>
        <img src={newsImage} alt="" className="landing-img" />
        <div className="para-container">
        <h2 className="landing-header">Selected News</h2>
          <p className="news-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, voluptatem esse rem quidem quibusdam ipsa, alias
            architecto, eligendi adipisci neque ut quam accusamus libero porro
            quaerat. Quas dolorum totam esse consequuntur commodi earum, modi
            quia facere dolores animi reiciendis iste obcaecati temporibus
            tenetur, sapiente facilis vitae accusantium error. Totam culpa eius
            ullam reiciendis ut fugiat esse nisi eos sint, eligendi officiis
            asperiores velit consequatur accusantium debitis quos doloribus.
            Atque quae labore, fugit possimus unde aspernatur! Unde maxime
            incidunt voluptatum quasi ad, delectus praesentium perspiciatis
            itaque repudiandae vel blanditiis sint nobis, consequuntur similique
            amet magnam quas modi totam veritatis veniam eaque nam commodi
            voluptate! Asperiores modi, eius voluptate laborum quaerat ipsum
            itaque minima pariatur corporis omnis 
            doloremque at molestias qui
            quam provident natus debitis cupiditate ab doloribus blanditiis
            veniam ex odio libero quod? Rerum iure corrupti adipisci, ullam, nam
            eum quasi nostrum hic fuga aperiam cum tenetur repellat iste est
            ducimus earum facere odio repellendus atque id animi? Voluptate
            blanditiis, quasi animi accusamus sed quod sunt? Saepe laborum eaque
            magni dicta illum, impedit consectetur natus sed fugiat maxime quia
            neque enim dolores commodi obcaecati labore accusamus quo earum,
            dignissimos nihil dolor porro! Voluptate ullam ipsum quis
            reprehenderit architecto sequi molestiae et?
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default News;
