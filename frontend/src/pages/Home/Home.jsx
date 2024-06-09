import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Books from '../../components/Books/Books'




function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Books/>
        

        <Footer/>
    </div>
  )
}

export default Home