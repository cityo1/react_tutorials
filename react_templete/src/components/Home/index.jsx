import React from 'react'
import HeroSection from './HeroSection'
import Features from './Features'

const index = () => {
  return (
    <div className='home'>
      <div className='container'>
        <HeroSection />
        <Features />
      </div>
    </div>
  )
}

export default index