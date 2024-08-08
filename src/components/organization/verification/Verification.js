"use client"
import React, { useState, useEffect } from 'react';

const Verification = () => {
  const initialStudents = [
    { id: 1, name: 'Ali akther', email: 'aliali@gmail.com', status: 'Pending' },
    { id: 2, name: 'baber ahmed', email: 'Berkeleyhill@gmail.com', status: 'Enrolled' },
    { id: 3, name: 'amme waghar', email: 'SeatWashing12@gmail.com', status: 'Enrolled' },
    { id: 4, name: 'alea george', email: 'Camb534@gmail.com', status: 'Pending' },
    { id: 5, name: 'Mehdi raza', email: 'Massachusetts@gmail.com', status: 'Enrolled' },
    { id: 6, name: 'Ali akther', email: 'aliali@gmail.com', status: 'Pending' },
    { id: 7, name: 'baber ahmed', email: 'Berkeleyhill@gmail.com', status: 'Enrolled' },
    { id: 8, name: 'amme waghar', email: 'SeatWashing12@gmail.com', status: 'Enrolled' },
    { id: 9, name: 'alea george', email: 'Camb534@gmail.com', status: 'Pending' },
    { id: 10, name: 'Mehdi raza', email: 'Massachusetts@gmail.com', status: 'Enrolled' },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filteredStudents = initialStudents.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== 'All') {
      setStudents(filteredStudents.filter(student => student.status.toLowerCase() === filter.toLowerCase()));
    } else {
      setStudents(filteredStudents);
    }
  }, [searchTerm, filter]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  return (
    <div className="text-white py-32 max-w-[60rem] mx-auto px-4">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Certificate verification</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Students</button>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <input 
          type="text" 
          placeholder="Search for Students" 
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
          All({initialStudents.length})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Enrolled' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Enrolled')}
        >
          Enrolled({initialStudents.filter(student => student.status === 'Enrolled').length})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Pending' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Pending')}
        >
          Pending({initialStudents.filter(student => student.status === 'Pending').length})
        </span>
      </div>
      
      {/* Card view for smaller screens */}
      <div className="grid gap-4 sm:hidden">
        {students.map((student, index) => (
          <div key={index} className="rounded-lg p-4 space-y-2 bg-gray-800">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{student.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${student.status === 'Pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {student.status}
              </span>
            </div>
            <p className="text-sm text-gray-400">Email: {student.email}</p>
            <button className="text-blue-500 text-sm">
              {student.status === 'Pending' ? 'Approve/Reject' : 'View details'}
            </button>
          </div>
        ))}
      </div>
      
      {/* Table view for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[1px] border-white/50 rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Names</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-6 py-4 font-medium">{student.name}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-1.5 rounded-lg text-xs ${student.status === 'Pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-500">
                    {student.status === 'Pending' ? 'Approve/Reject' : 'View details'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Verification;