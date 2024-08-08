import Image from 'next/image';

export default function VerificationService() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg2.png" // Replace with your actual background image path
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-4xl mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Verification Service</h1>
        <p className="text-center max-w-3xl mx-auto text-sm md:text-base">
          Our platform allows you to verify the authenticity of educational certificates issued by various institutions. <br className="hidden md:inline" />
          Upload a document or enter a certificate ID to quickly verify its legitimacy.
        </p>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center py-6">Benefits</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Secure', 'Accessible', 'User Friendly', 'Reliable'].map((benefit) => (
            <div key={benefit} className="border-2 border-white/70 rounded-lg px-4 py-2 text-sm md:text-base">
              {benefit}
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center pt-8">How It Works</h2>
        <div className="space-y-2 text-sm md:text-base">
          <p>Step 1: Upload the certificate or document you want to verify.</p>
          <p>Step 2: Enter the unique certificate ID provided by the issuing institution</p>
          <p>Step 3: Click on "Verify" to check the document's authenticity</p>
          <p>Step 4: View the verification results and download or share the verification report if needed.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base">
            Get Started
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}