import React from 'react';
import { GiLift, GiPartyFlags,GiKidSlide } from "react-icons/gi";
import { FaParking, FaTableTennis, FaSwimmingPool} from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { MdElectricMoped } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiCctv } from "react-icons/bi";

const Amenities = () => {
    return (
        <section id='amenities' className="bg-[#F8F8F8] p-12 text-center italic">
            <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#fbad5a]">Ganga Realty Fusion 85</p>
            <h2 className="text-3xl font-bold text-center mb-2 text-[#2f4858]">Amenities</h2>
            {/* <img src={arrow} alt='arrow' className='m-auto mb-8 text-red' width={200} /> */}

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-12">
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <GrYoga size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Yoga Room</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <GiKidSlide size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Kids Play Area</p>
                </div>
                <div className=" rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <AiFillShop size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Restaurant</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <MdElectricMoped size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">EV Charging Point</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <GiPoliceOfficerHead size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">24/7 Security</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <BiCctv size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">CCTV</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <GiLift size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Lift</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <FaParking size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Parking</p>
                </div>
                <div className=" rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <CgGym size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Gym</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <FaTableTennis size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Table Tennis</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <FaSwimmingPool size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Swimming Pool</p>
                </div>
                <div className="rounded-lg flex flex-col items-center p-4 bg-white border border-gray-200 shadow-lg hover:shadow-none transition-shadow duration-300">
                    <GiPartyFlags size={40} className="text-[#fbad5a]" />
                    <p className="mt-2 text-center text-[#2f4858] font-semibold">Party Area</p>
                </div>
                
            </div>
        </section>
    );
}

export default Amenities;
