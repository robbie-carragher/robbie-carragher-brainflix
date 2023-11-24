 
 import "./VideoList.scss";


 // Setter Function
 export default function VideoList({videosData,setSelectedVideoData, selectedVideoData}) {
  console.log("Video List is being rendered")
    return (
      <ul className="list">
      {videosData.map((videoData) => {
       if (selectedVideoData) {
        // console.log(`is ${videoData.title} the same as ${selectedVideoData.title} ? ${videoData === selectedVideoData}`)
       }
        console.log(videoData);
        return (
          <li key={videoData.id} className={`list__item ${videoData === selectedVideoData ? "active" : ""}`}>
            <a className="list__link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
    
                setSelectedVideoData(videoData);
              }}
            >
              {videoData.title}
            <div>  <img src={videoData.image} alt="video" className="list__item-image" /></div>
           {/* <div>   {videoData.title}</div> */}
            </a>
          </li>
        );
      })}
    </ul>
    )
    }

    // export default VideoList;