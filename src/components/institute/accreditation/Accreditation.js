import React from 'react';

const Accreditation = () => {
  return (
    <div className="text-white py-32 max-w-4xl mx-auto px-4">
      <h1 className="text-[2.7rem] sm:text-5xl font-bold mb-10">Accreditation</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-5">Accreditation Detail</h2>
        <div className="border-[1.3px] border-gray-300 rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-300">Name</div>
              <div className="text-lg font-semibold">Xyz institute</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-gray-300">Type</div>
              <div className="text-lg font-semibold">University</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-gray-300">Status</div>
              <div className="text-lg font-semibold">Accreditation</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-gray-300">Renewal date</div>
              <div className="text-lg font-semibold">4 Jan 2024</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl mb-4">Accreditation Application</h2>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 mr-4"></div>
          <div className="flex-grow space-y-1">
            <p className="font-semibold">Accreditation Application</p>
            <p className="text-sm text-gray-400">application is under review</p>
          </div>
          <button className="text-blue-500">Veiw</button>
        </div>
      </section>

      <section>
        <h2 className="text-xl mb-6">Accreditation for status update</h2>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-700 mr-4"></div>
            <div className="flex-grow space-y-1">
              <p className="font-semibold">Accreditation Application</p>
              <p className="text-sm text-gray-400">application is under review</p>
            </div>
            <span>1 dec 2023</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Accreditation;