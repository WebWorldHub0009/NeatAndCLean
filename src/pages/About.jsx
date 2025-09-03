import React from 'react'
import HeroAbout from '../components/HeroAbout'
import MainAbout from '../components/MainAbout'
import WhatWeOffer from '../components/WhatWeOffer'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faq'
import VisionMission from '../components/VisionMission'

const About = () => {
  return (
    <>
    <HeroAbout/>
    <MainAbout/>
    <VisionMission/>
    <WhatWeOffer/>
    <Testimonials/>
    <FAQ/>
    </>
  )
}

export default About