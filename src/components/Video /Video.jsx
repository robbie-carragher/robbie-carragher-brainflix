import "./Video.scss";

export default function VideoComponent({ videosData, selectedVideoData }) {
  // Select the first video as default if no video is currently selected
  const videoToShow = selectedVideoData || (videosData && videosData[0]);

  if (!videoToShow) {
    return <div></div>;
  }

  return (
    <section className="video-section">
      <video
        className="full-width-video"
        controls
        poster={videoToShow.image}
      ></video>
    </section>
  );
}
