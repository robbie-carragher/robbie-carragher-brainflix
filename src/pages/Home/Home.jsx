import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoList from "./../../components/VideoList/VideoList";
import VideoDetails from "./../../components/VideoDetails/VideoDetails";
import VideoComponent from "./../../components/Video/Video";
import Comments from "./../../components/Comments/Comments";

export default function Home() {
  const [videosData, setVideosData] = useState([]);
  const [selectedVideoData, setSelectedVideoData] = useState(null);
  const { videoId } = useParams();

  const apiURL = "http://localhost:8080";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiURL}/videos`);
        setVideosData(response.data);

        const selectedId = videoId || response.data[0].id;

        const videoResponse = await axios.get(`${apiURL}/videos/${selectedId}`);
        setSelectedVideoData(videoResponse.data);
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
        <VideoList
          videosData={videosData}
          setSelectedVideoData={setSelectedVideoData}
        />
      </section>
    </>
  );
}
