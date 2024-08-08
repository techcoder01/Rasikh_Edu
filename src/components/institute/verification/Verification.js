"use client"
import React, { useState, useEffect } from 'react';

const Verification = () => {
  const initialCertificates = [
    { id: '563856', name: 'Ali Raza', certificateId: '9677998', status: 'Pending', date: '1/1/2002' },
    { id: '563856', name: 'sara ahmed', certificateId: '967799', status: 'pending', date: '1/1/2002' },
    { id: '563856', name: 'dawwod', certificateId: '967799', status: 'pending', date: '1/1/2002' },
    { id: '563856', name: 'elli clooney', certificateId: '967799', status: 'pending', date: '1/1/2002e' },
    { id: '563856', name: 'cuci hitler', certificateId: '967799', status: 'pending', date: '1/1/2002' },
    { id: '563856', name: 'ali raza', certificateId: '967799', status: 'verified', date: '1/1/2002' },
    { id: '563856', name: 'ali gul pir', certificateId: '967799', status: 'verified', date: '1/1/2002' },
    { id: '563856', name: 'ali sheikh', certificateId: '967799', status: 'verified', date: '1/1/2002' },
    { id: '563856', name: 'ali ahmed', certificateId: '967799', status: 'verified', date: '1/1/2002' },
    { id: '563856', name: 'fizza ali', certificateId: '967799', status: 'verified', date: '1/1/2002' },
  ];

  const [certificates, setCertificates] = useState(initialCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filteredCertificates = initialCertificates.filter(cert => 
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certificateId.includes(searchTerm)
    );

    if (filter !== 'All') {
      setCertificates(filteredCertificates.filter(cert => cert.status.toLowerCase() === filter.toLowerCase()));
    } else {
      setCertificates(filteredCertificates);
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
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Certificate verification</h1>
      
      <div className="mb-4 sm:mb-6">
        <input 
          type="text" 
          placeholder="Search for Certificate to verify" 
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
          All({initialCertificates.length})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'verified' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('verified')}
        >
          verified({initialCertificates.filter(cert => cert.status.toLowerCase() === 'verified').length})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Pending' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Pending')}
        >
          Pending({initialCertificates.filter(cert => cert.status.toLowerCase() === 'pending').length})
        </span>
      </div>
      
      {/* Card view for smaller screens */}
      <div className="grid gap-4 sm:hidden">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg p-4 space-y-2 bg-gray-800">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{cert.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${cert.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {cert.status}
              </span>
            </div>
            <p className="text-sm text-gray-400">ID: {cert.id}</p>
            <p className="text-sm text-gray-400">Certificate ID: {cert.certificateId}</p>
            <p className="text-sm text-gray-400">Date: {cert.date}</p>
          </div>
        ))}
      </div>
      
      {/* Table view for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[1px] border-white/50 rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-700 text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">certificate ID</th>
              <th scope="col" className="px-6 py-3">status</th>
              <th scope="col" className="px-6 py-3">date</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-6 py-4">{cert.id}</td>
                <td className="px-6 py-4 font-medium">{cert.name}</td>
                <td className="px-6 py-4">{cert.certificateId}</td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-1.5 rounded-lg text-xs ${cert.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                    {cert.status}
                  </span>
                </td>
                <td className="px-6 py-4">{cert.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Verification;