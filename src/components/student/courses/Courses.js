"use client";
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

// Sample data for My Courses
const myCourses = [
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        duration: "2/10 hours",
        progress: 20
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        duration: "2/10 hours",
        progress: 70
    },
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        duration: "2/10 hours",
        progress: 20
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        duration: "2/10 hours",
        progress: 70
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        duration: "2/10 hours",
        progress: 70
    },
    // ... add more courses as needed
];

// Sample data for Top Picks
const topPicksCourses = [
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        level: "Intermediate",
        duration: "5h 30m"
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        level: "Beginner",
        duration: "5h 30m"
    },
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        level: "Intermediate",
        duration: "5h 30m"
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        level: "Beginner",
        duration: "5h 30m"
    },
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        level: "Intermediate",
        duration: "5h 30m"
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        level: "Beginner",
        duration: "5h 30m"
    },
    {
        title: "Mastering Art of Color",
        image: "/free.png",
        level: "Intermediate",
        duration: "5h 30m"
    },
    {
        title: "Design Thinking for Beginners",
        image: "/free.png",
        level: "Beginner",
        duration: "5h 30m"
    },
    // ... add more courses as needed
];

// Sample data for Trending Now
const trendingCourses = [
    {
        title: "The Product Manager's Playbook",
        image: "/free.png",
        level: "Intermediate",
        duration: "8h 45m"
    },
    {
        title: "Data Science: from Theory to Practice",
        image: "/free.png",
        level: "Advanced",
        duration: "10h 20m"
    },
    {
        title: "Data Science: from Theory to Practice",
        image: "/free.png",
        level: "Advanced",
        duration: "10h 20m"
    },
    {
        title: "Data Science: from Theory to Practice",
        image: "/free.png",
        level: "Advanced",
        duration: "10h 20m"
    },
    {
        title: "Data Science: from Theory to Practice",
        image: "/free.png",
        level: "Advanced",
        duration: "10h 20m"
    },
    {
        title: "Data Science: from Theory to Practice",
        image: "/free.png",
        level: "Advanced",
        duration: "10h 20m"
    },
    // ... add more courses as needed
];

const CourseCard = ({ course }) => (
    <div className="flex flex-col text-white rounded-lg overflow-hidden shadow-md">
        <div className="relative w-full pt-[56.25%]">
            <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="contain"
                className='absolute top-0 left-0 w-full h-full'
            />
        </div>
        <div className="p-2">
            <h3 className="font-bold text-sm mb-5">{course.title}</h3>
            <p className="text-sm text-white/85 mb-2">{course.duration}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                ></div>
            </div>
            <p className="text-sm text-white/85 mt-1">{course.progress}% Completed</p>
        </div>
    </div>
);

const TopPicksCard = ({ course }) => (
    <div className="rounded-lg overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
        <div className="p-2">
            <h3 className="text-[13px] font-bold text-white">{course.title}</h3>
            <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span>{course.level}</span>
                <span className='font-extrabold text-md '>●</span>
                <span>{course.duration}</span>
            </div>
        </div>
    </div>
);

const CoursesSection = ({ heading = "My courses", courseData = myCourses }) => {
    const [startIndex, setStartIndex] = useState(0);
  
    const visibleCourses = useMemo(() => {
        const slicedCourses = courseData.slice(startIndex, startIndex + 5);
        const fillerCount = 5 - slicedCourses.length;
        return [
            ...slicedCourses,
            ...Array(fillerCount).fill({ title: "", image: "/placeholder.png", duration: "", progress: 0, level: "" })
        ];
    }, [startIndex, courseData]);

    const nextCourse = () => {
        if (startIndex + 5 < courseData.length) {
            setStartIndex(startIndex + 1);
        }
    };
  
    const prevCourse = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
  
    const showLeftArrow = startIndex > 0;
    const showRightArrow = startIndex + 5 < courseData.length;
    const showArrows = courseData.length > 0;

    const CardComponent = heading === "My courses" ? CourseCard : TopPicksCard;

    return (
        <section className="relative">
            <div className="max-w-[60rem] mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">{heading}</h2>
                    {showArrows && (
                        <div className="flex items-center space-x-2 lg:hidden">
                            {showLeftArrow && (
                                <button onClick={prevCourse}>
                                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                                </button>
                            )}
                            {showRightArrow && (
                                <button onClick={nextCourse}>
                                    <ChevronRightIcon className="w-6 h-6 text-white" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {visibleCourses.map((course, index) => (
                        <CardComponent key={index} course={course} />
                    ))}
                </div>
            </div>
            {showArrows && (
                <>
                    {showLeftArrow && (
                        <button 
                            onClick={prevCourse} 
                            className="absolute left-[8%] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
                        >
                            <ChevronLeftIcon className="w-8 h-8 text-white" />
                        </button>
                    )}
                    {showRightArrow && (
                        <button 
                            onClick={nextCourse} 
                            className="absolute right-[8%] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
                        >
                            <ChevronRightIcon className="w-8 h-8 text-white" />
                        </button>
                    )}
                </>
            )}
        </section>
    );
};


export { myCourses , topPicksCourses , trendingCourses }
export default CoursesSection;