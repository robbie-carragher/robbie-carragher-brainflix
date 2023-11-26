import "./VideoDetails.scss";

export default function VideoDetails({ videoData }) {
  const { title, description, channel, timestamp } = videoData;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
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
</div>

      <p className="details__description">{description}</p>
    </section>
  );
}
