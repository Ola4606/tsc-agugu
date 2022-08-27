import React from 'react'
import YearDescription from '../growth/YearDescription'
import Intro from './Intro'
import OurMission from './OurMission'
import OurStory from './OurStory'
import WhoWeAre from './WhoWeAre'
import outGrowthData from '../../data/outGrowth'

function Home() {

  let ourGrowthElements = outGrowthData.map((i, index) => {
    return (
      <div key={index}><YearDescription year={i.year} description={i.description} imageURL={i.imageURL}/></div>
    );
  })




  return (
    <div>
        <Intro />
        <OurStory />
        <OurMission />
        <WhoWeAre />
        {ourGrowthElements}
      </div>
  )
}

export default Home