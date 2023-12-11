import { useState, useEffect } from "react";
import axios from "axios";
import "./Video.scss";

export default function VideoComponent({ videosData, selectedVideoData }) {
  const videoToShow = selectedVideoData || (videosData && videosData[0]);

  const [likes, setLikes] = useState(videoToShow ? videoToShow.likes : "0");

  const handleLike = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/videos/${videoToShow.id}/likes`
      );
      if (response.status === 200) {
        setLikes(response.data.likes);
      } else {
        console.error("Failed to update like");
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  useEffect(() => {
    if (videoToShow) {
      setLikes(videoToShow.likes);
    }
  }, [videoToShow]);

  if (!videoToShow) {
    return <div>Video is Loading...</div>;
  }

  return (
    <section className="video-section">
      <div className="video-section_wrap">
        <video
          className="video-section__fullwidth"
          controls
          poster={videoToShow.image}
        ></video>
        <div>
          <button onClick={handleLike} className="video-section__likes-btn">
            Like
          </button>
          <span className="video-section__likes">Likes: {likes}</span>
        </div>
      </div>
    </section>
  );
}
