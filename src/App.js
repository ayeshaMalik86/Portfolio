import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileSection from "./pages/ProfileSection";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Resume from "./pages/Resume";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfileSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
