import React from "react";
import "./gallery.css";
import image1 from "../../Images/group/image1.jpg";
import image2 from "../../Images/group/image2.jpg";
import image3 from "../../Images/group/image3.jpg";
import image4 from "../../Images/group/image4.jpg";
// import image5 from "../../Images/group/image5.jpg";
import image6 from "../../Images/group/image6.jpg";
import image7 from "../../Images/group/image7.jpg";

const Gallery = () => {
  return (
    <section>
      <div className="Gallery_Container center-div">
        <div className="mob-block order-image">
          <img src={image1} alt="" />
        </div>
        <div className="v-block mobv-block">
          <img src={image6} alt="" />
        </div>

        <div className="mob-block">
          <img src={image2} alt="" />
        </div>
        <div className="v-small-block">
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>

        <div>
          <img src={image7} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
