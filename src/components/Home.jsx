import React from 'react'
import Navbar from './NavBar'
import HomeSection from './HomeSection';
import BasicTabs from './BasicTabs';
import Footer from './Footer';

function Home() {
  return (
    <div style={{ paddingTop: '64px' }}>
         <Navbar/>
        <HomeSection/>
        <BasicTabs/>
        <Footer/>
     
    </div>
  )
}

export default Home
