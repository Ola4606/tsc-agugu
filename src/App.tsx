import React from "react";

import Nav from "./components/general/Nav";
import LogoNav from "./components/general/LogoNav";
import Home from "./components/home/Home";
import BottomNav from "./components/general/BottomNav";

function App() {
  return (
    <div>
      <Nav />
      <div className="px-20">
        <LogoNav />
        <Home />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
