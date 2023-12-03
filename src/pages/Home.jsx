import { useState } from "react";
import VideoList from "./../components/VideoList/VideoList";
import VideoDetails from "./../components/VideoDetails/VideoDetails";
import videosData from "./../data/video-details.json";

import VideoComponent from "./../components/Video /Video";
import Comments from "./../components/Comments/Comments";

export default function Home() {
  const [selectedVideoData, setSelectedVideoData] = useState(videosData[0]);

  return (
    <>
    
      <VideoComponent selectedVideoData={selectedVideoData} />

      <section className="app-wrap">
        <div className="app-wrap__border-right">
          {selectedVideoData ? (
            <VideoDetails videoData={selectedVideoData} />
          ) : (
            "No video Selected"
          )}

          <Comments videoData={selectedVideoData} />
        </div>

        <div>
          <VideoList
            videosData={videosData}
            setSelectedVideoData={setSelectedVideoData}
            selectedVideoData={selectedVideoData}
          />
        </div>
      </section>
    </>
  );
}
