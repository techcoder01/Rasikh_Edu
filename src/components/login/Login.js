"use client"
import { useState, useCallback } from 'react';

const OPTIONS = [
  { value: 'student', label: 'Student' },
  { value: 'institute', label: 'Institute' },
  { value: 'organiztion', label: 'Organization' },
];

const CustomSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

  const handleOptionClick = useCallback((optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  }, [onChange]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full p-2 px-3 bg-white text-black rounded flex items-center justify-between"
      >
        {value || "Select your role"}
        <svg className={`w-6 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded shadow-lg">
          {OPTIONS.map(({ value: optionValue, label }) => (
            <button
              key={optionValue}
              className="w-full p-2 text-left hover:bg-gray-100 text-black"
              onClick={() => handleOptionClick(optionValue)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Login = () => {
    const [role, setRole] = useState('');
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-4xl py-24">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl font-bold mb-12 text-center">Login</h1>
                        <form className="space-y-4">
                            <input type="email" placeholder="Email or Username" className="w-full p-2 bg-white text-black rounded outline-none" />
                            <input type="password" placeholder="Enter Your Password" className="w-full p-2 bg-white text-black rounded outline-none" />
                            <CustomSelect value={role} onChange={setRole} />
                            <button type="submit" className="w-full p-2 bg-blue-600 rounded">Get started</button>
                        </form>
                        
                        <div className="mt-4 text-center text-gray-500">OR</div>
                        
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button className="p-2 bg-gray-800 rounded">Signup</button>
                            <button className="p-2 bg-gray-800 rounded">Log in as a Guest</button>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 py-4">
                        <h2 className="text-2xl font-bold mb-6">Security Features</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="border border-blue-500 rounded-lg p-4">
                                    <div className="flex-col items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span className="font-semibold">Identity Verified</span>
                                    </div>
                                    <p className="text-sm text-gray-400">Verified User information</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;