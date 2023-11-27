import "./Video.scss";

export default function VideoComponent({ selectedVideoData }) {
  return (
    <section className="video-section">
      <video
        className="full-width-video"
        controls
        poster={selectedVideoData.image}
      ></video>
    </section>
  );
}


