const KeyFeatures = () => {
    const features = [
      {
        title: "Seamless Credential Management",
        description: "Manage all your academic credentials in one place and share them securely with employers, schools, and other institutions.",
        image: "./keyfeature1.png"
      },
      {
        title: "Student-Owned Records",
        description: "Students fully own and control their academic records, allowing for easy transfer and verification as they move through their educational journey.",
        image: "./keyfeature2.png"
      },
      {
        title: "Immutable and Tamper-Proof",
        description: "Blockchain technology ensures that academic records are tamper-proof, providing a high level of trust and security to both students and institutions.",
        image: "./keyfeature3.png"
      },
      {
        title: "Instant, Trustworthy Verification",
        description: "Instantly verify academic credentials, eliminating the need for time-consuming manual checks and reducing the risk of credential fraud.",
        image: "./keyfeature4.png"
      }
    ];
  
    return (
      <section className="bg-black text-white py-[76px] sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold mb-5">Key Features</h2>
          <p className="mb-10 text-gray-300">
            Rasikh offers a range of features that enable students and institutions to seamlessly manage and verify academic credentials.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 space-y-6 sm:space-y-0">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain" />
                <div className="p-3">
                  <h3 className="text-md font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default KeyFeatures;