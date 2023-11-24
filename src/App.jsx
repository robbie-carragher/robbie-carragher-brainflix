import { useState } from "react";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./components/VideoList/VideoDetails";
import videosData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoComponent from "./components/Video /Video";

import "./App.scss";

function App() {
  const [selectedVideoData, setSelectedVideoData] = useState(null);
  console.log(selectedVideoData);

  return (
    <>
      <Header logo="new logo" />
      <VideoComponent />

      <div className="app-wrap">
        <VideoList
          videosData={videosData}
          setSelectedVideoData={setSelectedVideoData}
        />

        <section>
          {selectedVideoData ? (
            <VideoDetails videoData={selectedVideoData} />
          ) : (
            "No video Selected"
          )}
        </section>
      </div>
    </>
  );
}

// function VideoDetails({ videoData }) {
//   const { title, image, description } = videoData;

//   return (
//     <div className="video-gallery">
//       <h1>{title}</h1>
//       <img src={image} alt="video" className="video-gallery__image" />
//       <div>{description}</div>
//     </div>
//   );
// }

export default App;
