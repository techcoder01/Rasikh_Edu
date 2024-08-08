import React from 'react';
import Image from 'next/image';

const programs = [
  { name: 'Business Administration', students: 4000, revenue: 200000, image: '/free.png'  },
  { name: 'Computer Science', students: 6000, revenue: 300000, image: '/free.png' },
  { name: 'Data Science', students: 2000, revenue: 150000, image: '/free.png' },
  { name: 'Software Engineering', students: 7000, revenue: 350000, image: '/free.png'  },
];

const stats = [
  { label: 'New students', value: '+150', percentage: '+25%' },
  { label: 'New certificates issued', value: '+400', percentage: '+20%' },
  { label: 'New accreditation', value: '+2', percentage: '+3%' },
  { label: 'New certificate verification', value: '+500', percentage: '+15%' },
];

const XyzInstitute = () => {
  return (
    <div className="text-white rounded-lg py-32 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Xyz Institute</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="border-[1.5px] border-gray-600 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-400">{stat.label}</h3>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            <span className="text-sm text-green-400">{stat.percentage}</span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Your programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {programs.map((program, index) => (
          <div key={index} className="">
            <Image 
              src={program.image}
              alt={program.name}
              width={300}
              height={200}
              layout="responsive"
              className="w-full"
            />
            <div className="p-2 space-y-2">
              <h3 className="font-medium">{program.name}</h3>
              <p className="text-sm text-gray-400">{program.students.toLocaleString()} students</p>
              <p className="text-sm text-gray-400">${program.revenue.toLocaleString()} revenue</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XyzInstitute;