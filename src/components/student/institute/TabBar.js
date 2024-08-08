"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);
    const tabs = ['Home', 'About us', 'Trainers Profile', 'Courses', 'Contact', 'Additional Information'];

    const tabComponents = {
        'Home': NewsAndEvents,
        'About us': AboutUs,
        'Trainers Profile': TrainersProfile,
        'Courses': Courses,
        'Contact': Contact,
        'Additional Information': AdditionalInfo
    };

    return (
        <div className="text-white p-4 sm:p-8">
            <div className="mb-8">
                <MobileDropdown activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isOpen} setIsOpen={setIsOpen} tabs={tabs} />
                <DesktopButtons activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            </div>
            {React.createElement(tabComponents[activeTab])}
        </div>
    );
};

const MobileDropdown = ({ activeTab, setActiveTab, isOpen, setIsOpen, tabs }) => (
    <div className="relative w-full sm:hidden">
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
    <div className="hidden sm:flex border-2 border-white/50 w-fit rounded-2xl overflow-hidden">
        {tabs.map((tab) => (
            <button
                key={tab}
                className={`px-7 py-2 rounded-lg ${activeTab === tab ? 'bg-gray-700' : ''}`}
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

const ReviewCard = ({ name, date, rating, comment, likes, dislikes }) => (
    <div className="bg-[#17191A] rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Image src="/user.jpg" alt={name} width={40} height={40} className="rounded-full mr-4" />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="text-white mb-4">{comment}</p>
      <div className="flex items-center text-gray-400 space-x-6">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span>{likes}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
          </svg>
          <span>{dislikes}</span>
        </div>
      </div>
    </div>
  );


  const ReviewsSection = () => {
    const reviews = [
      {
        name: "Syed yashir",
        date: "Jul 15, 2022",
        rating: 5,
        comment: "Rasikh has been a game-changer for our students, allowing them to easily manage and share their academic credentials. The platform's use of blockchain technology provides an added layer of security and trust.",
        likes: 14
      },
      {
        name: "Umer Sheikh",
        date: "Jun 28, 2022",
        rating: 5,
        comment: "As an employer, I've been impressed by the instant verification process offered by Rasikh. It has helped us streamline our hiring process and reduce the risk of credential fraud.",
        likes: 12
      },
      {
        name: "mehdi",
        date: "Jun 15, 2022",
        rating: 5,
        comment: "I've found Rasikh to be a user-friendly and efficient solution for managing my academic records. The ability to instantly verify credentials has been particularly valuable for scholarship applications and other purposes.",
        likes: 10
      }
    ];
  
    return (
      <section className="">
        <div className="container py-[50px] sm:pt-28">
          <h2 className="text-2xl font-bold text-white mb-10">What People Are Saying</h2>
          <div className="space-y-11">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  

const NewsAndEvents = () => {
    return (
        <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">News and events</h1>

            {/* Introducing new courses */}
            <div className="rounded-lg p-4 md:p-6 mb-6 md:mb-8 border-2 border-gray-700">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-6">
                        <Image src="/free.png" alt="9000+ Free Courses" width={300} height={100} className="w-full" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-lg md:text-3xl font-bold mb-2">introducing new courses</h2>
                        <p className="text-xs md:text-sm">
                            Harvard University played an important role in the Civil Rights Movement on a
                            number of occasions. Alan Locke, chair of the Department of Philosophy and first
                            African American Rhodes Scholar, authored The New Negro (1925), which helped inspire the
                            Harlem Renaissance. He is considered the philosophical father of the New Negro movement.
                            As a matter of historical interest, we note that W.E.B. Du Bois, one of the Department of Political
                            Science's [?] beginning in 1933, mentored several university students
                        </p>
                    </div>
                </div>
            </div>

            {/* Certificate distribution event */}
            <div className="rounded-lg p-4 md:p-6 mb-6 md:mb-8 border-2 border-gray-700">
                <h2 className="text-lg md:text-xl font-bold mb-4">certificate distribution event</h2>
                <p className="text-xs md:text-sm mb-6">
                    Harvard University played an important role in the Civil Rights Movement on a number of occasions. Alan Locke, chair of the Department of
                    Philosophy and first African American Rhodes Scholar, authored The New Negro (1925), which helped inspire in the Harlem Renaissance.
                    The Harlem Renaissance, also known as the New Negro movement...
                </p>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5">
                    <Image src="/free.png" alt="Certificate Event 1" width={250} height={150} className="w-full rounded-lg" />
                    <Image src="/free.png" alt="Certificate Event 2" width={250} height={150} className="w-full rounded-lg" />
                    <Image src="/free.png" alt="Certificate Event 3" width={300} height={150} className="w-full md:w-fit rounded-lg" />
                </div>
            </div>

            {/* Upcoming events */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">upcoming events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-lg p-4 border-2 border-gray-700">
                        <Image src="/free.png" alt="9000+ Free Courses" width={200} height={100} className="w-full mb-2" />
                        <h3 className="text-base md:text-lg font-bold mt-2">introducing new courses</h3>
                        <p className="text-xs mt-1">
                            Harvard University played an important role in the Civil Rights Movement on a
                            number of the Department of Philosophy and...
                        </p>
                    </div>
                ))}
            </div>

            <div className='pt-[75px]'>
             <h2 className="text-2xl md:text-3xl font-bold mb-4">Reviews</h2>
                <AddReview />
                <ReviewsSection />
            </div>
        </div>

    );
};

const AddReview = () => {
    return (
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-20 rounded-lg overflow-hidden">
        <textarea 
          className="w-full h-36 bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none resize-none"
          placeholder="Enter a review here...."
        />
        <button 
          className="absolute bottom-3 right-3 bg-[#9382FF] text-white px-8 py-2 rounded-md hover:bg-indigo-500 transition-colors"
        >
          Submit
        </button>
      </div>
    );
  };
  



  const AboutUs = () => {
    return (
      <div className="bg-transparent text-white p-6 space-y-6">
        {/* About Us Section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">about us</h2>
          <p className="text-sm">
            Howard University played an important role in the Civil Rights Movement on a number of occasions. Alain Locke, chair of the Department of Philosophy and first African American Rhodes Scholar, authored The New Negro (1925), which helped to usher in the Harlem Renaissance. [16] Ralph Bunche, the first Nobel Peace Prize winner of African descent, served as chair of the Department of Political Science. [17] Beginning in 1942, Howard University students pioneered the "stool-sitting" technique of occupying stools at a local cafeteria which denied service to African Americans, blocking other customers waiting for service. [18] This tactic was to play a prominent role in the later Civil Rights Movement. By January 1943, students had begun to organize regular sit-ins and pickets around Washington, D.C. at cigar stores and cafeterias which refused to serve them because of their race. These protests continued until the fall of 1944.[19]
          </p>
        </div>
  
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total courses", value: "+150", change: "+25%" },
            { label: "Total courses", value: "+150", change: "+25%" },
            { label: "rating", value: "4.8", change: "+20%" },
            {
              label: "contact",
              details: [
                "020767894",
                "abc@xyz.com",
                "Plot no B-16, abc avenue"
              ]
            }
          ].map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium mb-2">{item.label}</h3>
              {item.value ? (
                <>
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-green-500 text-sm">{item.change}</p>
                </>
              ) : (
                <ul className="text-sm space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
  
        {/* Success Story Section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">our Success Story</h2>
          <p className="text-sm">
            Success story is a particular aspect of a rollout that is emphasized. Themes frequently correspond to a [sic] process that is particularly important for the customer. Alternatives for themes are particular difficulties in a rollout that have been successfully overcome. The theme is important for Search Engine Optimization (SEO). A document that consistently talks about one area will be recognized by Google as belonging to that area and receive a "usefulness" extra score. To optimize this recognition please research the theme, please create a mind-map of concepts around the theme (looking up the term in Wikipedia), use these concepts throughout the success story and explain these concepts in terms of the actual implementation.
          </p>
        </div>
  
        {/* Policies and Procedures Section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">polices and procedures</h2>
          <p className="text-sm mb-4">
            Privacy is a primary concern for modern consumers. People want to know if websites are collecting information about them, what that data might be, how it's getting stored, and what it's used for.
          </p>
          <p className="text-sm mb-2">Here are some eye-opening privacy statistics showcasing the growing demand from consumers for data transparency from companies:</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>79% of Americans express concern with how companies use their personal data (Pew Research Center)</li>
            <li>50% of users say they would spend more money with a brand they trust to handle their information responsibly (Global Consumer State of Mind Report 2021)</li>
            <li>43% of users have stopped buying from a company over privacy concerns. (Tableau)</li>
            <li>84% of users are more loyal to companies with strong security controls. (Salesforce)</li>
          </ul>
          <p className="text-sm mt-4">
            A clear, precise, and easy-to-understand privacy policy ultimately builds trust between your company and the user. Being transparent helps customers feel secure while visiting your website or using your app.
          </p>
          <p className="text-sm mt-2">
            A privacy policy is essential, even if you don't collect data from your website visitors. If you do not post one, users might assume you are secretly collecting data without informing them, which could be detrimental to your business.
          </p>
          <p className="text-sm mt-2">
            You can download our free website privacy policy template below to quickly customize a professional and accurate policy for your business.
          </p>
        </div>
      </div>
    );
  };


  const TrainersProfile = () => {
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
        <div className=" text-white p-3">
            <h2 className="text-3xl font-bold mb-6">trainers profiles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {trainers.map((trainer, index) => (
                    <div key={index} className="relative border border-gray-700 rounded-lg overflow-hidden">
                        <div className="aspect-[3/4]">
                            <img 
                                src={trainer.image} 
                                alt={trainer.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-2 bg-black bg-opacity-70">
                            <p className="text-sm font-semibold">{trainer.name}</p>
                            <p className="text-xs text-blue-400 mt-2">{trainer.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Courses = () => {
    const courseData = [
        {
            title: "The Product manager's Playbook",
            image: "/free.png",
            level: "Intermediate",
            duration: "8h 45m"
        },
        {
            title: "data science: from Theory to practice",
            image: "/free.png",
            level: "Advanced",
            duration: "10h 20m"
        },
        {
            title: "Growth Marketing 101",
            image: "/free.png",
            level: "Intermediate",
            duration: "6h 30m"
        },
        {
            title: "Art of Storytelling in Business",
            image: "/free.png",
            level: "Beginner",
            duration: "5h 30m"
        },
        {
            title: "Agile Project Management Essentials",
            image: "/free.png",
            level: "Intermediate",
            duration: "5h 30m"
        }
    ];

    const CourseCard = ({ course }) => (
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

    return (
        <div className=" text-white">
            <h2 className="text-2xl font-bold mb-4">most trending courses</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                {courseData.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">All courses</h2>
            {[...Array(3)].map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {courseData.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            ))}
        </div>
    );
};


const Contact = () => {
    return (
        <div className=" text-white p-2 space-y-6">
            {/* Contact Us Section */}
            <div className="border border-gray-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">contact us</h2>
                <p className="text-sm">
                    Howard University played an important role in the Civil Rights Movement on a number of occasions. Alain Locke, chair of the Department of Philosophy and first African American Rhodes Scholar, autho
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Social Media Section */}
                <div className="border border-gray-700 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">social media</h2>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            www/xyz-sjsj/afaf
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            www/xyz-sjsj/afaf
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            www/xyz-sjsj/afaf
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            www/facebook/afaf
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="border border-gray-700 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">contact</h2>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            0267876784
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            abc@xyz.com
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Plot no B-16, abc avenue
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="border border-gray-700 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">why us</h2>
                <p className="text-sm">
                    success story is a particular aspect of a rollout that is emphasized. Themes frequently correspond to a ]po[ process that is particularly important for the customer. Alternatives for themes are particular difficulties in a rollout that have been successfully overcome. The theme is important for Search Engine Optimization (SEO). A document that consistently talks about one area will be recognized by Google as belonging to that area and receive a "usefulness" extra score. To optimize this recognition please research the theme, please create a mind-map of concepts around the theme (looking up the term in Wikipedia), use these concepts throughout the success story and explain these concepts in terms of the actual implementation.
                </p>
            </div>
        </div>
    );
};


const AdditionalInfo = () => {
    return (
      <div className=" text-white p-2">
        <h2 className="text-3xl font-bold mb-6">F.A.Q</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqCard
            question="What does LOREM mean?"
            answer="Lorem ipsum dolor sit amet, consectetur adipisci elit, Lorem ipsum is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts for visualization purposes only."
          />
          <FaqCard
            question="Where can I subscribe to your newsletter?"
            answer="We often send out our newsletter with news and great offers. We will never distribute your data to third parties and you can unsubscribe from the newsletter at any time. Click here to sign up for our newsletter."
          />
          <FaqCard
            question="Can I change the displayed currency?"
            answer="As a retailer, we buy all magazines from their respective publishers in the currency they use. If you could contact the publisher directly."
          />
          <FaqCard
            question="Are unsold magazines sent back to the publisher?"
            answer="Our range includes magazines from countries such as Australia, the USA and the UK. Returning these magazines would be extremely costly in terms of logistics and would also be very. This allows us to also offer our customers a wide range of print magazines."
          />
        </div>
  
        <div className="mt-8 space-y-6">
          <InfoCard
            title="community Engagement"
            content="Howard University played an important role in the Civil Rights Movement on a number of occasions. Alain Locke, chair of the Department of Philosophy and first African American Rhodes Scholar, authored The New Negro (1925), which helped to usher in the Harlem Renaissance. [16] Ralph Bunche, the first Nobel Peace Prize winner of African descent, served as chair of the Department of Political Science. [17] Beginning in 1942, Howard University students pioneered the 'stool-sitting' technique of occupying stools at a local cafeteria which denied service to African Americans, blocking other customers waiting for service. [18] This tactic was to play a prominent role in the later Civil Rights Movement. By January 1943, students had begun to organize regular sit-ins and pickets around Washington, D.C. at cigar stores and cafeterias which refused to serve them because of their race. These protests continued until the fall of 1944.[19]"
          />
          <InfoCard
            title="Students support Programs"
            content="Success story is a particular aspect of a failed plan evangelized. Themes frequently correspond to a plot premise that is particularly important for the customer. Alternatives for themes are particular difficulties in a context that have been successfully overcome. Sometimes the resolution of a difficulty forms a theme on its own. Themes are closely related to the 'moral of the story' Googling to that area and adding a 'slash theme' extra costs. To optimize this recognition phase related to theme, please create a mini-map of concepts around this theme (looking up the term in Wikipedia). Use these concepts throughout the success story and explain these concepts in terms of the actual implementation."
          />
        {/* Policies and Procedures Section */}
        <div className="border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">polices and procedures</h2>
          <p className="text-sm mb-4">
            Privacy is a primary concern for modern consumers. People want to know if websites are collecting information about them, what that data might be, how it's getting stored, and what it's used for.
          </p>
          <p className="text-sm mb-2">Here are some eye-opening privacy statistics showcasing the growing demand from consumers for data transparency from companies:</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>79% of Americans express concern with how companies use their personal data (Pew Research Center)</li>
            <li>50% of users say they would spend more money with a brand they trust to handle their information responsibly (Global Consumer State of Mind Report 2021)</li>
            <li>43% of users have stopped buying from a company over privacy concerns. (Tableau)</li>
            <li>84% of users are more loyal to companies with strong security controls. (Salesforce)</li>
          </ul>
          <p className="text-sm mt-4">
            A clear, precise, and easy-to-understand privacy policy ultimately builds trust between your company and the user. Being transparent helps customers feel secure while visiting your website or using your app.
          </p>
          <p className="text-sm mt-2">
            A privacy policy is essential, even if you don't collect data from your website visitors. If you do not post one, users might assume you are secretly collecting data without informing them, which could be detrimental to your business.
          </p>
          <p className="text-sm mt-2">
            You can download our free website privacy policy template below to quickly customize a professional and accurate policy for your business.
          </p>
        </div>
        </div>
      </div>
    );
  };
  
  const FaqCard = ({ question, answer }) => (
    <div className="border border-gray-700 rounded-lg p-4">
      <h3 className="font-semibold mb-2">{question}</h3>
      <p className="text-sm ">{answer}</p>
    </div>
  );
  
  const InfoCard = ({ title, content, className = "" }) => (
    <div className={`border border-gray-700 rounded-lg p-4 ${className}`}>
      <h3 className="font-semibold mb-2 capitalize">{title}</h3>
      <p className="text-sm ">{content}</p>
    </div>
  );
  
export default TabBar;