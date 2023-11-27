import "./Comments.scss";

export default function Comments({ videoData }) {
  const { title, comments } = videoData;

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
    <section className="comments-section">
      <h3>{comments.length} Comments</h3>

      <section>
        <form id="commentForm" className="comments">
          {/* ... form content ... */}
        </form>

        {comments.length > 0 ? (
          <div className="comments-area">
            <ul className="comments-area__list">
              {comments.map((comment) => (
                <li key={comment.id} className="comments-area__item">
                  <div className="comments-area__avatar-preview"></div>

                  <div className="comments-area__comments-wrap">
                    <div className="comments-area__data-wrap">
                      <h3 className="comments-area__title"> {comment.name}</h3>
                      <p className="comments-area__data">
                        {formatDate(comment.timestamp)}
                      </p>
                    </div>

                    <div className="comments-area__comments">
                      {comment.comment}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          "NO VIDEO DETAILS AVAIL"
        )}
      </section>
    </section>
  );
}
