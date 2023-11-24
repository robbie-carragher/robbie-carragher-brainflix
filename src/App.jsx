import videosData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoComponent from "./components/Video /Video";

import "./App.scss";

function App() {
  return (
    <>
      <Header logo='new logo'/>
      <VideoComponent />

      <ul>
        {videosData.map((videoData) => {
          console.log(videoData);
          return <li key={videoData.id}>{videoData.title}</li>;
        })}
      </ul>

    </>
  );
}

export default App;





// import videosData from "./data/video-details.json";
// import Header from "./components/Header/Header";
// // import VideoComponent from "./components/Video /Video";

// import "./App.scss";

// function App() {
//   console.log(videosData);
//   return (
//     <>
//       <Header logo="new logo" />
//       {/* <VideoComponent /> */}

//       <ul>
//         {videosData.map((videoData) => {
//           console.log(videoData);
//           return <li key={videoData.id}>{videoData.title}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;