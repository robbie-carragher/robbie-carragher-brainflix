import "./Comments.scss";
import FormatDate from "../../utils";

export default function Comments({ videoData }) {
  // Check if videoData is available and has the comments property
  if (!videoData || !videoData.comments) {
    return <div>Loading comments or no comments available...</div>;
  }

  const { comments, timestamp } = videoData;

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
              <div className="comments__input--flex">
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
          </div>

          <ul id="error-messages"></ul>
        </form>
      </section>

      <div className="comments-area">
        {comments.length > 0 ? (
          <ul className="comments-area__list">
            {comments.map((comment) => (
              <li key={comment.id} className="comments-area__item">
                <div className="comments-area__avatar-preview"></div>
                <div className="comments-area__comments-wrap">
                  <div className="comments-area__data-wrap">
                    <h3 className="comments-area__title">{comment.name}</h3>
                    <p className="comments-area__data">
                      {FormatDate(timestamp)}
                    </p>
                  </div>
                  <div className="comments-area__comments">
                    {comment.comment}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </section>
  );
}
