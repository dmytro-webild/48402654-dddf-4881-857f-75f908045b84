import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Glamour Glow - Elevate Your Beauty',
  description: 'Discover Glamour Glow\'s premium skincare and makeup products. Enhance your natural radiance with dermatologist-approved, cruelty-free formulas.',
  keywords: ["cosmetics, skincare, makeup, beauty, natural beauty, cruelty-free, dermatologist-approved, radiance, glamour, glow"],
  openGraph: {
    "title": "Glamour Glow - Elevate Your Beauty",
    "description": "Discover Glamour Glow's premium skincare and makeup products. Enhance your natural radiance with dermatologist-approved, cruelty-free formulas.",
    "url": "https://www.glamourglow.com",
    "siteName": "Glamour Glow",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/arrangement-cosmetics-with-copy-space-beige-background_23-2148574394.jpg",
        "alt": "Collection of cosmetics products"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Glamour Glow - Elevate Your Beauty",
    "description": "Discover Glamour Glow's premium skincare and makeup products. Enhance your natural radiance with dermatologist-approved, cruelty-free formulas.",
    "images": [
      "http://img.b2bpic.net/free-photo/arrangement-cosmetics-with-copy-space-beige-background_23-2148574394.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
