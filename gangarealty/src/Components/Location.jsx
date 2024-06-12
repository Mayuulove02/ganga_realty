import React from 'react';
import location from "../Assests/location.jpg"

const Location = () => {
    return (
        <section id='location' className="bg-black p-12 text-center italic">
            <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#fbad5a]">Ganga Realty Fusion 85</p>
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Location</h2>

            <div className="flex flex-col items-center mt-12"> 
                {/* <img src={arrow} alt='arrow' className='m-auto mb-8 text-red' width={200} /> */}
                <div className="mapouter">
                    <div className="gmap_canvas">
                       <img src={location} alt='map' className='rounded-lg'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;
