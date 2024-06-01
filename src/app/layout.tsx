import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const sourceFont = Wix_Madefor_Display({ subsets: ["latin"] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "YourNameIs",
  description: "YourNameIs provides business email for individuals.",
  twitter: {
    creator: "@halfnine",
  },
  openGraph: {
    images: [
      {
        url: "https://yourname.is/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Og Image Alt",
      },
    ],
  },
};

function Clarity() {
  return (
    <Script id="clarity-script">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "mknls3wxr9");
      `}
    </Script>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={sourceFont.className}>
        <Clarity />
        {/* <Banner /> */}
        {/* <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"> */}
        {children}
        {/* </div>  */}
      </body>
    </html>
  );
}

function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 justify-center">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#80e6ff] to-[#688afd] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#80e6ff] to-[#688afd] opacity-30"
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
        />
      </div>
      <p className="text-sm leading-6 text-gray-900">
        We are Migrating and Upgrading our Application, To create an email route{" "}
        <Link
          href="https://www.halfnine.com/contact"
          target="_blank"
          className="whitespace-nowrap font-semibold"
        >
          Contact Support &nbsp;<span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
      {/* <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
      </div> */}
    </div>
  );
}
