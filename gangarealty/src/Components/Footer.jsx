

import React from 'react';
import { Link } from 'react-router-dom';

const Footer= () => {
  return (
    <div className="bg-black text-white py-8 px-4 p-2 text-center italic">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-4">&copy; 2024 | Ganga Realty Fusion 85</p>
        <p className="text-sm mb-4">
          <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
        </p>
        <p className="text-sm mb-8 text-justify">
          Disclaimer: Any content mentioned on this website is for information purposes only and is not to be considered an official website. All rights for logo & images are reserved by the respective builder. Additionally, the company has not authenticated the RERA* registration status of the real estate projects referenced in this information. The company does not assert any representation regarding the compliance status of these projects. Kindly be aware that it is your responsibility to inform yourself about the RERA* registration status of the project.
        </p>
        
      </div>
    </div>
  );
};

export default Footer;
