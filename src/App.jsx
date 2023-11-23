

// import React from 'react';
import Header from "./components/Header/Header";
import VideoComponent from "./components/Video /Video";

import videoData from './data/video-details.json';


import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <VideoComponent videoData={videoData} />
    </>
  );
}

export default App;