"use client"
import React, { useState } from 'react';

const Documentation = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Course syllabus.pdf', uploadDate: '9/10/2024' },
    { id: 2, name: 'faculty Qualification.pdf', uploadDate: '9/10/2024' },
    { id: 3, name: 'HEC registered number', uploadDate: '9/10/2024' },
  ]);

  const [newDocumentDescription, setNewDocumentDescription] = useState('');

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('Uploading document with description:', newDocumentDescription);
    setNewDocumentDescription('');
  };

  return (
    <div className=" text-white py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Documentation</h1>
      
      <h2 className="text-2xl font-semibold mb-4">My documents</h2>
      
      <div className="space-y-2 mb-8">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
              <div>
                <p className="font-semibold">{doc.name}</p>
                <p className="text-sm text-gray-400">Uploaded on {doc.uploadDate}</p>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-400">Veiw</button>
          </div>
        ))}
      </div>
      
      <div className="bg-[#2D2525] p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Upload document</h3>
        <textarea
          className="w-full bg-transparent outline-none  placeholder:text-white  p-3 rounded-lg mb-4"
          rows="2"
          placeholder="Please provide a brief description of document"
          value={newDocumentDescription}
          onChange={(e) => setNewDocumentDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;