import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ApodViewer from "./pages/ApodViewer";
import MarsRover from "./pages/MarsRover";
import NeoTracker from "./pages/NeoTracker";
import EPICViewer from "./pages/EpicViewer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4 max-w-6xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<ApodViewer />} />
          <Route path="/mars" element={<MarsRover />} />
          <Route path="/neo" element={<NeoTracker />} />
          <Route path="/epic" element={<EPICViewer />} />
        </Routes>
      </main>
    </div>
  );
}
