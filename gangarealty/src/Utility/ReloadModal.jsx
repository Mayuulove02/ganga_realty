import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  VStack,
  useToast,
  Image,
} from '@chakra-ui/react';
import { BsPerson, BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Assests/bg.jpg'; // Add your background image here

const ReloadModal = ({ headerText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const form = useRef(null);
  const toast = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalEmail = (e) => {
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
    const phonePattern = /^[6-9]\d{9}$/;
    const phoneNumber = form.current["user_phone"].value;

    if (!phonePattern.test(phoneNumber)) {
      toast({
        title: "Invalid phone number",
        description: "Phone number must be 10 digits long",
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
          onClose();
          navigate("/thank-you");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
          alert("Error submitting form");
        }
      );
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value;
    if (!/^[6-9]\d{0,9}$/.test(value)) {
      e.target.value = value.slice(0, -1);
    }
  };

  useEffect(() => {
    const openModalEveryTwoMinutes = () => {
      onOpen();
      setInterval(onOpen, 2 * 60 * 1000); // 2 minutes
    };

    openModalEveryTwoMinutes();

    return () => clearInterval(openModalEveryTwoMinutes);
  }, [onOpen]);

  const formContent = (
    <form ref={form} onSubmit={modalEmail}>
      <Box borderRadius="20px" mt={isMobile ? 0 : 0}>
        <Box borderRadius="lg" p={8}>
          <Box color="white">
            <VStack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <BsPerson color="gray.800" />
                  </InputLeftElement>
                  <Input type="text" size="md" name="user_name" required />
                </InputGroup>
              </FormControl>
              <FormControl id="number">
                <FormLabel>Mobile No.</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <BsFillTelephoneFill color="gray.800" />
                  </InputLeftElement>
                  <Input 
                    type="text" 
                    size="md" 
                    name="user_phone" 
                    required 
                    pattern="^[6-9]\d{9}$"
                    onInput={handlePhoneInput} 
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none">
                    <MdOutlineEmail color="gray.800" />
                  </InputLeftElement>
                  <Input type="email" size="md" name="user_email" required />
                  <input type="hidden" name="source" value="Ganga_Realty_fusion85" />
                </InputGroup>
              </FormControl>
              <Button variant="solid" bg="#d88922" color="white" type="submit" isLoading={isSubmitting}>
                Submit
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </form>
  );

  return (
    <>
      {!isMobile ? (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <Image src={backgroundImage} alt="background" position="absolute" zIndex={-1} h="100%" w="100%" objectFit="cover" borderRadius="lg" />
            <ModalHeader>Hurry Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{formContent}</ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <Image src={backgroundImage} alt="background" position="absolute" zIndex={-1} h="100%" w="100%" objectFit="cover" />
            <DrawerHeader>Hurry Up</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>{formContent}</DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default ReloadModal;
