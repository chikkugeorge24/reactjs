import React from "react";
import ReactPlayer from "react-player";

const ReactVideoPlayerDemo = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
        // height="500px"
        // width="240px"
        controls
        onReady={() => console.log("on ready")}
        onStart={() => console.log("on start")}
        onEnded={() => console.log("on ended")}
        onPause={() => console.log("on pause")}
        onError={() => console.log("on error")}
      />
    </div>
  );
};

export default ReactVideoPlayerDemo;
