import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <Routes>
          <div className="main-container">
            <Route path="/" element={<About />} />
          </div>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
