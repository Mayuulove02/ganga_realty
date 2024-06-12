import React, { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assests/Carousel/car/1.jpeg'; 
import image2 from '../Assests/Carousel/car/2.jpeg'; 
import image3 from '../Assests/Carousel/car/3.jpeg'; 
import image4 from '../Assests/Carousel/car/4.jpeg'; 
import image5 from '../Assests/Carousel/car/5.jpeg'; 
import image6 from '../Assests/Carousel/car/6.jpeg'; 
import image7 from '../Assests/Carousel/car/7.png'; 
import image8 from '../Assests/Carousel/car/8.png'; 
import image9 from '../Assests/Carousel/car/9.jpeg'; 
import image10 from '../Assests/Carousel/car/10.png'; 
import CommonModal from '../Utility/Modal';

const SlidingGallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogHeader, setDialogHeader] = useState('');

  const openDialog = (header) => {
    setDialogHeader(header);
    onOpen();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-black py-8" id="gallery">
      <div className="max-w-8xl mx-auto">
        <Slider {...settings}>
          <div className="px-2">
            <img src={image1} alt="Image 1" />
          </div>
          <div className="px-2">
            <img src={image2} alt="Image 2" />
          </div>
          <div className="px-2">
            <img src={image3} alt="Image 3" />
          </div>
          <div className="px-2">
            <img src={image4} alt="Image 4" />
          </div>
          <div className="px-2">
            <img src={image5} alt="Image 5" />
          </div>
          <div className="px-2">
            <img src={image6} alt="Image 6" />
          </div>
          <div className="px-2">
            <img src={image7} alt="Image 6" />
          </div>
          <div className="px-2">
            <img src={image8} alt="Image 6" />
          </div>
          <div className="px-2">
            <img src={image9} alt="Image 6" />
          </div>
          <div className="px-2">
            <img src={image10} alt="Image 6" />
          </div>
        </Slider>
      </div>
      <CommonModal isOpen={isOpen} onClose={onClose} headerText={dialogHeader} />
    </div>
  );
};

export default SlidingGallery;
