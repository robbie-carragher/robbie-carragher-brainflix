import "./Video.scss";

// import posterImage from "./../../assets/images/poster.png";

function VideoComponent({selectedVideoData}) {
  console.log("this is selected data" , selectedVideoData)
  return (
    <div>
   <video className="full-width-video" controls poster={selectedVideoData.image}></video>
    </div>
  );
}

export default VideoComponent;


// import React from 'react';
// import "./Video.scss";

// const VideoComponent = ({ videoData }) => {
//   // Assuming videoData is an array and we're using the first video for demonstration
//   const firstVideo = videoData[0];

//   return (
//     <div>
//       <video className="full-width-video" controls>
//         <source src={firstVideo.video} type="video/mp4" />
//       </video>
//       <h1>{firstVideo.title}</h1>
//       <p>{firstVideo.description}</p>
//       {/* Render other details as needed */}
//     </div>
//   );
// };

// export default VideoComponent;