// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import TextField from "@material-ui/core/TextField";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import PhoneIcon from "@material-ui/icons/Phone";
// import React, { useEffect, useRef, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import Peer from "simple-peer";
// import io from "socket.io-client";
// import "./Video.css";
// import { Route, Link } from "react-router-dom";

// const socket = io.connect("http://localhost:4000");
// function Video() {
//   let [me, setMe] = useState("");
//   const [stream, setStream] = useState();
//   const [receivingCall, setReceivingCall] = useState(false);
//   const [caller, setCaller] = useState("");
//   const [callerSignal, setCallerSignal] = useState();
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [idToCall, setIdToCall] = useState("");
//   const [callEnded, setCallEnded] = useState(false);
//   const [name, setName] = useState("");
//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();

//   const [callid, setcallid] = useState("");

//   var bc = new BroadcastChannel("test_channel");

// bc.postMessage(callid); /* send */

// bc.onmessage = function (ev) {
//   // console.log(ev);
//   // last_line = ev.data
// }; /* receive */

// var broadcaster = new BroadcastChannel("Consumer");
// var messageReceiver = new BroadcastChannel("Consumer");

// messageReceiver.onmessage = function (event) {
//   alert(event.data);
//   window.close();
// };

// broadcaster.postMessage("hello");

// useEffect(() => {
//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       setStream(stream);
//       myVideo.current.srcObject = stream;
//     });

//   socket.on("me", (id) => {
//     setMe(id);
//     // setMe("manavZhBqF46guGXAAAL");
//   });

//   socket.on("callUser", (data) => {
//     setReceivingCall(true);
//     setCaller(data.from);
//     setName(data.name);
//     setCallerSignal(data.signal);
//   });
// }, []);

// const callUser = (id) => {
//   console.log(id);
//   const peer = new Peer({
//     initiator: true,
//     trickle: false,
//     stream: stream,
//   });
//   peer.on("signal", (data) => {
//     console.log(id);
//     socket.emit("callUser", {
//       userToCall: id,
//       signalData: data,
//       from: me,
//       name: name,
//     });
//   });
//   peer.on("stream", (stream) => {
//     userVideo.current.srcObject = stream;
//   });
//   socket.on("callAccepted", (signal) => {
//     setCallAccepted(true);
//     peer.signal(signal);
//   });

//   connectionRef.current = peer;
// };

// const answerCall = () => {
//   setCallAccepted(true);
//   const peer = new Peer({
//     initiator: false,
//     trickle: false,
//     stream: stream,
//   });
//   peer.on("signal", (data) => {
//     socket.emit("answerCall", { signal: data, to: caller });
//   });
//   peer.on("stream", (stream) => {
//     userVideo.current.srcObject = stream;
//   });

//   peer.signal(callerSignal);
//   connectionRef.current = peer;
// };

// const leaveCall = () => {
//   setCallEnded(true);
//   connectionRef.current.destroy();
// };

// const sendcallid = () => {};

//   return (
//     <>
//       <h1 style={{ textAlign: "center", color: "#fff" }}>Zoomish</h1>
//       <div className="container">
//         <div className="video-container">
//           <div className="video">
//             {stream && (
//               <video
//                 playsInline
//                 muted
//                 ref={myVideo}
//                 autoPlay
//                 style={{ width: "300px" }}
//               />
//             )}
//           </div>
//           <div className="video">
//             {callAccepted && !callEnded ? (
//               <video
//                 playsInline
//                 ref={userVideo}
//                 autoPlay
//                 style={{ width: "300px" }}
//               />
//             ) : null}
//           </div>
//         </div>
//         <div className="myId">
//           <TextField
//             id="filled-basic"
//             label="Name"
//             variant="filled"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ marginBottom: "20px" }}
//           />
//           <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
//             <Button
//               variant="contained"
//               color="primary"
//               startIcon={<AssignmentIcon fontSize="large" />}
//             >
//               Copy ID
//             </Button>
//           </CopyToClipboard>

//           <TextField
//             id="filled-basic"
//             label="ID to call"
//             variant="filled"
//             value={idToCall}
//             onChange={(e) => setIdToCall(e.target.value)}
//           />
//           {console.log(idToCall)}
//           <div className="call-button">
//             {callAccepted && !callEnded ? (
//               <Button variant="contained" color="secondary" onClick={leaveCall}>
//                 End Call
//               </Button>
//             ) : (
//               <IconButton
//                 color="primary"
//                 aria-label="call"
//                 onClick={() => callUser(idToCall)}
//               >
//                 <PhoneIcon fontSize="large" />
//               </IconButton>
//             )}
//             {idToCall}
//           </div>
//         </div>
//         <div>
//           {receivingCall && !callAccepted ? (
//             <div className="caller">
//               <h1>{name} is calling...</h1>
//               <Button variant="contained" color="primary" onClick={answerCall}>
//                 Answer
//               </Button>
//             </div>
//           ) : null}
//         </div>
//       </div>

//       <input
//         placeholder="password"
//         onChange={(e) => setcallid(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           // alert(callid);
//           broadcaster.postMessage(callid);
//           window.close();
//           <h4>{bc.postMessage(callid)}</h4>;
//         }}
//       >
//         Submit
//       </button>
//       <h4> {callid}</h4>
//     </>
//   );
// }

// export default Video;
