import React, { useRef, useEffect } from "react";

function MediaPlayer({ stream, remote }) {
  // creating a ref for the stream
  const videoRef = useRef();

  // a use effect to set the stream 
  useEffect(() => {
    if (stream && videoRef.current){
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // if the stream is remote i.e coming from someone else
  if (remote) {
    return (
      <div className="stream">
        <p>remote</p>
        <video className="feed" ref={videoRef} autoPlay playsInline />
      </div>
    );
  }

  
  // if the stream is local i.e our own
  return (
    <div className="stream">
      <p>user</p>
      <video className="feed" ref={videoRef} autoPlay muted playsInline />
    </div>
  );
}

export default MediaPlayer;
