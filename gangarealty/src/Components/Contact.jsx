import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { Checkbox, Text, useMediaQuery, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../Assests/bg.jpg";
import logo from "../Assests/logo.jpeg";

const Contact = () => {
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
                publicKey: "hXacqdARHtDVnkvDa",
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
        <section id='contact' className="bg-[#F8F8F8] p-12 text-center italic" 
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center" }}
        >
            <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#c27b7f] md:text-base sm:text-sm">Ganga Realty Fusion 85</p>
            <h2 className="text-3xl font-bold text-center mb-2 text-white md:text-2xl sm:text-xl">Contact Us</h2>
            <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full h-full mt-12">
                <div className="mr-2">
                    <img src={logo} alt="logo" className='h-20 rounded' />
                    <p className="text-lg font-semibold py-2 transition duration-300 mt-4 text-left md:text-xl sm:text-lg">
                        Ganga Realty Fusion 85 <br /> Sector 85, Gurugram <br />
                        Haryana, India - 122016
                    </p>
                </div>
                <div className="bg-[#0b1c4b] bg-opacity-30 p-6 rounded-lg shadow-lg md:w-1/3 mt-8 md:mt-0 flex items-center justify-center">
                    <div>
                        <h2 className="text-md mb-4 text-justify text-white md:text-sm sm:text-xs">
                            For more information, get in contact with us by filling in the form below.
                        </h2>
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
                            <Checkbox defaultChecked>
                                <Text fontSize={"xs"} textAlign={"left"} color={"white"}>
                                    I agree and authorize team to contact me. This will override the registry with DNC / NDNC
                                </Text>
                            </Checkbox>
                            <button
                                type="submit"
                                className="w-full bg-[#d88922] text-white p-2 rounded-full"
                                isLoading={isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
