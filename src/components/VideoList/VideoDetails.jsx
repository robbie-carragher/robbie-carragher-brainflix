// import "./VideoDetails.scss";
import "./VideoDetails.scss";

export default function VideoDetails({ videoData }) {
  const { title, description, channel, timestamp } = videoData;

  const formatDate = (timestamp) => {
    const now = new Date();
    const postedDate = new Date(timestamp);
    const timeDifference = now - postedDate;

    const seconds = timeDifference / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    
    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`;
    } else if (minutes < 60) {
      return `${Math.floor(minutes)} minutes ago`;
    } else if (hours < 24) {
      return `${Math.floor(hours)} hours ago`;
    } else {
      return `${Math.floor(days)} days ago`;
    }
  };

  return (
    <section className="details">
      <div className="details__title">
        <h1>{title}</h1>
      </div>

      <div className="details__outer-wrapper">
        <div className="details__inner-wrapper">
          <div className="details__left">
            <h3 className="details__title-inner">By {channel}</h3>
            <p className="details__data-time"> {formatDate(timestamp)}</p>
          </div>
          <div className="details__right">
            <div className="details__inner-data-wrap details__inner-data-wrap--move">
              <img
                src="./../../../src/assets/images/Icons/views.svg"
                alt="View icon"
              />
              <p className="details__data"> {videoData.views}</p>
            </div>
            <div className="details__inner-data-wrap">
              <img
                src="./../../../src/assets/images/Icons/likes.svg"
                alt="Likes icon"
              />
              <p className="details__data"> {videoData.likes}</p>
            </div>
          </div>
        </div>
      </div>

      <p className="details__description">{description}</p>
    </section>
  );
}
