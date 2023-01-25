import React, { useContext } from "react";
import { useEffect } from "react";
// import { v4 as uuidv4 } from 'uuid';
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


const Home = () => {
  const { socket, setRoomId, roomId } = useContext(SocketContext);
  const [emailId, setEmailId] = React.useState("");
  const navigate = useNavigate();

  const handleRoomJoined = useCallback(({ roomId }) => {
    navigate(`/room/${roomId}`);
  },[navigate]);

  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
  }, [socket, handleRoomJoined]);

  const handleJoinRoom = (e) => {
    e.preventDefault();
    // const room = uuidv4();
    socket.emit("join-room", { emailId, roomId });
    // setRoomId(roomId)
  };

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          type="email"
          placeholder="email"
          value={emailId}
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="room"
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        ></input>

        <button onClick={handleJoinRoom}>call user</button>
      </div>
    </div>
  );
};

export default Home;
