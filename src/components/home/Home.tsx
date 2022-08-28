import React from "react";
import Intro from "./Intro";
import OurMission from "./OurMission";
import OurStory from "./OurStory";
import WhoWeAre from "./WhoWeAre";
import OurGrowth from "./OurGrowth";

function Home() {
  return (
    <div>
      <Intro />
      <OurStory />
      <OurMission />
      <WhoWeAre />
      <OurGrowth />
    </div>
  );
}

export default Home;
