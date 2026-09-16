import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "../components/FloatingContact";

const siteUrl = "https://alnakhwahfoodstuff.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Al Nakhwah.L.L.C - Premium Food Stuff Supply & Logistics",
  description:
    "Global Food Stuff, Delivered. Al Nakhwah.L.L.C specializes in high-quality food trading, logistics, and wholesale supply chains across the globe.",
  keywords: [
    "food supply",
    "food trading",
    "Al Nakhwah.L.L.C",
    "global logistics",
    "wholesale food",
    "Bahrain food supplier",
  ],
  applicationName: "Al Nakhwah.L.L.C",
  authors: [{ name: "Al Nakhwah.L.L.C", url: siteUrl }],
  creator: "Al Nakhwah.L.L.C",
  publisher: "Al Nakhwah.L.L.C",
  category: "Foodstuff Trading and Logistics",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Al Nakhwah.L.L.C - Premium Food Stuff Supply",
    description:
      "Global Food Stuff, Delivered. Connecting premium brands with global markets.",
    url: siteUrl,
    siteName: "Al Nakhwah.L.L.C",
    images: [
      {
        url: "/logo.png",
        alt: "Al Nakhwah.L.L.C Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Nakhwah.L.L.C - Food Stuff Supply",
    description: "Global Food Stuff, Delivered.",
    images: ["/logo.png"],
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Al Nakhwah.L.L.C",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Global Food Stuff, Delivered. Al Nakhwah.L.L.C specializes in high-quality food trading, logistics, and wholesale supply chains across the globe.",
  email: "info@alnakhwahfoodstuff.com",
  telephone: "+973 3007 5524",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building No. 429, Road No. 1913, Block No. 919",
    addressRegion: "Southern Governorate",
    addressCountry: "BH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+973 3007 5524",
    contactType: "sales and customer support",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#064E3B]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
