import React from "react";

import Nav from "./components/general/Nav";
import LogoNav from "./components/general/LogoNav";
import Home from "./components/home/Home";
import BottomNav from "./components/general/BottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/general/ScrollToTop";
import PageNotFound from "./components/general/PageNotFound";
import Services from "./components/cServices/Services";
import Giving from "./components/cGiving/Giving";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <div className="min-h-[100vh] flex flex-col justify-between">
          <Nav />
          <div className="px-3 md:px-20">
            <LogoNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/giving" element={<Giving />} />
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
