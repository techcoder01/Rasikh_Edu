import '../../app/globals.css'
import Header4 from '../common/Header4';
import Footer2 from '../common/Footer2';

export const metadata = {
  title: {
    default: "Rasikh - Educational Certificates Management for Organizations",
    template: '%s | Rasikh Organization Portal'
  },
  description: "Empower your organization with Rasikh's blockchain-based platform for managing and verifying educational certificates in Saudi Arabia. Streamline credential verification and improve hiring processes.",
  keywords: ["Educational certificates", "blockchain", "Saudi Arabia", "organization portal", "credential verification", "HR tools", "hiring process", "academic validation"],
  openGraph: {
    title: "Rasikh - Educational Certificates Management for Organizations",
    description: "Streamline your organization's credential verification process with Rasikh's blockchain-based platform. Efficient academic validation for Saudi Arabian businesses.",
    url: 'https://www.rasikh.com/org',
    siteName: 'Rasikh',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rasikh.com/og-image-org.jpg',
        width: 1200,
        height: 630,
        alt: 'Rasikh - Organization Portal for Educational Certificates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rasikh - Educational Certificates Management for Organizations",
    description: "Revolutionize your hiring process with Rasikh's blockchain-based educational certificate verification platform for Saudi Arabian organizations.",
    siteId: '@rasikh_sa',
    creator: '@rasikh_sa',
    images: ['https://www.rasikh.com/og-image-org.jpg'],
  },
  alternates: {
    canonical: 'https://www.rasikh.com/org',
  },
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'Riyadh',
  }
};

export default function OrgLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header4 />
        {children}
        <Footer2 />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Rasikh Organization Portal",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "SAR"
              },
              "description": "A blockchain-based platform for organizations to manage and verify educational certificates in Saudi Arabia. Streamline your hiring process and validate academic credentials efficiently.",
              "url": "https://www.rasikh.com/org",
              "provider": {
                "@type": "Organization",
                "name": "Rasikh",
                "url": "https://www.rasikh.com"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Businesses and Organizations in Saudi Arabia"
              }
            }
          `}
        </script>
      </body>
    </html>
  );
}