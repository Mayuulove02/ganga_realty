import React from 'react';

const featuresList = [
    "Three iconic towers spanning 5.3 acres.",
    "Tallest towers in the area with 55-57 stories.",
    "Each tower has 10 lifts.",
    "Two dedicated lifts per apartment",
    "Two separate service lifts.",
    "Sun-facing units for natural light",
    "Excellent connectivity to Dwarka Expressway",
    "Each apartment comes with 2 car parking spaces",
    "Easy access to NH8",
    "A 20-minute drive to IGI Delhi Airport",
    "Features a massive, state-of-the-art clubhouse",
    "Designed by principal architect UHA London",
    "Masterplan by SCAPE DESIGN",
    "Landscaping by MACFURLANE & Associates",
    "Structural audit conducted by SGS"
    
  ];

const Features = () => {
  return (
    <section id='highlight' className="bg-black p-12 text-center italic">
      <p className="text-lg py-2 font-semibold transition duration-300 mt-4 text-[#fbad5a]">Ganga Realty Fusion 85</p>
      <h2 className="text-3xl font-bold text-center mb-2 text-white italic">Project Highlights</h2>
      {/* <img src={arrow} alt='arrow' className='m-auto mb-8 text-white' width={200} /> */}
      <div className="bg-black p-6">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuresList.map((feature, index) => (
            <li key={index} className="flex items-center text-white">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
