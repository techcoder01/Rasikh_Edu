"use client"

import { useState } from 'react';

const VerifyDocumentGuest = () => {
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

        <div className="space-y-6">
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
          <p className='text-center text-lg font-semibold'>Or</p>
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
              className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 flex items-center justify-center space-x-2"
            >
              <span className='pb-[3px]'>scan QR</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7V5C3 3.89543 3.89543 3 5 3H7M17 3H19C20.1046 3 21 3.89543 21 5V7M21 17V19C21 20.1046 20.1046 21 19 21H17M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="7" y="13" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="13" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 13H17M13 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <button
            onClick={handleVerify}
            className="w-full px-4 py-2  bg-blue-500 hover:bg-blue-600 text-white rounded-lg  transition duration-300"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyDocumentGuest;