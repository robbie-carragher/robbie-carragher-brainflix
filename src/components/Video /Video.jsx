import "./Video.scss";

import posterImage from "./../../assets/images/poster.png";

function VideoComponent() {
  return (
    <div>
   <video className="full-width-video" controls poster={posterImage}></video>
    </div>
  );
}

export default VideoComponent;
