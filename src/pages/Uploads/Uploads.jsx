import "./Uploads.scss";
import "./../../styles/partials/_global.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Uploads() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Upload successful!");

    navigate("/");
  };

  return (
    <section className="uploads">
      <div className="uploads__title-wrap">
        <h1 className="uploads__title">Upload Video</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="uploads__links uploads__links--right">
          <div className="uploads__thumbnail-wrap">
            <h2 className="uploads__sub-title">VIDEO THUMBNAIL</h2>
            <img
              src="/src/assets/images/Upload-video-preview.jpg"
              alt="Thumbnail"
              className="uploads__thumbnail"
            />
          </div>

          <div className="uploads__search-container">
            <h2 className="uploads__sub-title">TITLE YOUR VIDEO</h2>
            <input
              id="uploads-box"
              type="text"
              name="name"
              placeholder="Add a title to your video"
              required
            />
            <h2 className="uploads__sub-title">ADD A VIDEO DESCRIPTION</h2>
            <textarea
              id="uploads-box"
              name="comment"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>

        <div className="uploads__btn-wrap">
          <button type="submit" className="uploads__publish-btn">
            <img
              src="/src/assets/images/Icons/publish.svg"
              alt="Upload Icon"
              className="uploads__upload-icon"
            />
            <span className="uploads__btn-text">PUBLISH</span>
          </button>
          <Link to="/" className="uploads__cancel-link">
            <span className="uploads__cancel-text">CANCEL</span>
          </Link>
        </div>
      </form>
    </section>
  );
}
