import React from "react";

function About({image = "https://via.placeholder.com/215", about, logo}) {
  return (
    <div className="about">
    <aside>
    <img src={image} alt="blog logo"/> 
    <p>{about}</p>
    </aside>
    </div>
  );
}

export default About;
