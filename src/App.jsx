import About from "./pages/About";
import Artwork from "./pages/Artwork";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./style/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="MarianneB.github.io/" element={<Home />} />
          <Route path="MarianneB.github.io/*" element={<Home />} />
          <Route path="MarianneB.github.io/about" element={<About />} />
          <Route path="MarianneB.github.io/resume" element={<Resume />} />
          <Route path="MarianneB.github.io/projects" element={<Projects />} />
          <Route path="MarianneB.github.io/artwork" element={<Artwork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
