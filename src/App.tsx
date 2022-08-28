import React from "react";

import Nav from "./components/general/Nav";
import LogoNav from "./components/general/LogoNav";
import Home from "./components/home/Home";
import BottomNav from "./components/general/BottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/general/ScrollToTop";
import PageNotFound from "./components/general/PageNotFound";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <div className="min-h-[100vh] w-[100vw] flex flex-col justify-between">
          <Nav />
          <div className="px-20">
            <LogoNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<PageNotFound />} />
              <Route path="/giving" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <BottomNav />
        </div>
      </Router>
    </div>
  );
}

export default App;
