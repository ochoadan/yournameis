import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access VirtuaByte",
  description: "Fill in your details to access VirtuaByte",
};

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Page;
