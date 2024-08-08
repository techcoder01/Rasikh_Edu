// components/CertificateShowcase.js
import Image from 'next/image';

const certificates = [
  { id: 1, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 2, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 3, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 4, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 5, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 6, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 7, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 8, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
  { id: 9, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
 { id: 10, title: 'Blockchain Basics', issuer: 'Rasikh', date: 'July 24, 2023', image: '/free.png' },
];

const CertificateCard = ({ certificate }) => (
  <div className="rounded-lg overflow-hidden">
    <Image 
      src={certificate.image} 
      alt={certificate.title} 
      width={300} 
      height={200} 
      className="w-full object-cover"
    />
    <div className="p-2">
      <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
      <p className="text-sm text-gray-400">Issued by: {certificate.issuer}</p>
      <p className="text-sm text-gray-400">Issued on {certificate.date}</p>
    </div>
  </div>
);

const CertificateShowcase = () => {
  return (
    <div className="text-white py-32 px-4">
      <div className="max-w-[60rem] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Your certificates</h1>
        <p className="text-gray-400 mb-8">
          Showcase your achievements with a certificate that demonstrates you've completed a course or a learning path. Share it
          with employers, colleagues, and friends.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateShowcase;