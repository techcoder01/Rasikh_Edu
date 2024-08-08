"use client"
import React, { useState, useEffect } from 'react';

const Certificate = () => {
  const initialCertificates = [
    { id: '563856', name: 'Ali Raza', program: 'Data Science Basics', status: 'Pending', certId: '165665', action: 'reject/Approve' },
    { id: '563856', name: 'sara ahmed', program: 'Data Science Basics', status: 'pending', certId: '1656652', action: 'reject/Approve' },
    { id: '563856', name: 'dawwod', program: 'sales mngement', status: 'pending', certId: '165665', action: 'reject/Approve' },
    { id: '563856', name: 'elli clooney', program: 'bussines administration', status: 'pending', certId: '165665', action: 'reject/Approve' },
    { id: '563856', name: 'cuci hitler', program: 'cs Fundementails', status: 'pending', certId: '165665', action: 'reject/Approve' },
    { id: '563856', name: 'ali raza', program: 'cs Fundementals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '563856', name: 'ali gul pir', program: 'cs Fundementals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '563856', name: 'ali sheikh', program: 'cs Fundementals', status: 'Issued', certId: '1165665', action: 'Issued on 1/1/2022' },
    { id: '563856', name: 'ali ahmed', program: 'cs Fundementals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '563856', name: 'fizza ali', program: 'cs Fundementals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
  ];

  const [certificates, setCertificates] = useState(initialCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const filteredCertificates = initialCertificates.filter(cert => 
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certId.includes(searchTerm)
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
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Certificate</h1>
      
      <div className="mb-4 sm:mb-6">
        <input 
          type="text" 
          placeholder="Search for Certificate" 
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
          className={`cursor-pointer ${filter === 'Issued' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Issued')}
        >
          Issued({initialCertificates.filter(cert => cert.status.toLowerCase() === 'issued').length})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Pending' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Pending')}
        >
          Pending({initialCertificates.filter(cert => cert.status.toLowerCase() === 'pending').length})
        </span>
      </div>
      
      {/* Card view for smaller screens */}
      <div className="grid gap-4 sm:grid-cols-2 sm:hidden">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg p-4 space-y-2 bg-gray-800">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{cert.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${cert.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {cert.status}
              </span>
            </div>
            <p className="text-sm text-gray-400">ID: {cert.id}</p>
            <p className="text-sm text-gray-400">Program: {cert.program}</p>
            <p className="text-sm text-gray-400">Certificate ID: {cert.certId}</p>
            <div className="flex justify-between items-center pt-2">
              <span className={`text-sm ${cert.status.toLowerCase() === 'pending' ? 'text-blue-500' : 'text-gray-200'}`}>{cert.action}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Table view for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[1px] border-white/50 rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-[#DDDDDD] text-black/70">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Program</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Certificate ID</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index} className="text-white/90 border-b border-gray-700">
                <td className="px-6 py-6 font-medium">{cert.name}</td>
                <td className="px-6 py-6">{cert.id}</td>
                <td className="px-6 py-6">{cert.program}</td>
                <td className="px-6 py-6">
                  <span className={`px-6 py-1.5 rounded-xl text-xs ${cert.status.toLowerCase() === 'pending' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                    {cert.status}
                  </span>
                </td>
                <td className="px-6 py-6">{cert.certId}</td>
                <td className={`px-6 py-6 ${cert.status.toLowerCase() === 'pending' ? 'text-blue-500' : 'text-gray-200'}`}>{cert.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificate;