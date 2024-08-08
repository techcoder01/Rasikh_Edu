"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import TabBar from './TabBar';

const EditProfile = () => {
  const [orgName, setOrgName] = useState('Xyz Institute');
  const [website, setWebsite] = useState('www.orinization.com');
  const [bgImage, setBgImage] = useState('/google.jpg');
  const [logo, setLogo] = useState('/left.png');
  const bgInputRef = useRef(null);

  const handleBgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBgImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerBgInput = () => {
    if (bgInputRef.current) {
      bgInputRef.current.click();
    }
  };

  return (
    <div className="max-w-[60rem] mx-auto py-28 text-white px-4">
      <h1 className="text-4xl font-bold mb-9">Edit Profile</h1>
      <div className="relative w-full h-48 rounded-2xl overflow-hidden">
        <Image src={bgImage} layout="fill" objectFit="cover" alt="Background" />
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent"></div>
        <button 
          onClick={triggerBgInput}
          className="absolute bottom-2 right-4 bg-blue-500 text-white p-2 rounded-full z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <input 
          ref={bgInputRef}
          type="file" 
          className="hidden" 
          onChange={handleBgChange} 
          accept="image/*" 
        />
      </div>
      <div className="relative -mt-12 ml-4 flex items-end">
        <div className="relative w-24 h-24 mr-5">
          <Image src={logo} layout="fill" objectFit="cover" alt="Logo" className="rounded-full border-2 border-black" />
          <label htmlFor="logo-input" className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </label>
          <input id="logo-input" type="file" className="hidden" onChange={handleLogoChange} accept="image/*" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{orgName}</h2>
          <p className="text-blue-400">{website}</p>
        </div>
      </div>

      <div className='py-5'>
        <TabBar/>
      </div>
    </div>
  );
};

export default EditProfile;