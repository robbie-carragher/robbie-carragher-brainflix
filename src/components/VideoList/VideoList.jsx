import "./VideoList.scss";
// import { Link } from "react-router-dom";
// Setter Function
// export default function VideoList({
//   videosData,
//   setSelectedVideoData,
//   selectedVideoData,
// }) {
//   return (
    
// <div className="list-section">
// <ul className="list">
//        <label className="list__label">NEXT VIDEOS</label>
//       {videosData
//         .filter((videoData) => {
//           return videoData.id !== selectedVideoData.id;
//         })
//         .map((videoData) => {
//           return (
//             <li
//               key={videoData.id}
//               className={`list__item ${
//                 videoData === selectedVideoData ? "active" : ""
//               }`}
//             >
//               <a
//                 className="list__link"
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();

//                   setSelectedVideoData(videoData);
//                 }}
//               >
//                 <img
//                   src={videoData.image}
//                   alt="video"
//                   className="list__item-image"
//                 />
//                 <div className="list__details">
//                   <h3 className="list__title"> {videoData.title}</h3>
//                   <p className="list__channel"> {videoData.channel}</p>
//                 </div>
//               </a>
//             </li>
//           );
//         })}
//     </ul>
// </div>
//   );
// }



// export default function VideoList({ videosData, selectedVideoData }) {
//   const arrVideosData = Array.isArray(videosData) ? videosData : [];

//   return (
//     <div className="list-section">
//       <ul className="list">
//         <label className="list__label">NEXT VIDEOS</label>
//         {arrVideosData
//           .filter(videoData => !selectedVideoData || videoData.id !== selectedVideoData.id)
//           .map(videoData => (
//             <li key={videoData.id} className="list__item">
//               <Link to={`/video/${videoData.id}`}>
//                 <img src={videoData.image} alt={videoData.title} className="list__item-image" />
//                 <div className="list__details">
//                   <h3 className="list__title">{videoData.title}</h3>
//                   <p className="list__channel">{videoData.channel}</p>
//                 </div>
//               </Link>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

import { Link, useParams } from 'react-router-dom';

export default function VideoList({ videosData }) {
  const { videoId } = useParams(); // Assuming the URL param is named 'videoId'
  const arrVideosData = Array.isArray(videosData) ? videosData : [];

  return (
    <div className="list-section">
      <ul className="list">
        <label className="list__label">NEXT VIDEOS</label>
        {arrVideosData
          .filter(videoData => videoData.id !== videoId)
          .map(videoData => (
            <li key={videoData.id} className="list__item">
              <Link to={`/video/${videoData.id}`}>
                <img src={videoData.image} alt={videoData.title} className="list__item-image" />
                <div className="list__details">
                  <h3 className="list__title">{videoData.title}</h3>
                  <p className="list__channel">{videoData.channel}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}