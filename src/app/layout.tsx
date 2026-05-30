import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prathamesh Mali | Frontend Engineer & Next.js Architect",
  description: "Frontend Engineer specializing in React, Next.js, TypeScript, Performance Engineering, SEO Optimization, and Modern Frontend Architecture. Creator of AntyGravity Labs.",
  keywords: [
    "Prathamesh Mali",
    "Frontend Engineer",
    "React Specialist",
    "Next.js Developer",
    "Performance Engineering",
    "SEO Optimization",
    "TypeScript",
    "AntyGravity Labs",
    "Pune Developer"
  ],
  authors: [{ name: "Prathamesh Mali", url: "https://github.com/PrathameshatGitHub" }],
  creator: "Prathamesh Mali",
  openGraph: {
    title: "Prathamesh Mali | Frontend Engineer & Next.js Architect",
    description: "Frontend Engineer specializing in React, Next.js, TypeScript, Performance Engineering, SEO Optimization, and Modern Frontend Architecture. Creator of AntyGravity Labs.",
    url: "https://frontend-demo-lemon-three.vercel.app/",
    siteName: "Prathamesh Mali Observatory Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Mali | Frontend Engineer & Next.js Architect",
    description: "Frontend Engineer specializing in React, Next.js, TypeScript, Performance Engineering, SEO Optimization, and Modern Frontend Architecture. Creator of AntyGravity Labs.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-cyber-green/30 selection:text-white`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prathamesh Mali",
              "jobTitle": "Frontend Engineer",
              "url": "https://frontend-demo-lemon-three.vercel.app/",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://github.com/PrathameshatGitHub",
                "https://www.linkedin.com/in/prathamesh-mali-27685b236/"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Performance Engineering",
                "Frontend Architecture"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

