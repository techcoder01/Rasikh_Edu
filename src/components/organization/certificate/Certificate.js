"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OrgCertificate = () => {
  const initialCertificates = [
    { id: '1', name: 'Ali', program: 'Data Science Basics', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '2', name: 'sara', program: 'Data Science Basics', status: 'Issued', certId: '1656652', action: 'Issued on 1/1/2022' },
    { id: '3', name: 'dawwod', program: 'sales mngement', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '4', name: 'elli', program: 'bussines administration', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '5', name: 'cuci', program: 'cs Fundamentals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '6', name: 'ali', program: 'cs Fundamentals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '7', name: 'ali', program: 'cs Fundamentals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '8', name: 'ali', program: 'cs Fundamentals', status: 'Issued', certId: '1165665', action: 'Issued on 1/1/2022' },
    { id: '9', name: 'ali', program: 'cs Fundamentals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2022' },
    { id: '10', name: 'fizaa', program: 'cs Fundamentals', status: 'Issued', certId: '165665', action: 'Issued on 1/1/2002' },
  ];

  const [certificates, setCertificates] = useState(initialCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let filteredCertificates = initialCertificates;

    if (searchTerm) {
      filteredCertificates = filteredCertificates.filter(cert => 
        cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.certId.includes(searchTerm)
      );
    }

    if (filter !== 'All') {
      filteredCertificates = filteredCertificates.filter(cert => 
        cert.status.toLowerCase() === filter.toLowerCase()
      );
    }

    setCertificates(filteredCertificates);
  }, [searchTerm, filter]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const issuedCount = initialCertificates.filter(cert => cert.status === 'Issued').length;
  const pendingCount = initialCertificates.filter(cert => cert.status === 'Pending').length;
  const totalCount = initialCertificates.length;

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
          All({totalCount})
        </span>
        <span 
          className={`cursor-pointer ${filter === 'Issued' ? 'text-blue-500 border-b-2 border-blue-500' : ''} whitespace-nowrap`}
          onClick={() => handleFilter('Issued')}
        >
          Issued({issuedCount})
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
        {certificates.map((cert, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold">{cert.name}</span>
              <span className="px-2 py-1 rounded-full text-xs bg-gray-600">
                {cert.status}
              </span>
            </div>
            <p className="text-sm text-gray-400">Program: {cert.program}</p>
            <p className="text-sm text-gray-400">Certificate ID: {cert.certId}</p>
            <p className="text-sm text-gray-400">{cert.action}</p>
          </div>
        ))}
      </div>
      
      {/* Table view for larger screens */}
      <div className="hidden sm:block overflow-x-auto border-[1px] border-white/50 rounded-xl">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-[#DDDDDD] text-black/70">
            <tr>
              <th scope="col" className="px-6 py-3">Employ Name</th>
              <th scope="col" className="px-6 py-3">Program name</th>
              <th scope="col" className="px-6 py-3">status</th>
              <th scope="col" className="px-6 py-3">Certificate ID</th>
              <th scope="col" className="px-6 py-3">Actions date</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert, index) => (
              <tr key={index} className="text-white/90 border-b border-gray-700">
                <td className="px-6 py-6 font-medium">{cert.name}</td>
                <td className="px-6 py-6">{cert.program}</td>
                <td className="px-6 py-6">
                  <span className="px-6 py-1.5 rounded-xl text-xs bg-gray-600">
                    {cert.status}
                  </span>
                </td>
                <td className="px-6 py-6">{cert.certId}</td>
                <td className="px-6 py-6 text-gray-200">{cert.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrgCertificate;