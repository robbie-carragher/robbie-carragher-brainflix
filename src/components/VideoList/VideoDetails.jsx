import "./VideoDetails.scss";

export default function VideoDetails({ videoData }) {
  const { title, description, channel, timestamp } = videoData;

  // Convert timestamp to date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <section className="details">
      <h1>{title}</h1>
      {/* <p className="details__description">{description}</p> */}

      <div className="details__inner-wrapper">
        <div className="details__left">
          <h2 className="details__title">By {channel}</h2>
          <p className="details__data"> {formatDate(timestamp)}</p>
        </div>

        <div className="details__right">
          <div className="details__inner-data-wrap">
            <img
              src="./../../../src/assets/images/Icons/views.svg"
              alt="veiw icon"
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

      <p className="details__description">{description}</p>
    </section>
  );
}
