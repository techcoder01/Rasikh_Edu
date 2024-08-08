"use client"

import { useState } from 'react';

const VerifyDocument = () => {
  const [certificateId, setCertificateId] = useState('');
  const [file, setFile] = useState(null);

  const handleCertificateIdChange = (e) => {
    setCertificateId(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleVerify = () => {
    // Implement your verification logic here
    console.log('Verifying:', { certificateId, file });
    // You would typically send this data to your backend for verification
  };

  return (
    <div className=" text-white max-w-[60rem] py-28 mx-auto flex items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-4xl font-bold mb-2 text-center">Verify your documents</h1>
        <p className="text-gray-400 mb-8 text-center">for students and guests</p>
        
        <div className="space-y-10">
          <div>
            <label htmlFor="certificateId" className="block text-sm font-medium mb-2 ">
              Certificate Id
            </label>
            <input
              type="text"
              id="certificateId"
              className="w-full px-4 py-2 rounded-lg bg-white text-black  "
              placeholder="Enter your Certificate Id"
              value={certificateId}
              onChange={handleCertificateIdChange}
            />
          </div>
          
          <div>
            <label htmlFor="document" className="sr-only">
              Upload your document
            </label>
            <input
              type="file"
              id="document"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={() => document.getElementById('document').click()}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Upload your document
            </button>
          </div>
          
          <button
            onClick={handleVerify}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyDocument;