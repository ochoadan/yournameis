import Appbar from "@/components/application/appbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for VirtuaByte.",
};

const Page = () => {
  return (
    <>
      <Appbar />
      Enter
    </>
  );
};

export default Page;
