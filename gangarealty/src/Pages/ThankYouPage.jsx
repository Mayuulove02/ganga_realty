import React from 'react';
import done from "../Assests/ThanksYou/done.gif";
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <img src={done} alt='thank-you' className="w-24 mx-auto mb-4" />
            <h2 className="font-bold text-xl mt-4">Thank you for reaching out!</h2>
            <p className="text-lg">We'll be in touch shortly.</p>
            <Link to="/"><button
              className="w-full bg-[#d88922] text-white p-2 rounded-full mt-12"
            >
              HomePage
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
