"use client"
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false
});

const defaultPrograms = [
    {
      id: 1,
      title: "Blockchain Basic Training",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Crypto Currency",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Web Development",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Facebook Ads Course",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Freelancing Basics to Hero",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "App Development",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Digital Marketing",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Devops Zero to Hero",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Full Stack Web and App Development",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Graphic Designing",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Blockchain Basic Training",
      image: "/free.png",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    {
      id: 1,
      title: "Blockchain Basic Training",
      image: "/free.pmg",
      institute: "xyz Institute",
      description: "Learn basics of blockchain from 0 to 100 and fundamentals of its use in real-world tasks and blockchain-applied",
      tutor: "ali hamza",
      rating: 3
    },
    // ... add more programs here to match the image
  ];

const TrainingPrograms = ({ programs = defaultPrograms }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row text-white max-w-[60rem] py-10 mx-auto">
      <div className="sm:w-2/3 w-full  p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Training programs</h1>
        <div className="space-y-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
      <div className="sm:w-1/3 w-full py-10">
        <MapWithNoSSR className='w-full h-64 sm:h-full rounded-xl overflow-hidden'/>
      </div>
    </div>
  );
};

const ProgramCard = ({ program }) => {
    return (
      <div className="border-2 border-gray-800 rounded-lg overflow-hidden sm:p-4 py-4 flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/4 w-3/4 sm:mr-4 py-5 sm:py-0">
          <Image 
            src={program.image} 
            alt={program.title} 
            width={100} 
            height={100} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-3/4">
          <p className="text-xs text-blue-400 mb-2">by {program.institute}</p>
          <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
          <p className="text-xs text-gray-300 mb-4">{program.description}</p>
            <div className='pr-10'>
            <div className="flex justify-between items-center ">
            <button className="border border-1 border-gray-400 text-white text-xs py-1 px-3 rounded-full">
              tutor : {program.tutor}
            </button>
            <div className="flex border border-1 border-gray-400 py-1 px-3 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < program.rating} />
              ))}
            </div>
          </div>
            </div>
        </div>
      </div>
    );
  };
  
  const Star = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

// At the end of the file
export { defaultPrograms };
export default TrainingPrograms;