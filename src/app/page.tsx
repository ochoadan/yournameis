import Header from "@/components/static/Header";
import Footer from "@/components/static/footer";
import Hero from "@/components/static/hero";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtuabyte - Business Email for the Individual",
  description: "Virtuabyte is a business email service for the individual.",
};

const Page = () => {
  return (
    <>
      <Header />
      <div className="bg-white py-16 md:py-32 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
