import { useState } from "react";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./components/VideoList/VideoDetails";
import videosData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoComponent from "./components/Video /Video";
import Comments from "./components/Comments/Comments";

import "./App.scss";

export default function App() {
  const [selectedVideoData, setSelectedVideoData] = useState(videosData[0]);
  console.log(selectedVideoData?.title);

  return (
    <>
      <Header logo="new logo" />
      <VideoComponent selectedVideoData={selectedVideoData} />

      <section className="app-wrap">
        <div>
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

// export default App;
