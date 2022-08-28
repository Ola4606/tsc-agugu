import React from "react";

import Nav from "./components/general/Nav";
import LogoNav from "./components/general/LogoNav";
import Home from "./components/home/Home";
import BottomNav from "./components/general/BottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/general/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Nav />
          <div className="px-20">
            <LogoNav />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/giving" element={<Home />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </div>
          <BottomNav />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
