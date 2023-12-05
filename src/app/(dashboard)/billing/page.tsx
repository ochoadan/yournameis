// import { AppLayout } from "@/layout";
// import { useAuthenticationStatus } from "@nhost/nextjs";
import router from "next/router";
import {
  CheckIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const includedFeatures = [
  "5 monitors included",
  "No Teams Allowed",
  "1 App Allowed",
  "1 day event log",
];

const stats = [
  { name: "Customer Balance", stat: "$22.62" },
  { name: "Next Payment on July 8, 2023", stat: "$0.00" },
];

const Billing = () => {
  //   const { isAuthenticated, isLoading } = useAuthenticationStatus();
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (!isAuthenticated) {
  //     router.push("/signin");
  //   }
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow rounded-lg">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Current Subscriptions
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p> */}
          </div>
          {/* <div className="ml-4 mt-4 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Add a subscription
              </button>
            </div> */}
        </div>
        {/* {dataApps?.apps && dataApps.apps.length > 0 ? (
                    <table className="w-full whitespace-nowrap text-left">
                        <colgroup>
                            <col className="w-full sm:w-1/3" />
                            <col className="lg:w-1/3" />
                            <col className="lg:w-1/3" />
                        </colgroup>
                        <thead className=" bg-gray-400/5 border-b border-gray-200 text-sm leading-6 text-black">
                            <tr>
                                <th
                                    scope="col"
                                    className="py-2 pl-4 font-semibold sm:pl-6 lg:pl-8"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="hidden py-2 text-right font-semibold  sm:table-cell sm:text-center "
                                >
                                    Schedule Monitors
                                </th>
                                <th
                                    scope="col"
                                    className="py-2 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                            {dataApps.apps.map((appdat: any) => (
                                <tr
                                    key={appdat.id}
                                    className="relative justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                                >
                                    <td className=" py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 flex gap-x-4">
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                                <Link href={`/app/${appdat.id}`}>
                                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                                    {appdat.appName}
                                                </Link>
                                            </p>
                                        </div>
                                    </td>
                                    <td className="hidden py-4 pl-0 text-sm leading-6 sm:pr-8 lg:pr-20 sm:table-cell"> 
                                    <td className="hidden py-4 text-sm sm:table-cell sm:text-center">
                                        <time dateTime={"item.dateTime"}>{"item.date"}</time> 
                                        0
                                    </td>
                                    <td className="py-4 pr-4 pl-0 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
                                        <div className="flex items-center justify-end gap-x-2 sm:justify-end">
                                            <div
                                                className={classNames(
                                                    // statuses[appdat?.status],
                                                    "text-blue-500"
                                                )}
                                            >
                                                {appdat?.status || "No Monitors"}
                                            </div>
                                            <div className={"flex-none rounded-full p-1"}>
                                                <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-sm font-medium text-gray-500 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6">
                        {loadingApps ? (
                            <span>Loading...</span>
                        ) : (
                            <div className="max-h-fit mx-auto">
                                <SvgComputerHands className="max-w-[256px] max-h-[256px] mx-auto" />
                                <p className="text-center mt-4">
                                    Get started by creating an App.
                                    <br />
                                    Apps can contain multiple schedule monitors.
                                </p>
                            </div>
                        )}
                    </div>
                )} */}
      </div>
    </>
  );
};

export default Billing;
