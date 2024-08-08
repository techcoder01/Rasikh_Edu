"use client";

import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState, useRef, useEffect } from 'react';


// components/Card.js
const Card = ({ children }) => {
    return (
        <div className="bg-[#60666C] bg-opacity-[22%] rounded-3xl p-6">
            {children}
        </div>
    );
};


// components/InputField.js
const InputField = ({ label, defaultValue }) => {
    return (
        <div className="mb-4">
            <label className="block text-white text-sm mb-2">{label}</label>
            <input
                type="text"
                defaultValue={defaultValue}
                className="w-full bg-[#3A3A3A] text-white rounded-lg px-4 py-2 border border-white/100"
            />
        </div>
    );
};

// components/TextArea.js
const TextArea = ({ label, defaultValue }) => {
    return (
        <div className="mb-4">
            <label className="block text-white text-sm mb-2">{label}</label>
            <textarea
                defaultValue={defaultValue}
                rows={4}
                className="w-full bg-[#3A3A3A] text-white rounded-lg px-4 py-2 border border-white/100"
            />
        </div>
    );
};

// components/Button.js
const Button = ({ children, variant = 'primary', onClick }) => {
    const baseClasses = "px-8 py-0 rounded-lg font-bold";
    const variantClasses = {
        primary: "bg-blue-500 text-3xl pb-2 text-white hover:bg-blue-600",
        secondary: "bg-gray-300 text-xl text-gray-800 hover:bg-gray-400"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const NewsItem = ({ item, index, onEdit }) => (
    <div className="flex-shrink-0 sm:w-60 w-72 rounded-xl p-3 border-[1.5px] border-gray-400">
        <div className="mb-2 relative h-32 overflow-hidden rounded-lg">
            <Image src={item.imageUrl || "/free.png"} alt={item.title} layout="fill" objectFit="cover" />
        </div>
        <p className="text-sm mb-1">{item.title}</p>
        <p className="text-xs text-gray-400 mb-2">{item.details}</p>
        <button
            className="bg-[#3A3A3A] text-sm px-4 py-1 rounded-lg"
            onClick={() => onEdit(index)}
        >
            Edit
        </button>
    </div>
);

const NewsComponent = ({
    title,
    subtitle,
    subtitle2,
    initialNewsItems,
    NewsItemComponent = NewsItem// Add this new prop
}) => {
    const [newsItems, setNewsItems] = useState(initialNewsItems);
    const scrollContainerRef = useRef(null);
    const [showLeftShadow, setShowLeftShadow] = useState(false);
    const [showRightShadow, setShowRightShadow] = useState(true);
    const [newItem, setNewItem] = useState({ title: '', details: '', imageUrl: '/free.png' });
    const [previewImage, setPreviewImage] = useState(null);

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftShadow(container.scrollLeft > 0);
            setShowRightShadow(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 1
            );
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleAddNews = () => {
        if (newItem.title && newItem.details) {
            const itemToAdd = { ...newItem, imageUrl: previewImage || newItem.imageUrl };
            setNewsItems(prevItems => [...prevItems, itemToAdd]);
            setNewItem({ title: '', details: '', imageUrl: '/free.png' });
            setPreviewImage(null);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        console.log('Saving news items:', newsItems);
        // Here you would typically send the newsItems to your backend
    };

    const handleEditNews = (index) => {
        console.log(`Editing news item at index ${index}`);
        // Add your edit logic here
    };

    return (
        <div className="bg-black text-white p-0">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>

            <div className="bg-[#60666C] bg-opacity-[22%] rounded-3xl p-3 mb-6 relative">
                <h2 className="p-4 font-bold text-xl">{subtitle}</h2>

                <div className="relative overflow-hidden p-2">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {newsItems.map((item, index) => (
                            <NewsItemComponent
                                key={index}
                                item={item}
                                index={index}
                                onEdit={handleEditNews}
                            />
                        ))}
                    </div>

                    {showLeftShadow && (
                        <>
                            <div className="absolute top-0 left-0 bottom-4 w-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                            >
                                <ChevronLeftIcon className="w-12 h-12 text-white" />
                            </button>
                        </>
                    )}

                    {showRightShadow && (
                        <>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2"
                            >
                                <ChevronRightIcon className="w-10 h-10 text-white" />
                            </button>
                            <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                        </>
                    )}
                </div>

                <h2 className="p-4 font-bold text-xl">{subtitle2}</h2>
                <Card>
                    <InputField
                        label="title"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    />
                    <InputField
                        label="details"
                        value={newItem.details}
                        onChange={(e) => setNewItem({ ...newItem, details: e.target.value })}
                    />
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">add media</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="imageUpload"
                        />
                        <label htmlFor="imageUpload" className="w-full bg-[#6d86df] text-white text-center py-3 rounded-lg cursor-pointer block">
                            Upload photos
                        </label>
                        {previewImage && (
                            <div className="mt-2 relative h-32 overflow-hidden rounded-lg">
                                <Image src={previewImage} alt="Preview" layout="fill" objectFit="cover" />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end space-x-3">
                        <Button variant="primary" onClick={handleAddNews}>+</Button>
                        <Button variant="secondary" onClick={handleSave}>Save</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export { Card };
export default NewsComponent;