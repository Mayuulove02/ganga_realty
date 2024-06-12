import React, { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import aboutImage from '../Assests/about.jpg';
// import arrow from "../Assests/arrow.png"

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogHeader, setDialogHeader] = useState('');

  const openDialog = (header) => {
    setDialogHeader(header);
    onOpen();
  };
  return (
    <section id='about' className="bg-white-100 p-12 text-center italic">
      <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#c27b7f]">WELCOME TO</p>
      <h2 className="text-3xl font-bold text-center mb-2 text-[#2f4858] italic">Ganga Realty Unveils <span className='text-[#fbad5a]'>Fusion 85</span></h2>
      {/* <img src={arrow} alt='arrow' className='m-auto mb-8 text-red' width={200} /> */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-12">
        <div className="md:w-1/2">
          <img src={aboutImage} alt="About" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/4 mt-8 md:mt-0 md:ml-8 text-left">
          <p className="text-md leading-relaxed text-justify">
          Ganga Realty Unveils FUSION 85: <span className='font-bold'>India’s First AI-Enabled Resort Homes in Gurugram’s Sector 85.</span> <br />
          Ganga Realty, a visionary name in the real estate and infrastructure development sector, proudly announces the soft launch of FUSION 85, India's pioneering AI-enabled resort homes. This groundbreaking project is set to elevate luxury living to unprecedented heights, seamlessly integrating advanced technology with serene resort-style living.Rooted in the illustrious legacy of two prominent businesses, Ganga Realty is driven by the youthful vigor of its leaders. Embodying the ADS Spirit and the PS Group’s philosophy, Ganga Realty is committed to delivering top-notch quality, sustainability, and innovation. This new venture, FUSION 85, is a testament to their dedication to setting new benchmarks in the Indian real estate industry.
          </p>
          {/* <p className="mt-5 text-md py-2 font-semibold transition duration-300">POSSESSION: 2026</p> */}
          
        </div>
      </div>
    </section>
  );
};

export default About;
