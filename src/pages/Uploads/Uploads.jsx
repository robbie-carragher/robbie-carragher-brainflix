import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Uploads.scss";

export default function Uploads() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/videos", {
        title: title,
        channel: "Channel",
        description: description,
      });
      console.log(title);
      console.log(description);
      alert("Upload successful!");
      navigate("/");
    } catch (error) {
      console.error("Error posting new video:", error);
      alert("Error uploading video");
    }
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
              name="title"
              placeholder="Add a title to your video"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h2 className="uploads__sub-title">ADD A VIDEO DESCRIPTION</h2>
            <textarea
              id="uploads-box"
              className="uploads__box--height"
              name="description"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="uploads__btn-wrap">
          <button type="submit" className="uploads__publish-btn">
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
