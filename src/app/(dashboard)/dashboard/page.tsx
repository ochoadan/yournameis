import Link from "next/link";
import { auth } from "auth";
import { getDomainData, getUsersRoutes } from "@/utils/prisma-calls";
import CreateEmail from "@/components/app/EmailRoutes/CreateEmail";

const Page = async () => {
  const session = await auth();
  const domainsData = await getDomainData();
  const routesData = await getUsersRoutes({ session });

  return (
    <>
      <div className="divide-y divide-gray-200 bg-white shadow sm:rounded-xl">
        {session?.user.isActive ? (
          <CreateEmail domainsData={domainsData} routesData={routesData} />
        ) : (
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              You need to activate your account before you can create an email.
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              <Link
                href="/billing"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Click here to go to billing page.
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
