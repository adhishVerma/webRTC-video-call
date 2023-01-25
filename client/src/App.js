import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import { MediaStreamProvider } from "./context/MediaStream";

function App() {
  return (
    <div className="App">
      <MediaStreamProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </MediaStreamProvider>
    </div>
  );
}

export default App;
