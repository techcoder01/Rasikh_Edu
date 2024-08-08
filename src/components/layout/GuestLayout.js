import '../../app/globals.css'
import Footer2 from '../common/Footer2';
import HeaderGuest from '../common/HeaderGuest';

export const metadata = {
  title: {
    default: "Rasikh - Educational Certificates Platform for Guests",
    template: '%s | Rasikh Guest'
  },
  description: "Explore Rasikh's blockchain-based platform for educational certificates. Verify qualifications and learn about our services for guests in Saudi Arabia.",
  keywords: ["Educational certificates", "blockchain", "Saudi Arabia", "guest access", "certificate verification", "academic credentials", "Rasikh platform"],
  openGraph: {
    title: "Rasikh - Educational Certificates Platform for Guests",
    description: "Explore and verify educational certificates on Rasikh's blockchain platform. Guest access for Saudi Arabia's premier academic credential system.",
    url: 'https://www.rasikh.com/guest',
    siteName: 'Rasikh',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rasikh.com/og-image-guest.jpg',
        width: 1200,
        height: 630,
        alt: 'Rasikh - Guest Access to Educational Certificates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rasikh - Guest Access to Educational Certificates",
    description: "Verify academic credentials and explore Rasikh's blockchain-based platform for educational certificates in Saudi Arabia.",
    siteId: '@rasikh_sa',
    creator: '@rasikh_sa',
    images: ['https://www.rasikh.com/og-image-guest.jpg'],
  },
  alternates: {
    canonical: 'https://www.rasikh.com/guest',
  },
  other: {
    'geo.region': 'SA-01',
    'geo.placename': 'Riyadh',
  }
};

export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <HeaderGuest />
        {children}
        <Footer2 />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Rasikh Guest Portal",
              "url": "https://www.rasikh.com/guest",
              "description": "Explore and verify educational certificates on Rasikh's blockchain platform. Guest access for Saudi Arabia's premier academic credential system.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.rasikh.com/guest/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </body>
    </html>
  );
}