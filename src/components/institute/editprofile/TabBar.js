"use client";

import React, { useState } from 'react';
import NewsComponent from "./NewsComponent"
import Image from 'next/image';
const TabBar = () => {
    const [activeTab, setActiveTab] = useState('Basic Info');
    const [isOpen, setIsOpen] = useState(false);
    const tabs = ['Basic Info', 'Contact', 'News & Events', 'Events Timeline', 'Trainer Profiles', 'Courses', 'Additional Information'];

    const tabComponents = {
        'Basic Info': BasicInfo,
        'Contact': Contact,
        'News & Events': NewsAndEvents,
        'Events Timeline': EventsTimeline,
        'Trainer Profiles': TrainerProfiles,
        'Courses': Courses,
        'Additional Information': AdditionalInfo
    };

    return (
        <div className="text-white p-4 py-12">
            <div className="mb-8">
                <MobileDropdown activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isOpen} setIsOpen={setIsOpen} tabs={tabs} />
                <DesktopButtons activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            </div>
            {React.createElement(tabComponents[activeTab])}
        </div>
    );
};

const MobileDropdown = ({ activeTab, setActiveTab, isOpen, setIsOpen, tabs }) => (
    <div className="relative w-full md:hidden">
        <select
            className="w-full appearance-none bg-black text-white border-2 border-white/50 rounded-xl px-4 py-2 pr-8"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            {tabs.map((tab) => <option key={tab} value={tab}>{tab}</option>)}
        </select>
        <DropdownArrow isOpen={isOpen} />
    </div>
);

