import React, {memo} from "react";
import StoryImage from "../images/story.png";
import MissionImage from "../images/mission.png";
import WeImage from "../images/we.png";

const AguguHomeData = [
  {
    title: "Our Story",
    content: (
      <p>
        We started out in 2018 with the goal of publishing the full gospel of
        Jesus Christ to the inner city of Ibadan. Beginning with free tutorials
        classes to prepare students for the final secondary school examinations
        and university entrance examinations, we eventually started an afternoon
        fellowship. Gradually we commenced Sunday services and Friday prayer
        meeting and Bible study using a classroom within United Secondary
        School, Agugu. In 2021 we acquired a parcel of land at Iyana Idi Obi
        junction, Agugu and we initiated the construction of the church
        auditorium.
      </p>
    ),
    imageURL: StoryImage,
  },
  {
    title: "Our Mission",
    content: (
      <p>
        Build an army of saints that will shine light to those who sat in
        darkness and in the shadow of death. We will achieve this by bringing
        people into{" "}
        <span className="font-semibold text-red-600">MEMBERSHIP</span> in God’s
        Family, help them to{" "}
        <span className="font-semibold text-red-600">MATURITY</span> in Christ
        likeness, equip them for{" "}
        <span className="font-semibold text-red-600">MINISTRY</span>, send them
        out to <span className="font-semibold text-red-600">MISSIONS</span> to
        the world, thus{" "}
        <span className="font-semibold text-red-600">MAGNIFYING</span> God’s
        Name.
      </p>
    ),
    imageURL: MissionImage,
  },
  {
    title: "Who We Are",
    content: (
      <p>
        We are a group of believers with a passion to ensure that the fullness
        of the reward of the sacrifice of the Lord Jesus Christ is achieved.
        Operating within the context of Word Alive Ministry a.k.a. The Stone
        Church, we present the full gospel of Jesus Christ to the inner city of
        Ibadan.
        <br />
        <br />
        Declaring the good news to the poor, healing the broken hearted,
        proclaiming freedom to the captives and oppressed, restoration of sight
        to the blind, and assert that the time of the Lord’s favor has come.
      </p>
    ),
    imageURL: WeImage,
  },
];

export default AguguHomeData;
