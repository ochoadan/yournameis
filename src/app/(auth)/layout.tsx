import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access YourNameIs",
  description: "Fill in your details to access YourNameIs",
};

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Page;
