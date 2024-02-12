import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YourNameIs",
  description: "YourNameIs provides business email for individuals.",
  twitter: {
    creator: "@halfnine"
  },
  openGraph: {
    images: [
      {
        url: "https://yourname.is/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Og Image Alt"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
        {/* <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"> */}
        {children}
        {/* </div>  */}
      </body>
    </html>
  );
}
