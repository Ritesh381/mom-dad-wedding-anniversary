import React from "react";
import Banner from "./Banner";
import AnniversaryAnimation from "./AnniversaryAnimation";
import AnniversaryTimeline from "./AnniversaryTimeline";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <AnniversaryAnimation />
      <div className="flex-col justify-center items-center">
        <iframe
          className="max-w-[530px] h-[300px] w-full mx-auto my-4 block border shadow-md rounded-lg"
          src="https://www.youtube.com/embed/N9kcPotqlYw"
          frame_border="0"
          allow="accelerometer"
          allowFullScreen
        />
        <iframe
          className="max-w-[530px] h-[300px] w-full mx-auto my-4 block border shadow-md rounded-lg"
          src="https://www.youtube.com/embed/AJ608ohCETQ"
          frame_border="0"
          allow="accelerometer"
          allowFullScreen
        />

      </div>
      {/* <AnniversaryTimeline imagesData={ }/> */}
    </div>
  );
}

export default Home;
