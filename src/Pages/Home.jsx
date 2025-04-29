import React from 'react'

import Hero from '../Components/Hero/Hero'
import Logos from '../Components/Logos/Logos'
import NewArrivales from '../Components/NewArrivales/NewArrivales'
import MonthlyDeals from '../Components/MonthlyDeal/MonthlyDeal'
import SpecialOffer from '../Components/SpecialOffer/SpecialOffer'
import Subscribe from '../Components/Subscribe/Subscribe'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <MonthlyDeals />
      <NewArrivales />
      <SpecialOffer />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home