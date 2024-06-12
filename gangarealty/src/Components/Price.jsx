import React, { useState } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import CommonModal from '../Utility/Modal';

const Price = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogHeader, setDialogHeader] = useState('');

  const openDialog = (header) => {
    setDialogHeader(header);
    onOpen();
  };
  return (
    <div className="bg-gray-100 py-12 text-center italic" id="price">
      <div className="max-w-6xl mx-auto">
      <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#fbad5a]">Ganga Realty Fusion 85</p>
      <h2 className="text-3xl font-bold text-center mb-2 italic">Price List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-12">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center italic" style={{background: "radial-gradient(circle, rgba(169, 169, 169, 1) 0%, rgba(128, 128, 128, 1) 100%)"}}>
            <h2 className="text-3xl  mb-4 font-semibold">Unit A</h2>
            <div className="uppercase tracking-wide text-2xl  font-semibold text-white">3 BHK + Utility + Servant</div>
            <div className="border-gray-200 py-4 mb-4">
              <p className="text-2xl font-semibold">Unit Size</p>
              <div className="uppercase tracking-wide text-2xl font-semibold text-white">2400 sq ft</div>
            </div>
            <button onClick={() => openDialog('Price List')} className="mt-4  text-white  py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300" style={{border:"1px solid "}}>
            Buy Now
          </button>            
          <CommonModal isOpen={isOpen} onClose={onClose} headerText={dialogHeader} />
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 text-center italic" style={{background: "radial-gradient(circle, rgba(169, 169, 169, 1) 0%, rgba(128, 128, 128, 1) 100%)"}}>
            <h2 className="text-3xl  mb-4 font-semibold">Unit B</h2>
            <div className="uppercase tracking-wide text-2xl  font-semibold text-white">4 BHK + Utility + Servant</div>
            <div className="border-gray-200 py-4 mb-4">
              <p className="text-2xl font-semibold">Unit Size</p>
              <div className="uppercase tracking-wide text-2xl font-semibold text-white">3000 sq ft</div>
            </div>
            <button onClick={() => openDialog('Price List')} className="mt-4  text-white  py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300" style={{border:"1px solid"}}>
            Buy Now
          </button>           
           <CommonModal isOpen={isOpen} onClose={onClose} headerText={dialogHeader} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
