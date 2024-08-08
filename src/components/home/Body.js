import Image from 'next/image';

export default function Body() {
  return (
    <main className="relative h-auto py-16 flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className='sm:hidden md:block absolute left-0 sm:top-8 top-[29.5rem] w-full h-full'>
        <Image
          src="/left.png"
          alt="Left background shape"
          layout="fill"
          objectFit="contain"
          objectPosition="left top"
          className="scale-x-150 sm:scale-105 origin-top-left"
        />
        </div>
      <div className='hidden md:block absolute right-0 top-8 lg:w-1/4 md:w-[calc(100%-70%)] h-full'>
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
      <div className="relative sm:text-center sm:flex sm:flex-col sm:justify-center sm:items-center text-white max-w-3xl mx-auto px-4 sm:pt-[110px] py-32">
        <h1 className="text-[40px] sm:text-[48px] max-w-2xl leading-[50px] font-bold mb-6">
          Welcome to the Educational Certificate Platform!
        </h1>
        <p className="text-lg sm:text-[18px] max-w-xl mb-12">
          Rasikh is a blockchain-based platform for educational certificate management 
          and verification. It allows students to easily share their academic credentials 
          with employers, schools, and other institutions.
        </p>
        <div className="sm:flex sm:justify-center space-x-4">
        <div className="relative sm:inline-flex ">
  <button className="relative sm:left-6 sm:bg-gradient-to-r from-purple-700 to-black bg-purple-700 text-white font-base py-3 pl-9 pr-12 rounded-full transition duration-300 hover:opacity-90">
    ENROLL NOW
  </button>
  <button className="flex z-10 mt-4 sm:mt-0 top-0 left-[calc(100%-20px)] bg-transparent text-white font-base py-3 px-8 rounded-full border border-white transition duration-300 hover:bg-white/10">
    VERIFY CERTIFICATE
  </button>
</div>
        </div>
      </div>
    </main>
  );
}