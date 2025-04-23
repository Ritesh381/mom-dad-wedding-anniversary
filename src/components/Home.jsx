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
          className="max-w-[600px] h-[300px] w-full mx-auto my-4 block border shadow-md rounded-lg"
          src="https://www.youtube.com/embed/S9NFCNDtjDU"
          frame_border="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="max-w-[600px] h-[300px] w-full mx-auto my-4 block border shadow-md rounded-lg"
          src="https://www.youtube.com/embed/CoEGYErLSyQ"
          frame_border="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

      </div>
      {/* <AnniversaryTimeline imagesData={ }/> */}
    </div>
  );
}

export default Home;
