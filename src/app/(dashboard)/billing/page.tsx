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
      <div className="mt-12">
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow-lg">
          <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-4">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Current Subscriptions
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p>
            </div>
            <div className="ml-4 mt-4 flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Create new job
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
