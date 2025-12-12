import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LYVISUALS | Scottsdale Creative Agency",
  description: "Scottsdale-based creative agency specializing in scroll-stopping video ads and photography for e-commerce brands on Shopify and Amazon.",
  keywords: ["video production", "photography", "creative agency", "Scottsdale", "e-commerce", "video ads", "product photography"],
  openGraph: {
    title: "LYVISUALS | Scottsdale Creative Agency",
    description: "Transform your ad spend into profit with high-quality, high-performance video ads for DTC brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
