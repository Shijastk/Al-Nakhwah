import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
  title: "Al Nakhwah.L.L.C - Premium Food Stuff Supply & Logistics",
  description: "Global Food Stuff, Delivered. Al Nakhwah.L.L.C specializes in high-quality food trading, logistics, and wholesale supply chains across the globe.",
  keywords: ["food supply", "food trading", "Al Nakhwah.L.L.C", "global logistics", "wholesale food", "Bahrain food supplier"],
  authors: [{ name: "Al Nakhwah.L.L.C" }],
  openGraph: {
    title: "Al Nakhwah.L.L.C - Premium Food Stuff Supply",
    description: "Global Food Stuff, Delivered. Connecting premium brands with global markets.",
    url: "https://alnakhwah.com",
    siteName: "Al Nakhwah.L.L.C",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#064E3B]">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}