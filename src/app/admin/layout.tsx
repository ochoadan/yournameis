import Appbar from "@/components/app/appbar";
import { auth } from "auth";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for VirtuaByte.",
};

const Page = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session && session.user.isAdmin) {
    return (
      <SessionProvider session={session}>
        <Appbar />
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 my-12">
          {children}
        </div>
      </SessionProvider>
    );
  }
  return notFound();
};

export default Page;
