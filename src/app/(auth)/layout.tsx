import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access VirtuaByte",
  description: "Fill in your details to access VirtuaByte",
};

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Page;
