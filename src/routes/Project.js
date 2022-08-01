import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECT" text="some of my recent works"></HeroImg2>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
