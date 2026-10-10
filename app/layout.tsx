import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "../components/FloatingContact";

const siteUrl = "https://alnakhwahfoodstuff.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Al Nakhwah | Wholesale Foodstuff Supplier & Import Export in Bahrain",
  description:
    "Al Nakhwah is a Bahrain-based foodstuff wholesaler, importer and exporter supplying grains, rice, spices, beverages, dairy and packaged foods to businesses.",
  keywords: [
    "Al Nakhwah",
    "Al Nakhwah foodstuff",
    "foodstuff supplier Bahrain",
    "wholesale food supplier Bahrain",
    "foodstuff trading Bahrain",
    "food importer Bahrain",
    "food exporter Bahrain",
    "bulk food supplier",
    "B2B food distribution",
    "wholesale rice and grains",
    "wholesale spices",
    "packaged food wholesale",
    "food and beverage supplier",
    "GCC foodstuff trading",
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
    title: "Al Nakhwah | Wholesale Foodstuff Supplier in Bahrain",
    description:
      "Explore wholesale foodstuff supply, imports and exports from Bahrain, including grains, spices, beverages and packaged goods for businesses.",
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
    title: "Al Nakhwah | Foodstuff Wholesale & Trading",
    description: "Bahrain-based wholesale foodstuff trading, importing and exporting for businesses.",
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
