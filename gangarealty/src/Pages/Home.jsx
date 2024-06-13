import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import StickyButton from "../Utility/StickyButton";
import About from '../Components/About';
import Features from '../Components/Features';
import Price from '../Components/Price';
import Gallery from '../Components/Gallery';
import Amenities from '../Components/Amenities';
import Location from '../Components/Location';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import SlidingGallery from '../Components/SlidingGallery';
import ReloadModal from '../Utility/ReloadModal';

const Home = () => {
  return (
    <div>
        <StickyButton />
        <ReloadModal />
        <Navbar />
        <Header />
        <About />
        <Features />
        <SlidingGallery />
        <Price />
        <Gallery />
        <Amenities />
        <Location />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home