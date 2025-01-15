import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileSection from "./pages/ProfileSection";
import './index.css';
import '@fontsource/lato'; // Install via npm if using a package
import '@fontsource/mona-sans';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProfileSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
