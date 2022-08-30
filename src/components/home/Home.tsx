import React, {memo} from "react";
import Intro from "./Intro";
import OurGrowth from "./OurGrowth";
import AguguHomeData from "../../data/aguguHomeData";
import HomeSection from "./HomeSection";

function Home() {
  const homeSections = AguguHomeData.map((i, index) => {
    return (
      <div key={index}>
        <HomeSection title={i.title} content={i.content} image={i.imageURL} />
      </div>
    );
  });

  return (
    <div>
      <Intro />

      {homeSections}

      <OurGrowth />
    </div>
  );
}

export default memo(Home);
