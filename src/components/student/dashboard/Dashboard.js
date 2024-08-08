import Image from 'next/image';

const Dashboard = () => {
  const active = [
    { title: "certified scrum master", expiry: "Expires in 3 years", icon: "/aws.png" },
    { title: "AWS Certified Solutions Architect Associate", expiry: "Expires in 1 years", icon: "/aws.png" },
  ];

  const education = [
    { title: "MBA, Business Administration", period: "jun 2020_present", icon: "/aws.png" },
  ];

  const experience = [
    { title: "Product Manager", period: "jun 2020_present", icon: "/aws.png" },
  ];

  const certifications = [
    { title: "Certified Scrum Master", submitted: "submitted 3 days ago", timeLeft: "2 days left", icon: "/aws.png" },
    { title: "AWS Certified Solutions Architect Associate", submitted: "submitted 4 months ago", timeLeft: "8 months left", icon: "/aws.png" },
    { title: "MBA, Business Administration", submitted: "submitted 1 year ago", timeLeft: "Expired", icon: "/aws.png" },
    { title: "Product Manager", submitted: "submitted 5 days ago", timeLeft: "7 months left", icon: "/aws.png" },
  ];

  return (
<div className='max-w-5xl mx-auto py-[75px]'>
<div className="bg-black text-white  p-6 md:p-10 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Welcome to<br />Rasikh, yashir</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Active</h2>
        {active.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg mb-2">
            <div className="flex items-center">
              <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-4" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.expiry}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        {education.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg mb-2">
            <div className="flex items-center">
              <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-4" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.period}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg mb-2">
            <div className="flex items-center">
              <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-4" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.period}</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Certifications</h2>
        {certifications.map((item, index) => (
          <div key={index} className="flex items-center justify-between space-x-2 p-2 rounded-lg mb-2">
            <div className="flex items-center">
              <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-4" />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-400">{item.submitted}</p>
              </div>
            </div>
            <p className={`text-sm ${item.timeLeft === 'Expired' ? 'text-red-500' : 'text-green-500'}`}>{item.timeLeft}</p>
          </div>
        ))}
      </section>
    </div>
</div>
  );
};

export default Dashboard;