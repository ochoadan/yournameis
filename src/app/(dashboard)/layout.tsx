import Appbar from "@/components/app/appbar";
import { auth } from "auth";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for YourNameIs.",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Og Image Alt"
      }
    ]
  }
};

const Page = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }
  return (
    <SessionProvider session={session}>
      <Appbar />
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 my-12">
        {/* <div className="mx-auto max-w-3xl"> */}
        {children}
      </div>
    </SessionProvider>
  );
};

export default Page;
