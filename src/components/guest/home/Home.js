import Image from 'next/image';

export default function Body() {
    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            <div className='hidden md:block absolute left-0 top-8 w-full h-full'>
                <Image
                    src="/left.png"
                    alt="Left background shape"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left top"
                    className="scale-105 origin-top-left"
                />
            </div>
            <div className='hidden md:block md:absolute right-0 top-8 lg:w-1/4 md:w-[calc(100%-70%)] h-full'>
                <Image
                    src="/right.png"
                    alt="Right background shape"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right top"
                    className="scale-150 origin-top-right"
                />
            </div>

            {/* Content */}
            <div className="relative sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center text-white max-w-3xl mx-auto px-4 pt-[110px]">
                <h1 className="text-[40px] sm:text-[48px] max-w-2xl leading-[50px] font-bold mb-6">
                    Welcome to Rasikh        
                </h1>
                <p className="text-lg sm:text-[18px] max-w-md mb-12">
                    Your trusted source for blockchain-based educational certificate verification.
                </p>
                
                {/* Search Bar */}
                <div className="w-full max-w-md relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for an institution"
                            className="w-full py-3 px-4 pl-12 pr-20 rounded-full bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Search
                    </button>
                </div>
            </div>
        </main>
    );
}