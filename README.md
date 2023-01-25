
# webRTC-video-call

It's a very simple application to get used to webRTC, with reactJS. It kinda looks ugly but the main focus is on implementing webRTC correctly. 

you can initialize a peer connection with use effect hook, get the media devices. Then add the tracks to our peer connection, create offer, recieve on the remote end, accept, set , send back the answer, set the answer. 

I'm not 100% sure, but my streams didnt work without exchanging ice candidates as they were blocked in brave browser. So, couldn't get them to work. Later when i tried this with firefox, it allowed the connection to go through.

check the console logs for ice candidates, in case of trouble. 


## key topics : 
- Media Devices (getUserMedia, getTracks)
- RTCPeerConnection ( createOffer, createAnser, setlocalDescription, setRemoteDescription etc.)
- RTCSessionDescription
- icecandidate
- negotiationneeded




## Run Locally

Clone the project

```bash
  git clone https://github.com/adhishVerma/webRTC-video-call.git
```

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Acknowledgements

 - [webRTC.org](https://webrtc.org/getting-started/overview)
 - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

