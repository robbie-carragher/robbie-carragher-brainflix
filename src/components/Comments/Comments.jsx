import "./Comments.scss";

export default function Comments({ videoData }) {
  const { title, comments } = videoData;

  return (
    <section className="comments-section">
      <h3>3 Comments</h3>

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
                <label htmlFor="commentArea">COMMENT</label>
              </div>
              <div className="comments__text">
                <textarea
                  id="commentArea"
                  className="comments__commentArea"
                  name="comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <div className="comments-submit-wrap">
                <button type="submit" className="comments__submit-btn">
                  <p className="comments__innerText">JOIN THE CONVERSATION</p>
                  {/* COMMENT */}
                </button>
              </div>
            </div>
          </div>

          <ul id="error-messages">
            {/* Error messages will be inserted here */}
          </ul>
        </form>

        <ul className="comment-area">{/* Comments will be inserted here */}</ul>
      </section>

      {/* Rest of your code */}

      {comments.length > 0 ? (
        <div className="comments-area">
          <ul className="comments-area__list">
            {comments.map((comment) => {
              return (
                <li key={comment.id} className="comments-area__item">
                  <div className="comments-area__avatar-preview"></div>

                  <div className="comments-area__comments-wrap">
                    <div className="comments-area__data-wrap">
                      <h3 className="comment-area__title"> {comment.name}</h3>
                      <p className="comment-area__data">{comment.timestamp}</p>
                    </div>

                    <div className="comment-area__comments">
                      {" "}
                      {comment.comment}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        "NO VIDEO DETAILS AVAIL"
      )}
    </section>
  );
}
