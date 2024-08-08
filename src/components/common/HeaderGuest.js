'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/guest", text: "Home" },
    { href: "/guest/institute", text: "Institute" },
    { href: "/guest/verification", text: "Verification" },
    { href: "/guest/courses", text: "Courses" },
  ];

  return (
    <>
      <header className="text-white bg-black/70 fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between max-w-5xl">
          <div className="flex items-center space-x-6">
            <Link href="/guest">
            <Image src="/logo.png" alt="Rasikh Logo" width={120} height={40} className="filter brightness-150" />
            </Link>

            {/* Search Bar */}
            <div className="relative hidden sm:flex">
              <input
                type="text"
                placeholder="Search for institutes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#2a2a2a] text-white pl-8 pr-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="hidden md:flex space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`hover:text-gray-200 py-1 h-fit px-3 rounded-lg transition duration-300 ${pathname === link.href ? 'bg-[#3F4245] text-white' : 'hover:bg-[#3F4245]'}`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <button className='bg-[#1C85F2] text-white font-semibold px-4 py-1.5 rounded transition duration-300'>
                Login
              </button>
            </Link>
            <button className='bg-[#36393C] text-white font-semibold px-4 py-1.5 rounded transition duration-300'>
              Signup
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Android-style Sidebar Menu */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#121212] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <Link href="/guest" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Rasikh Logo" width={120} height={40} className="filter brightness-150" />
              </Link>
                          {/* Search Bar */}
              <button onClick={() => setIsSidebarOpen(false)} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto">
              <div className="relative py-4 mx-2 ">
              <input
                type="text"
                placeholder="Search for institutes"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#2a2a2a] text-white pl-8 pr-4 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </div>
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
            <Link href="/login">
              <button className='w-full bg-[#1C85F2] text-white font-semibold px-4 py-1.5 rounded transition duration-300 mb-2'>
                Login
              </button>
            </Link>
            <button className='w-full bg-[#36393C] text-white font-semibold px-4 py-1.5 rounded transition duration-300'>
              Signup
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

export default Header;