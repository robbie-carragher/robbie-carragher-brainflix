
import "./Comments.scss";

export default function Comments({ videoData }) {
  const { title, comments } = videoData;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <section className="comments-section">
      <h3>{comments.length} Comments</h3>

      <section>
        <form id="commentForm" className="comments">
          <div className="comments__wrap">
            <div className="comments__avatar-wrap">
              <img
                id="comments__avatar-preview"
                className="comments__avatar-preview"
                src="./../../../src/assets/images/Mohan-muruge.jpg"
                alt="Avatar preview"
              />
            </div>

            <div className="comments__input-wrap">
              <div className="comments__label comments__label--move">
                <label htmlFor="commentArea">JOIN THE CONVERSATION</label>
              </div>
              <div className="comments__text">
                <textarea
                  id="commentArea"
                  className="comments__commentArea"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <div className="comments__submit-wrap">
                <button type="submit" className="comments__submit-btn">
                  <p className="comments__innerText">COMMENT</p>
                </button>
              </div>
            </div>
          </div>

          <ul id="error-messages"></ul>
        </form>

        {/* <ul className="comment-area"></ul> */}
      </section>

      {comments.length > 0 ? (
        <div className="comments-area">
          <ul className="comments-area__list">
            {comments.map((comment) => (
              <li key={comment.id} className="comments-area__item">
                <div className="comments-area__avatar-preview"></div>

                <div className="comments-area__comments-wrap">
                  <div className="comments-area__data-wrap">
                    <h3 className="comments-area__title"> {comment.name}</h3>
                    <p className="comments-area__data">{formatDate(comment.timestamp)}</p>
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
  );
}
