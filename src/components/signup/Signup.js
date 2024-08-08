"use client"
import { useState, useCallback } from 'react';

const OPTIONS = [
    { value: 'student', label: 'Student' },
    { value: 'institute', label: 'Institute' },
    { value: 'organization', label: 'Organization' },
];

const CustomSelect = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => setIsOpen(prev => !prev), []);

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
                            type="button"
                            className="w-full p-2 text-left hover:bg-gray-100 text-black"
                            onClick={() => {
                                onChange(optionValue);
                                setIsOpen(false);
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const InputField = ({ id, label, type, placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-bold text-gray-300 mb-2">{label}</label>
        <input id={id} type={type} placeholder={placeholder} className="w-full p-2 bg-white text-black rounded outline-none" />
    </div>
);

const Signup = () => {
    const [role, setRole] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-4xl py-24">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl font-bold mb-12 text-center">Signup</h1>
                        <form className="space-y-4">
                            <InputField id="email" label="Email" type="email" placeholder="Enter your Email" />
                            <InputField id="username" label="Username" type="text" placeholder="Choose your username" />
                            <InputField id="phone" label="Phone Number" type="tel" placeholder="Enter your phone number" />
                            <InputField id="password" label="Password" type="password" placeholder="Enter your password" />
                            <InputField id="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm your password" />
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                                <CustomSelect id="role" value={role} onChange={setRole} />
                            </div>
                            <button type="submit" className="w-full p-2 bg-blue-600 rounded">Get started</button>
                        </form>

                        <div className="mt-6 text-center">
                            <div className="text-gray-300 font-bold mb-4">OR</div>
                            <div className="text-2xl text-white font-bold mb-4">Sign up with</div>
                            <div className="flex justify-center items-center space-x-2">
                                <div className="mt-3 flex justify-center items-center space-x-2">
                                    <button className="p-2">
                                        <svg viewBox="0 0 24 24" width="36" height="36">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                    </button>
                                    <button className="p-2">
                                        <svg viewBox="0 0 23 23" width="36" height="36">
                                            <path fill="#f25022" d="M1 1h10v10H1z" />
                                            <path fill="#00a4ef" d="M1 12h10v10H1z" />
                                            <path fill="#7fba00" d="M12 1h10v10H12z" />
                                            <path fill="#ffb900" d="M12 12h10v10H12z" />
                                        </svg>
                                    </button>
                                    <button className="p-2">
                                        <svg viewBox="0 0 24 24" width="36" height="36">
                                            <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
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

export default Signup;