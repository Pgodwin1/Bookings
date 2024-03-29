import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import PropertyList from '../../components/propertyList/PropertyList'
import MailLIst from '../../components/mailList/MailLIst'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
   <div>
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList />
      <h1 className="homeTitle">Home guests love</h1>
      <FeaturedProperties />
      <MailLIst />
      <Footer />
    </div>
   </div>  )
}

export default Home
