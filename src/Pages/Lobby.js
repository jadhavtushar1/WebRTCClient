import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import './Pages.css'

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const {socket} = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="m-5">
        
        <input type="email"  
          value={email}
          onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail"/>
        
        <br />
        <input type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)} class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Room ID"/>
        <br />
        <button type="submit" class="btn btn-primary">Join Room</button>
       
      </form>
    </div>
  );
};

export default LobbyScreen;