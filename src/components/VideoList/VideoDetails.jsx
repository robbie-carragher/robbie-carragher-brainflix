export default function VideoDetails({ videoData }) {
    const { title, image, description } = videoData;
  
    return (
      <div className="video-gallery">
        <h1>{title}</h1>
        <img src={image} alt="video" className="video-gallery__image" />
        <div>{description}</div>
      </div>
    );
  }