"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SearchBar from "./SearchBar";
import CoursesSection from "./Courses";
import InstitutesNearYou from "./InstitutesNearYou";
import TrainingPrograms, { defaultPrograms } from "./TrainingPrograms";
import { myCourses, topPicksCourses, trendingCourses } from "./Courses";

const MyCourses = () => {
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [isGuestRoute, setIsGuestRoute] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsGuestRoute(pathname.includes('/guest/courses'));
    }, [pathname]);

    const handleSearch = (query) => {
        setSearchPerformed(true);
        const results = defaultPrograms.filter(program => 
            program.title.toLowerCase().includes(query.toLowerCase()) ||
            program.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className="relative">
            <SearchBar onSearch={handleSearch} />
            {!searchPerformed ? (
                <>
                    {!isGuestRoute && (
                        <div className="mt-12 ">
                            <CoursesSection heading="My courses" courseData={myCourses} />
                        </div>
                    )}
                    <div className="max-w-[60rem] px-4 py-[75px] mx-auto">
                        <InstitutesNearYou />
                    </div>
                    <div className="space-y-10 mt-12">
                        <CoursesSection heading="Top picks for you" courseData={topPicksCourses} />
                        <CoursesSection heading="Trending now" courseData={trendingCourses} />
                    </div>
                </>
            ) : (
                <div>
                    {searchResults.length > 0 ? (
                        <TrainingPrograms programs={searchResults} />
                    ) : (
                        <div className="text-center text-white mt-10">
                            <p>Programs not available right now</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyCourses;