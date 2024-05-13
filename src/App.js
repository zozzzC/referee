import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Pricelist from "./pages/Pricelist";
import FormPage from "./pages/FormPage";

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
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
