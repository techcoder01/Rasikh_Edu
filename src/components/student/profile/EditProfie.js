"use client";

import { useState } from 'react';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-3">{label}</label>
    <input {...props} className="w-full border-[1.4px] border-white/50 bg-gray-700 rounded px-3 py-2" />
  </div>
);

const formFields = {
  personal: ['preferredName', 'pronouns', 'location'],
  education: ['school', 'major', 'startingYear', 'graduationYear'],
  links: ['portfolio', 'linkedin', 'github']
};

const EditProfile = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };

  return (
    <div className=" text-white py-28 max-w-[60rem] mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>
      
      <div className="bg-[#5C626A] rounded-lg p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={formData.profileImageUrl || "/user.jpg"} alt="Profile" width={50} height={50} className="rounded-full mr-4" />
          <div>
            <h2 className="font-bold">{formData.preferredName}</h2>
            <p className="text-sm text-white/80">id: {formData.id}</p>
          </div>
        </div>
        <div className='bg-white p-1.5 m-2  rounded-md'>
        <QRCodeSVG value={`https://rakeshedu.vercel.app/profile/${formData.id}`} size={40} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.entries(formFields).map(([section, fields]) => (
          <section key={section}>
            <h3 className="text-xl font-semibold my-6">{section.charAt(0).toUpperCase() + section.slice(1)} Information</h3>
            <div className="space-y-6">
              {fields.map(field => (
                <Input key={field} label={field} name={field} value={formData[field]} onChange={handleChange} />
              ))}
              {section === 'personal' && (
                <div>
                  <label className="block text-sm font-medium mb-3">Bio</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} rows="4" className="w-full border-[1.4px]  border-white/50 bg-gray-700 rounded px-3 py-2" />
                </div>
              )}
            </div>
          </section>
        ))}
        <div className='flex justify-end p-3'>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Save
        </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;