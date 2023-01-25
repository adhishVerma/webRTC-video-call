import React, { createContext } from "react";
import { useContext } from "react";

export const MediaStreamContext = createContext(null);

export const useMedia = () => {return useContext(MediaStreamContext)}

export const MediaStreamProvider = (props) => {
  const [remoteStream, setRemoteStream] = React.useState(null)
  const [localStream, setLocalStream] = React.useState(null);

  return (
    <MediaStreamContext.Provider value={{remoteStream,setRemoteStream, localStream, setLocalStream}}>
      {props.children}
    </MediaStreamContext.Provider>
  )
}