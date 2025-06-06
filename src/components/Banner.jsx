import React from "react";
import bannerImg from '../Images/Banner-image.png';

function Banner() {
  return (
    <div className="relative flex justify-center w-full overflow-hidden">
      {/* Blurred background version of the image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bannerImg}
          alt=""
          className="w-full h-full object-cover filter blur-lg scale-110 opacity-50"
        />
      </div>
      
      {/* Main banner image */}
      <div className="relative z-10 m-3">
        <img 
          src={bannerImg}
          alt="banner image"
          className="max-w-full h-auto shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
}

export default Banner;