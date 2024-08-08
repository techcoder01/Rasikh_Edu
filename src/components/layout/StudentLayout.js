import '../../app/globals.css'
import Header2 from '../common/Header2';
import Footer2 from '../common/Footer2';
import Head from 'next/head';

export const metadata = {
  title: {
    default: "Rasikh - Student Dashboard for Educational Certificates",
    template: '%s | Rasikh Student Portal'
  },
  description: "Manage your academic credentials, share certificates securely, and track your educational journey with Rasikh's blockchain-powered platform for students in Saudi Arabia.",
  keywords: ["Student dashboard", "educational certificates", "blockchain", "Saudi Arabia", "academic credentials", "secure sharing", "career development"],
  openGraph: {
    title: "Rasikh - Empowering Students with Blockchain-Verified Credentials",
    description: "Take control of your academic achievements. Securely manage and share your educational certificates with Rasikh's innovative platform for Saudi Arabian students.",
    url: 'https://www.rasikh.com/student',
    siteName: 'Rasikh',
    locale: 'en_SA',
    type: 'website',
    images: [
      {
        url: 'https://www.rasikh.com/og-image-student.jpg',
        width: 1200,
        height: 630,
        alt: 'Rasikh Student Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rasikh Student Portal - Your Academic Passport",
    description: "Showcase your skills, manage your certificates, and unlock opportunities with Rasikh's blockchain-verified credential platform for Saudi students.",
    site: '@rasikh_sa',
    creator: '@rasikh_sa',
    images: ['https://www.rasikh.com/twitter-image-student.jpg'],
  },
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.rasikh.com/student" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" hreflang="en-sa" href="https://www.rasikh.com/student" />
        <link rel="alternate" hreflang="ar-sa" href="https://www.rasikh.com/ar/student" />
      </Head>
      <body className="bg-black">
        <Header2 />
        {children}
        <Footer2 />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Rasikh Student Dashboard",
              "applicationCategory": "EducationManagement",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "SAR"
              },
              "description": "A blockchain-powered platform for students in Saudi Arabia to manage their educational certificates, track academic progress, and securely share credentials with institutions and employers.",
              "url": "https://www.rasikh.com/student",
              "provider": {
                "@type": "Organization",
                "name": "Rasikh",
                "url": "https://www.rasikh.com"
              },
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "Student"
              },
              "featureList": [
                "Secure certificate storage",
                "Easy sharing with employers and institutions",
                "Blockchain verification",
                "Academic progress tracking",
                "Career development tools"
              ]
            }
          `}
        </script>
      </body>
    </html>
  );
}