import Header from "@/components/static/Header";
import Footer from "@/components/static/footer";
import Hero from "@/components/static/hero";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtuabyte - Business Email for Individuals",
  description: "Virtuabyte is a business email service for individuals.",
};

const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="py-16 md:py-32 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <Pricing />
      <Footer />
    </div>
  );
};

export default Page;
