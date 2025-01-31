import About from "./pages/About";
import Artwork from "./pages/Artwork";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./style/index.scss";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artwork" element={<Artwork />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
