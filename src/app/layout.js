import '../app/globals.css'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export const metadata = {
  title: {
    default: "Rasikh - Educational Certificates Platform in Saudi Arabia",
    template: '%s | Rasikh'
  },
  description: "Rasikh is a blockchain-based platform for managing and verifying educational certificates in Saudi Arabia. Easily share your academic qualifications with employers, schools, and institutions.",
  keywords: ["Educational certificates", "blockchain", "Saudi Arabia", "document verification", "academic management", "student records", "employment verification"],
  openGraph: {
    title: "Rasikh - Educational Certificates Platform in Saudi Arabia",
    description: "Blockchain-based platform for managing and verifying educational certificates in Saudi Arabia.",
    url: 'https://www.rasikh.com',
    siteName: 'Rasikh',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rasikh.com/og-image-en.jpg',
        width: 1200,
        height: 630,
        alt: 'Rasikh - Educational Certificates Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rasikh - Educational Certificates Platform in Saudi Arabia",
    description: "Blockchain-based platform for managing and verifying educational certificates in Saudi Arabia.",
    siteId: '@rasikh_sa',
    creator: '@rasikh_sa',
    images: ['https://www.rasikh.com/og-image-en.jpg'],
  },
  alternates: {
    canonical: 'https://www.rasikh.com',
  },
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'Riyadh',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <main>{children}</main>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Rasikh",
              "url": "https://www.rasikh.com",
              "logo": "https://www.rasikh.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/rasikh.sa",
                "https://www.twitter.com/rasikh_sa",
                "https://www.linkedin.com/company/rasikh-sa"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressLocality": "Riyadh"
              },
              "description": "Rasikh is a blockchain-based platform for managing and verifying educational certificates in Saudi Arabia.",
              "areaServed": {
                "@type": "Country",
                "name": "Saudi Arabia"
              }
            }
          `}
        </script>
      </body>
    </html>
  );
}