"use client";
import { useState } from 'react';

const categories = [
  'Design', 'Product Management', 'Data Science',
  'Software Engineering', 'Marketing', 'Business', 'Personal Growth'
];

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="text-white max-w-[60rem] mx-auto pt-[110px] px-4">
      <h1 className="text-4xl font-bold mb-12">
        Discover your next learning adventure
      </h1>
      <p className="text-xl mb-6">What do you want to learn?</p>
     
      <form onSubmit={handleSubmit} className="relative mb-8">
        <input
          type="text"
          placeholder="Search for courses, paths and more"
          className="w-full bg-gray-800 rounded-lg py-3 px-4 pr-10 text-white placeholder-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="absolute right-3 top-3">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
     
      <h2 className="text-xl font-semibold mb-4">Browse by category</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 text-sm"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}