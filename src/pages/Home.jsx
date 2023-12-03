// import { useState } from "react";
// import VideoList from "./../components/VideoList/VideoList";
// import VideoDetails from "./../components/VideoDetails/VideoDetails";
// import videosData from "./../data/video-details.json";

// import VideoComponent from "./../components/Video /Video";
// import Comments from "./../components/Comments/Comments";

// export default function Home() {
//   const [selectedVideoData, setSelectedVideoData] = useState(videosData[0]);

//   return (
//     <>
    
//       <VideoComponent selectedVideoData={selectedVideoData} />

//       <section className="app-wrap">
//         <div className="app-wrap__border-right">
//           {selectedVideoData ? (
//             <VideoDetails videoData={selectedVideoData} />
//           ) : (
//             "No video Selected"
//           )}

//           <Comments videoData={selectedVideoData} />
//         </div>

//         <div>
//           <VideoList
//             videosData={videosData}
//             setSelectedVideoData={setSelectedVideoData}
//             selectedVideoData={selectedVideoData}
//           />
//         </div>
//       </section>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoList from "./../components/VideoList/VideoList";
import VideoDetails from "./../components/VideoDetails/VideoDetails";
import VideoComponent from "./../components/Video /Video";
import Comments from "./../components/Comments/Comments";

export default function Home() {
  const [videosData, setVideosData] = useState([]);
  const [selectedVideoData, setSelectedVideoData] = useState(null);
  const { videoId } = useParams();
  const apiURL = "https://project-2-api.herokuapp.com";
  const apiKey = "?api_key=3f2f6077-7e5f-4d3b-b8ee-d11af5b5af96";


useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get(`${apiURL}/videos${apiKey}`);
      setVideosData(response.data);
       
      console.log(response.data)

      if (videoId) {
        const videoResponse = await axios.get(`${apiURL}/videos/${videoId}${apiKey}`);
        setSelectedVideoData(videoResponse.data);
      } else {
      
        const videoResponse = await axios.get(`${apiURL}/videos/${response.data[0].id}${apiKey}`);
        setSelectedVideoData(videoResponse.data);
      }
      // console.log(selectedVideoData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, [videoId]);



return (
  <>
    <VideoComponent selectedVideoData={selectedVideoData} />
    <section className="app-wrap">
      <div className="app-wrap__border-right">
        {selectedVideoData && <VideoDetails videoData={selectedVideoData} />}
        
        {selectedVideoData && <Comments videoData={selectedVideoData} />}
      </div>
      <VideoList videosData={videosData} setSelectedVideoData={setSelectedVideoData} />
    </section>
  </>
);
}