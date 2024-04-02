import React from "react";
import Webcam from "react-webcam";
function Capture() {

  return (
    <>
      <div className="capture">
        <Webcam  mirrored={true}/>
      </div>
    </>
  );
}

export default Capture;
