import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Pricelist from "./pages/Pricelist";
import useWindowSize from "./hooks/useWindowResize";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricelist" element={<Pricelist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
