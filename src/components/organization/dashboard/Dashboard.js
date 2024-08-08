import React from 'react';
import Image from 'next/image';

const programs = [
  { name: 'Business Administration', students: 4000, revenue: 200000, image: '/free.png' },
  { name: 'Computer Science', students: 6000, revenue: 300000, image: '/free.png' },
  { name: 'Data Science', students: 2000, revenue: 150000, image: '/free.png' },
  { name: 'Software Engineering', students: 7000, revenue: 350000, image: '/free.png' },
];

const stats = [
  { label: 'Total employs', value: '1330' },
  { label: 'Active Employs', value: '700' },
  { label: 'Training Programs', value: '150' },
  { label: 'certificate Issued', value: '+1500' },
];

const certificates = [
  { name: 'Business Administration', students: 4000, image: '/certificate.jpg' },
  { name: 'Computer Science', students: 6000, image: '/certificate.jpg' },
  { name: 'Data Science', students: 2000, image: '/certificate.jpg' },
  { name: 'Software Engineering', students: 7000, image: '/certificate.jpg' },
];

const OrgDashboard = () => {
  return (
    <div className="text-white py-32 px-4 max-w-[60rem] mx-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Xyz Institute</h1>
        
        <h2 className="text-xl font-semibold mb-4">Today summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="border border-gray-700 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-400">{stat.label}</h3>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Your programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programs.map((program, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <Image 
                src={program.image}
                alt={program.name}
                width={300}
                height={300}
                layout="responsive"
                className="w-full"
              />
              <div className="p-3">
                <h3 className="font-medium">{program.name}</h3>
                <p className="text-sm text-gray-400">{program.students.toLocaleString()} students</p>
                <p className="text-sm text-gray-400">${program.revenue.toLocaleString()} revenue</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-6">Your certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="rounded-lg overflow-hidden ">
            <Image 
                src={cert.image}
                alt={cert.name}
                width={300}
                height={300}
                layout="responsive"
                className="w-full"
              />
              <div className='py-3 px-2'>
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-sm text-gray-400">{cert.students.toLocaleString()} students</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrgDashboard;