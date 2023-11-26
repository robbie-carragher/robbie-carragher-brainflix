import "./VideoList.scss";

// Setter Function
export default function VideoList({
  videosData,
  setSelectedVideoData,
  selectedVideoData,
}) {
  // console.log("Video List is being rendered");
  return (
    
    <ul className="list">
       <label className="list__label">NEXT VIDEOS</label>
      {videosData
        .filter((videoData) => {
          return videoData.id !== selectedVideoData.id;
        })
        .map((videoData) => {
          // console.log(videoData);
          return (
            <li
              key={videoData.id}
              className={`list__item ${
                videoData === selectedVideoData ? "active" : ""
              }`}
            >
              <a
                className="list__link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();

                  setSelectedVideoData(videoData);
                }}
              >
                <img
                  src={videoData.image}
                  alt="video"
                  className="list__item-image"
                />
                <div className="list__details">
                  <h3 className="list__title"> {videoData.title}</h3>
                  <p className="list__channel"> {videoData.channel}</p>
                </div>
              </a>
            </li>
          );
        })}
    </ul>
  );
}
