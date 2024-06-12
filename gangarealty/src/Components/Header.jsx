import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { useMediaQuery, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../Assests/Header/bg.mp4'; // Make sure to add your video file in this path

const Header = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append('source', 'Ganga_Realty_fusion85');
    const requiredFields = ["user_name", "user_phone", "user_email"];
    const isAnyFieldEmpty = requiredFields.some((field) => !form.current[field].value);

    if (isAnyFieldEmpty) {
      toast({
        title: "Please fill in all the details",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_bnqs3nf", "template_6znyofw", form.current, {
        publicKey: "3q48ooOOxL1LhxMEE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitting(false);
          toast({
            title: "Thanks For Your Interest",
            description: "Our Team will Contact you soon",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/thank-you");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
          alert("Error submitting form");
        }
      );
  };

  return (
    <header
      id="home"
      className="relative h-screen flex items-center italic"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="text-white space-y-4 md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#fbad5a] italic">FUSION 85</h1>
          <p className="text-2xl italic">India’s First AI-Enabled Resort Homes in Gurugram's Sector 85</p>
          <p className="text-sm"></p>
          <p className="text-4xl font-bold text-[#fbad5a]"></p>
          <p className="text-xl text-[#fbad5a] "> 10 Elevators in a tower</p>
        </div>
        <div className="bg-white bg-opacity-60 p-6 rounded-lg shadow-lg md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-xl font-bold mb-4 italic">Hurry! Limited units are available</h2>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="user_phone"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input type="hidden" name="source" value="Ganga_Realty_fusion85" />
            <button
              type="submit"
              className="w-full bg-[#fbad5a] text-white p-2 rounded-full"
              isLoading={isSubmitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
