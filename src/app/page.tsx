import Header from "@/components/Header";
import { Logo } from "@/components/Logo";
import SigninButton from "@/components/SigninButton";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtuabyte - Business Email for the Individual",
  description: "Virtuabyte is a business email service for the individual.",
};

const Page = () => {
  return (
    <div>
      <Header />
      <Pricing />
    </div>
  );
};

export default Page;
