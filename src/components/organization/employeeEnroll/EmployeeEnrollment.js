"use client"
import React, { useState, useEffect } from 'react';

const EmployEnrollment = () => {
  const initialEnrollments = [
    { id: '1', name: 'Ali akther', email: 'aliali@gmail.com', program: 'Program A', status: 'Pending', action: 'Approve/Reject' },
    { id: '2', name: 'baber ahmed', email: 'Berkeleyhill@gmail.com', program: 'Program B', status: 'Enrolled', action: 'View details' },
    { id: '3', name: 'amme wagnar', email: 'SeatWashing12@gmail.com', program: 'Program C', status: 'Enrolled', action: 'View details' },
    { id: '4', name: 'alea george', email: 'Camb344@gmail.com', program: 'Program A', status: 'Pending', action: 'Approve/Reject' },
    { id: '5', name: 'Mehdi raza', email: 'Massachusetts@gmail.com', program: 'Program A', status: 'Enrolled', action: 'View details' },
    { id: '6', name: 'Ali akther', email: 'aliali@gmail.com', program: 'Program C', status: 'Pending', action: 'Approve/Reject' },
    { id: '7', name: 'baber ahmed', email: 'Berkeleyhill@gmail.com', program: 'Program C', status: 'Enrolled', action: 'View details' },
    { id: '8', name: 'amme wagnar', email: 'SeatWashing12@gmail.com', program: 'Program B', status: 'Enrolled', action: 'View details' },
    { id: '9', name: 'alea george', email: 'Camb344@gmail.com', program: 'Program A', status: 'Pending', action: 'Approve/Reject' },
    { id: '10', name: 'Mehdi raza', email: 'Massachusetts@gmail.com', program: 'Program B', status: 'Enrolled', action: 'View details' },
  ];

  const [enrollments, setEnrollments] = useState(initialEnrollments);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let filteredEnrollments = initialEnrollments;

    if (searchTerm) {
      filteredEnrollments = filteredEnrollments.filter(enroll => 
        enroll.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enroll.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enroll.program.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter !== 'All') {
      filteredEnrollments = filteredEnrollments.filter(enroll => 
        enroll.status.toLowerCase() === filter.toLowerCase()
      );
    }

    setEnrollments(filteredEnrollments);
  }, [searchTerm, filter]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const enrolledCount = initialEnrollments.filter(enroll => enroll.status === 'Enrolled').length;
  const pendingCount = initialEnrollments.filter(enroll => enroll.status === 'Pending').length;
  const totalCount = initialEnrollments.length;

  return (
    <div className="text-white py-32 max-w-[60rem] mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Manage Employs Enrollment</h1>
      
      <div className="mb-4 sm:mb-6">
        <input 
          type="text" 
          placeholder="Search for employs" 
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      <div className="flex space-x-4 mb-4 sm:mb-6 text-sm border-b border-gray-700 pb-2 overflow-x-auto">
        <span 
          className={`cursor-pointer ${filter === 'All' ? 'text-blue-500 border-b-2 border-blue-500' : ''} pb-2 whitespace-nowrap`}
          onClick={() => handleFilter('All')}
        >
          All({totalCount})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Enrolled' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Enrolled')}
        >
          Enrolled({enrolledCount})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Pending' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Pending')}
        >
          Pending({pendingCount})
        </span>
      </div>
      
      {/* Card view for smaller screens */}
      <div className="grid gap-4 sm:hidden">
        {enrollments.map((enroll, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{enroll.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${enroll.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {enroll.status}
              </span>
            </div>
            <p className="text-sm text-gray-400">Email: {enroll.email}</p>
            <p className="text-sm text-gray-400">Program: {enroll.program}</p>
            <button className="text-blue-500 hover:underline text-sm">
              {enroll.action}
            </button>
          </div>
        ))}
      </div>
      
      {/* Table view for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[1px] border-white/50 rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-[#DDDDDD] text-black/70">
            <tr>
              <th scope="col" className="px-6 py-3">Names</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Program</th>
              <th scope="col" className="px-6 py-3">status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enroll, index) => (
              <tr key={index} className="text-white/90 border-b border-gray-700">
                <td className="px-6 py-6 font-medium">{enroll.name}</td>
                <td className="px-6 py-6">{enroll.email}</td>
                <td className="px-6 py-6">{enroll.program}</td>
                <td className="px-6 py-6">
                <span className={`px-2 py-1 rounded-full text-xs ${enroll.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {enroll.status}
                  </span>
                </td>
                <td className="px-6 py-6 text-blue-500 hover:underline cursor-pointer">{enroll.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployEnrollment;