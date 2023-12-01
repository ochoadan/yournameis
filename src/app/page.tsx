import Header from "@/components/Header";
import Hero from "@/components/static/hero";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtuabyte - Business Email for the Individual",
  description: "Virtuabyte is a business email service for the individual.",
};

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Page;
