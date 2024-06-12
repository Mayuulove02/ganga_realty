import React from 'react';
import image1 from "../Assests/Gallery/alexa.jpg";
import image2 from "../Assests/Gallery/smart.jpg"
import image3 from "../Assests/Gallery/security.jpg"
import image4 from "../Assests/Gallery/tech.jpg"
import image5 from "../Assests/Gallery/sport.jpg"
import image6 from "../Assests/Gallery/aqua.jpg"
import image7 from "../Assests/Gallery/garden.jpg"
import image8 from "../Assests/Gallery/lobby.jpg"
import image9 from "../Assests/Gallery/parking.jpg"
import image10 from "../Assests/Gallery/resiconnect.jpg"
import image11 from "../Assests/Gallery/track.jpg"
import image12 from "../Assests/Gallery/museum.jpg"
import image13 from "../Assests/Gallery/library.jpg"

const Gallery = () => {

  const images = [
    {
        img:image1
    },
    {
        img:image2
    },
    {
        img:image3
    },
    {
        img:image4
    },
    {
        img:image5
    },
    {
        img:image6
    },
    {
        img:image7
    },
    {
        img:image8
    },
    {
        img:image9
    },
    // {
    //     img:image10
    // },
    {
        img:image11
    },
    {
        img:image12
    },
    {
        img:image13
    },
  ];

  return (
    <section id='gallery' className="bg-black p-12 text-center italic">
      <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#fbad5a]">Ganga Realty Fusion 85</p>
      <h2 className="text-3xl font-bold text-center mb-2 text-white italic">Gallery</h2>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-12">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.img}
          alt={`Image ${index + 1}`}
          className="w-full h-auto"
        />
      ))}
    </div>
    </section>
  );
};

export default Gallery;
