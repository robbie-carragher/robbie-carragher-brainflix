import "./VideoList.scss";

import { Link, useParams } from "react-router-dom";

export default function VideoList({ videosData }) {
  const { videoId } = useParams();
  const arrVideosData = Array.isArray(videosData) ? videosData : [];

  // Determine the video ID to compare against. If none is in the URL, use the first video's ID.
  const currentVideoId =
    videoId || (arrVideosData.length > 0 ? arrVideosData[0].id : null);

  return (
    <div className="list-section">
      <ul className="list">
        <label className="list__label">NEXT VIDEOS</label>
        {arrVideosData
          .filter((videoData) => videoData.id !== currentVideoId)
          .map((videoData) => (
            <li key={videoData.id} className="list__item">
              <Link to={`/video/${videoData.id}`}>
                <img
                  src={videoData.image}
                  alt={videoData.title}
                  className="list__item-image"
                />
                <div className="list__details">
                  <h3 className="list__title">{videoData.title}</h3>
                  <p className="list__channel">{videoData.channel}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
