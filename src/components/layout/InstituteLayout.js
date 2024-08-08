import '../../app/globals.css'
import Footer2 from '../common/Footer2';
import Header3 from '../common/Header3';
import Head from 'next/head';

export const metadata = {
  title: {
    default: "Rasikh - Institute Portal for Educational Certificate Management",
    template: '%s | Rasikh Institute Dashboard'
  },
  description: "Empower your educational institution with Rasikh's blockchain-based platform. Securely issue, manage, and verify student certificates. Streamline administrative processes and enhance credential integrity.",
  keywords: ["Educational institute portal", "blockchain certificates", "Saudi Arabia", "credential management", "academic verification", "digital diplomas", "educational technology"],
};

export default function InstituteLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.rasikh.com/institute" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hreflang="en-sa" href="https://www.rasikh.com/institute" />
        <link rel="alternate" hreflang="ar-sa" href="https://www.rasikh.com/ar/institute" />
        
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Rasikh - Revolutionizing Certificate Management for Institutes" />
        <meta property="og:description" content="Elevate your institution's credential management with Rasikh's blockchain solution. Issue tamper-proof certificates and streamline verification processes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rasikh.com/institute" />
        <meta property="og:image" content="https://www.rasikh.com/og-image-institute.jpg" />
        <meta property="og:locale" content="en_SA" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rasikh_sa" />
        <meta name="twitter:title" content="Rasikh Institute Portal - Next-Gen Certificate Management" />
        <meta name="twitter:description" content="Join the future of academic credentialing. Issue blockchain-verified certificates and enhance your institution's reputation with Rasikh." />
        <meta name="twitter:image" content="https://www.rasikh.com/twitter-image-institute.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Rasikh" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </Head>
      <body className="bg-black">
        <Header3 />
        {children}
        <Footer2 />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Rasikh Institute Portal",
              "applicationCategory": "EducationManagement",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "SAR"
              },
              "description": "A comprehensive blockchain-based platform for educational institutions in Saudi Arabia to issue, manage, and verify student certificates. Enhances credential integrity and streamlines administrative processes.",
              "url": "https://www.rasikh.com/institute",
              "provider": {
                "@type": "Organization",
                "name": "Rasikh",
                "url": "https://www.rasikh.com"
              },
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "Teacher"
              },
              "featureList": [
                "Secure certificate issuance",
                "Blockchain-based verification",
                "Batch certificate management",
                "Integration with student information systems",
                "Analytics and reporting",
                "Compliance with Saudi educational standards"
              ]
            }
          `}
        </script>
      </body>
    </html>
  );
}