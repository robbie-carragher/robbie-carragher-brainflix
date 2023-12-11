import "./Video.scss";

export default function VideoComponent({ videosData, selectedVideoData }) {
  // Select the first video as default if no video is currently selected
  const videoToShow = selectedVideoData || (videosData && videosData[0]);

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
</div>
    </section>
  );
}
