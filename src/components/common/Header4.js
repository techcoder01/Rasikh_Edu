'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header4 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/organization", text: "Dashboard" },
    { href: "/organization/edit-profile", text: "Edit Profile" },
    { href: "/organization/certificate", text: "Certificate" },
    { href: "/organization/enrollment", text: "Employ Enrollment" },
    { href: "/organization/trainings", text: "Training Programs" },
    { href: "/organization/verification", text: "Verification" },
  ];

  return (
    <>
      <header className="text-white bg-black/70 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-6">
            <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/organization">
            <Image src="/logo.png" alt="Rasikh Logo" width={120} height={40} className="filter brightness-150" />
            </Link>
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className={`hover:text-gray-200 py-1 h-fit px-2 rounded-lg transition duration-300 ${pathname === link.href ? 'bg-[#3F4245] text-white' : 'hover:bg-[#3F4245]'}`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-gray-700 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <Image src="/user.jpg" alt="User Avatar" width={32} height={32} />
            </div>
          </div>
        </nav>
      </header>

      {/* Android-style Sidebar Menu */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#121212] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Rasikh Logo" width={120} height={40} className="filter brightness-150" />
                <span className="font-semibold">Rasikh</span>
              </Link>
              <button onClick={() => setIsSidebarOpen(false)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className={`block px-4 py-2 text-white hover:bg-gray-700 transition duration-300 ${pathname === link.href ? 'bg-gray-700' : ''}`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header4;