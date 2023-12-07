import Header from "@/components/static/Header";
import Footer from "@/components/static/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for VirtuaByte.",
};

const Page = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 my-12">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
