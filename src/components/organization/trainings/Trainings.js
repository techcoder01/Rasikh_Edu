"use client"
import Image from 'next/image';
import { useState } from 'react';

const trainingPrograms = [
    {
      id: 1,
      title: "Blockchain Basic Training",
      description: "Learn basics of blockchain from CS 105 and fundamentals of it as well in real world tasks and techniques applied",
      author: "Ahmed Ali Memon",
      image: "/free.png",
      stats: {
        totalStudents: { value: 180, increase: "25%" },
        newCertificatesCompleted: { value: 20, increase: "2%" },
        newStudents: { value: 35, increase: "3%" },
        programReachProgress: { value: 5000, increase: "15%" }
      }
    },
    {
      id: 2,
      title: "Blockchain Basic Training",
      description: "Learn basics of blockchain from CS 105 and fundamentals of it as well in real world tasks and techniques applied",
      author: "Ahmed Ali Memon",
      image: "/free.png",
      stats: {
        totalStudents: { value: 180, increase: "25%" },
        newCertificatesCompleted: { value: 20, increase: "2%" },
        newStudents: { value: 35, increase: "3%" },
        programReachProgress: { value: 5000, increase: "15%" }
      }
    },
    {
      id: 3,
      title: "Blockchain Basic Training",
      description: "Learn basics of blockchain from CS 105 and fundamentals of it as well in real world tasks and techniques applied",
      author: "Ahmed Ali Memon",
      image: "/free.png",
      stats: {
        totalStudents: { value: 180, increase: "25%" },
        newCertificatesCompleted: { value: 20, increase: "2%" },
        newStudents: { value: 35, increase: "3%" },
        programReachProgress: { value: 5000, increase: "15%" }
      }
    },
    {
      id: 4,
      title: "Blockchain Basic Training",
      description: "Learn basics of blockchain from CS 105 and fundamentals of it as well in real world tasks and techniques applied",
      author: "Ahmed Ali Memon",
      image: "/free.png",
      stats: {
        totalStudents: { value: 180, increase: "25%" },
        newCertificatesCompleted: { value: 20, increase: "2%" },
        newStudents: { value: 35, increase: "3%" },
        programReachProgress: { value: 5000, increase: "15%" }
      }
    },
    // ... (repeat the same changes for the other training programs)
  ];

  const StatCard = ({ title, value, increase }) => (
    <div className="border border-gray-700 rounded-lg p-4">
      <h3 className="text-sm font-semibold mb-2">
        {title === 'totalStudents' ? 'Total students' :
         title === 'newCertificatesCompleted' ? 'New certificates completed' :
         title === 'newStudents' ? 'New students' :
         title === 'programReachProgress' ? 'Program reach progress' :
         title}
      </h3>
      <p className="text-2xl font-bold">+{value}</p>
      <p className="text-green-500 text-sm">+{increase}</p>
    </div>
  );

const Trainings = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="text-white py-32 px-4">
      <div className="max-w-[60rem] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Training programs</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
        
        <div className="space-y-4">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="border border-gray-700 rounded-lg overflow-hidden">
              <div className="p-4 sm:p-6 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-grow mb-4 sm:mb-0 sm:mr-6">
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">by: {program.author}</p>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">{program.title}</h2>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 max-w-sm">{program.description}</p>
                  <button 
                    className="bg-slate-500 hover:bg-slate-600 text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded"
                    onClick={() => toggleExpand(program.id)}
                  >
                    {expandedId === program.id ? "View Less" : "View details"}
                  </button>
                </div>
                <Image 
                  src={program.image} 
                  alt={program.title}
                  width={300}
                  height={180}
                  className="w-full sm:w-[300px] sm:h-[180px] h-full rounded-lg pb-4 sm:pb-0 object-contain"
                />
              </div>
              {expandedId === program.id && (
                <div className="px-8 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.entries(program.stats).map(([key, stat]) => (
                      <StatCard key={key} title={key} {...stat} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainings;