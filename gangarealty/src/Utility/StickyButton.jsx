import React, { useState } from 'react';
import CommonModal from './Modal';
import { useDisclosure } from '@chakra-ui/react';

const StickyButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [dialogHeader, setDialogHeader] = useState('');

  const openDialog = (header) => {
    setDialogHeader(header);
    onOpen();
  };
  return (
    <div className="fixed left-3 top-1/2 transform -translate-y-1/2 z-50">
      <button onClick={() => openDialog('Send Message')} className="bg-[#f98a13] text-white px-4 py-2 rounded shadow-lg rotate-90 origin-left -translate-y-1/2">
        Send Message
      </button>
      <CommonModal isOpen={isOpen} onClose={onClose} headerText={dialogHeader} />
    </div>
  );
};

export default StickyButton;
