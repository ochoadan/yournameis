import Link from "next/link";
import { auth } from "auth";
import { getDomainData, getUsersRoutes } from "@/utils/prisma-calls";
import CreateEmail from "@/components/app/EmailRoutes/CreateEmail";
import PricingDashboard from "@/components/app/PricingDash";

const Page = async () => {
  const session = await auth();
  const domainsData = await getDomainData();
  const routesData = await getUsersRoutes({ session });

  return (
    <>
      {session?.user.isActive ? (
        <div className="divide-y divide-gray-200 bg-white shadow sm:rounded-xl">
          <CreateEmail
            domainsData={domainsData}
            routesData={routesData}
            session={session}
          />
          {/* // <div className="p-4">
          //   <h1 className="text-2xl font-semibold text-gray-900">
          //     You need to activate your account before you can create an email.
          //   </h1>
          //   <p className="mt-2 text-sm text-gray-500">
          //     <Link
          //       href="/billing"
          //       className="font-medium text-blue-600 hover:text-blue-500"
          //     >
          //       Click here to go to billing page.
          //     </Link>
          //   </p>
          // </div> */}
        </div>
      ) : (
        <div className="py-8">
          <PricingDashboard />
        </div>
      )}
    </>
  );
};

export default Page;
