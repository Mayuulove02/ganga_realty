import { useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import CommonModal from './Modal';

const StickyBrochure = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogHeader, setDialogHeader] = useState('');

  const openDialog = (header) => {
    setDialogHeader(header);
    onOpen();
  };
  return (
    <div className="fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
      <button onClick={() => openDialog('Download Brochure')} className="bg-white text-black px-4 py-2 rounded shadow-lg rotate-90 origin-right -translate-y-1/2">
        Download Brochure
      </button>
      <CommonModal isOpen={isOpen} onClose={onClose} headerText={dialogHeader} />
    </div>
  );
};

export default StickyBrochure;
