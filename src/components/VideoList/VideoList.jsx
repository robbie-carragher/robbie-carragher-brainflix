 // Setter Function
 import "./VideoList.scss";
 function VideoList({videosData,setSelectedVideoData}) {
    return (
      <ul className="list">
      {videosData.map((videoData) => {
        console.log(videoData);
        return (
          <li key={videoData.id} className="list__item">
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

    export default VideoList;