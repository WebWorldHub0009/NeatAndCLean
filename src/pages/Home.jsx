import React from 'react'
import HeroSection from '../components/Hero'
import AboutSection from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import HowItWorks from '../components/HowItWork'
import ServicesSection from '../components/ServiceSection'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <WhyChooseUs/>
    <HowItWorks/>
    <ServicesSection/>
    <Stats/>
    </>
  )
}

export default Home