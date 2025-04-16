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
          className="border rounded-3xl m-3 size-60 w-[90%]"
          src="https://www.youtube.com/embed/S9NFCNDtjDU"
          frame_border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="border rounded-3xl m-3 size-60 w-[90%]"
          src="https://www.youtube.com/embed/S9NFCNDtjDU"
          frame_border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />  
      </div>
      {/* <AnniversaryTimeline imagesData={ }/> */}
    </div>
  );
}

export default Home;
