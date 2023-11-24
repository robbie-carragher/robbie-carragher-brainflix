export default function VideoDetails({ videoData }) {
  const { title, image, description, comments } = videoData;

  return (
    <div className="video-gallery">
      <h1>{title}</h1>
      <img src={image} alt="video" className="video-gallery__image" />
      <div>{description}</div>
      <h2>More info</h2>

      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                {/* {comment.comment ? "🧪" : "💧"} */}
                {comment.comment}
               <div> {comment.timestamp}</div>
              </li>
            );
          })}
        </ul>
      ) : (
        "NO VIDEO DETAILS AVAIL"
      )}
    </div>
  );
}

// export default function VideoDetails({ videoData }) {
//     const { title, image, description, comments } = videoData;
  
//     // Check if comments is an array and has elements
//     const hasComments = Array.isArray(comments) && comments.length > 0;
  
//     return (
//       <div className="video-gallery">
//         <h1>{title}</h1>
//         <img src={image} alt="video" className="video-gallery__image" />
//         <div>{description}</div>
//         <h2>More info</h2>
  
//         {hasComments ? (
//           <ul>
//             {comments.map((comment) => (
//               <li key={comment.id}>
//                 {comment.name ? "🧪" : "💧"}
//                 {/* {comment.timestamp} */}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div>NO VIDEO DETAILS AVAIL</div> // Encapsulate the message in a div for better styling and control
//         )}
//       </div>
//     );
//   }
  