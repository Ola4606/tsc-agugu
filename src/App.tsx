import React from "react";
import Intro from "./components/Intro";
import LogoNav from "./components/LogoNav";
import Nav from "./components/Nav";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <div>
      <Nav />
      <div className="px-20">
        <div>
          {/*Add background image here*/}
          <LogoNav />
          <Intro />
        </div>
        <OurStory />
        <OurMission />
        <WhoWeAre />
      </div>
    </div>
  );
}

export default App;