const DesktopButtons = ({ activeTab, setActiveTab, tabs }) => (
    <div className="hidden md:flex border-2 border-white/50 w-fit rounded-2xl overflow-hidden">
        {tabs.map((tab) => (
            <button
                key={tab}
                className={`px-[15px] py-2 rounded-lg ${activeTab === tab ? 'bg-gray-700' : ''}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
        ))}
    </div>
);

const DropdownArrow = ({ isOpen }) => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
        <svg
            className={`fill-current h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
    </div>
);

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

const BasicInfo = () => {
    return (
        <div className="p-1">
            <h1 className="text-4xl font-bold text-white mb-6">Basic information</h1>
            <Card>
                <InputField label="Orginization Name" defaultValue="Xyz Institude" />
                <InputField label="Industry" defaultValue="Technology" />
                <InputField label="Company Size" defaultValue="1000-1500 Employs" />
                <TextArea label="about us" defaultValue="good orinizatiob icennieen" />
            </Card>
        </div>
    );
};

const Contact = () => {
    return (
        <div className="p-1">
            <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
            <Card>
                <InputField label="Email" defaultValue="XYZOrgination@insti.com" />
                <InputField label="Number" defaultValue="0318272762" />
                <div>
                    <h3 className='mt-8 mb-4 text-xl font-medium p-[0.8px]'>Links</h3>
                </div>
                <InputField label="Website" defaultValue="www.institude.com" />
                <InputField label="Linked In" defaultValue="www.linkdin/xyzinstitude" />
                <TextArea label="Instagram" defaultValue="www.instagram/Xyzinstidude" />
                <div className="flex justify-end space-x-4 mt-6">
                    <Button variant="primary">+</Button>
                    <Button variant="secondary">Save</Button>
                </div>
            </Card>
        </div>
    );
};


const NewsAndEvents = () => {
    const initialNewsItems = [
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        // Add more initial items here if needed
    ];

    return (
        <div>
            <NewsComponent
                title="News and Events"
                subtitle="all events and news"
                subtitle2="Add News / Events"
                initialNewsItems={initialNewsItems}
            />
        </div>
    );
}




const EventsTimeline = () => {
    const initialNewsItems = [
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
        {
            title: "Introducing new courses",
            details: "Howard University played an Movement on a number of the...",
            imageUrl: "/free.png"
        },
    ];

    return (
        <div>
            <NewsComponent
                title="Events Timeline"
                subtitle="current events Timeline"
                subtitle2="Add New Events"
                initialNewsItems={initialNewsItems}
            />
        </div>
    );
}


const Trainer = ({ item, index }) => (
    <div key={index} className="flex-shrink-0 sm:w-36 w-52 rounded-xl p-3 border-[1.5px] border-gray-400">
        <div className="relative sm:h-32 h-44 overflow-hidden rounded-lg">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-fit"
            />
        </div>
        <div className="py-3 px-1">
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-xs text-blue-400 mt-2">{item.role}</p>
        </div>
    </div>
);

const TrainerProfiles = () => {
        const trainers = [
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            { name: "sir Ahmed Ali", role: "senior data scientist", image: "/user.jpg" },
            // Repeat to match the image (14 total trainers)
        ];
    
    return (
        <div>
            <NewsComponent
                title="Our Trainers"
                subtitle="Meet Our Expert Team"
                subtitle2="Add New Trainer"
                initialNewsItems={trainers}
                NewsItemComponent={Trainer}
            />
        </div>
    )
}

const Star = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const Course = ({ item }) => (
    <div className="flex-shrink-0 w-[22rem] border-2 py-3 pl-3 border-gray-800 rounded-lg overflow-hidden flex">
      <div className="w-20 h-20 relative rounded-xl overflow-hidden flex-shrink-0 my-auto">
        <Image 
          src={item.image} 
          alt={item.title} 
          layout="fill"
          objectFit="cover"
          className='object-cover'
        />
      </div>
      <div className="pl-3 pr-2 flex flex-col justify-between flex-grow">
        <div>
          <p className="text-xs text-blue-400 mb-1">by {item.institute}</p>
          <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
          <p className="text-xs text-gray-300 mb-2 ">{item.description}</p>
        </div>
        <div>
          <div className="flex items-center text-xs space-x-2">
            <span className="flex border border-1 border-gray-400 py-1 px-2 rounded-full">
              tutor: {item.tutor}
            </span>
            <div className="flex border border-1 border-gray-400 py-1 px-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < item.rating} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
);
const Courses = () => {
    const courses = [
        {
            institute: "xyz institute",
            title: "Blockchain Basic Training",
            description: "learn basics of blockchain from cs 105 and fundamentals of it as well in real world tasks",
            tutor: "ali hamad",
            rating: 3,
            image: "/bg.jpg"
        },
        {
            institute: "xyz institute",
            title: "Blockchain Basic Training",
            description: "learn basics of blockchain from cs 105 and fundamentals of it as well in real world tasks",
            tutor: "ali hamad",
            rating: 3,
            image: "/user.jpg"
        },
        {
            institute: "xyz institute",
            title: "Blockchain Basic Training",
            description: "learn basics of blockchain from cs 105 and fundamentals of it as well in real world tasks",
            tutor: "ali hamad",
            rating: 3,
            image: "/free.png"
        },
        {
            institute: "xyz institute",
            title: "Blockchain Basic Training",
            description: "learn basics of blockchain from cs 105 and fundamentals of it as well in real world tasks",
            tutor: "ali hamad",
            rating: 3,
            image: "/free.png"
        },
        {
            institute: "xyz institute",
            title: "Blockchain Basic Training",
            description: "learn basics of blockchain from cs 105 and fundamentals of it as well in real world tasks",
            tutor: "ali hamad",
            rating: 3,
            image: "/free.png"
        },
        // Add more courses here...
    ];

    return (
        <div>
            <NewsComponent
                title="Our Courses"
                subtitle="Explore Our Offerings"
                subtitle2="Add New Course"
                initialNewsItems={courses}
                NewsItemComponent={Course}
            />
        </div>
    )
}


const AdditionalInfo = () => {
    return (
        <div className="py-5">
            <h1 className="text-4xl font-bold text-white mb-8">Additional information</h1>
            <Card>
                <h3 className='mt-2 mb-4 text-xl font-medium p-[0.8px]'>F.A.Q.S</h3>
                <InputField label="Question" defaultValue="Your Question" />
                <InputField label="Answer" defaultValue="Your Answer" />
                <div className="flex justify-end space-x-4 py-5">
                    <Button variant="primary">+</Button>
                    <Button variant="secondary">Save</Button>
                </div>
            </Card>
            <div className='mt-10'> 
            <Card>
                <h3 className='mt-2 mb-4 text-xl font-medium p-[0.8px]'>job Opportinuties</h3>
                <InputField label="job title" defaultValue="CTO" />
                <InputField label="requrements" defaultValue="Your Requirement" />
                <div className="flex justify-end space-x-4 py-5">
                    <Button variant="primary">+</Button>
                    <Button variant="secondary">Save</Button>
                </div>
            </Card>
            </div>
            <div className='mt-10'> 
            <Card>
                <h3 className='mt-2 mb-4 text-xl font-medium p-[0.8px]'>community engagement</h3>
                <InputField label="title" defaultValue="CTO" />
                <InputField label="description" defaultValue="Your Community Engagement" />
                <div className="flex justify-end space-x-4 py-5">
                    <Button variant="primary">+</Button>
                    <Button variant="secondary">Save</Button>
                </div>
            </Card>
            </div>
            <div className='mt-10'> 
            <Card>
                <h3 className='mt-2 mb-4 text-xl font-medium p-[0.8px]'>Student support Program</h3>
                <InputField label="title" defaultValue="Title" />
                <InputField label="description" defaultValue="Your Description" />
                <div className="flex justify-end space-x-4 py-5">
                    <Button variant="primary">+</Button>
                    <Button variant="secondary">Save</Button>
                </div>
            </Card>
            </div>
        </div>
    );
};


export default TabBar;