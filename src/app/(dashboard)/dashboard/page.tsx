"use client";

import {  useState } from "react";
import EmailCreate from "@/components/app/EmailCreate";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Page = () => {

  const { data: session } = useSession();
  const [appCreate, setAppCreate] = useState(false);
  
  return (
    <>
      <ul
        role="list"
        // className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 drop-shadow rounded-lg"
        // className="border-b border-gray-200 bg-white  sm:px-6 shadow rounded-lg"
        className="divide-y divide-gray-200 bg-white shadow sm:rounded-xl"
      >
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 lg:px-8 py-4">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Email Routes
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Here you have the ability to create, delete and manage your email
              routes.
            </p>
          </div>
          <div className="flex-shrink-0">
            {!appCreate && (
              <button
                onClick={() => setAppCreate(true)}
                type="button"
                className="mt-2 md:mt-0 relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Create Email
              </button>
            )}
          </div>
        </div>
        {appCreate && (
          <>
            <form>
              {/* <form onSubmit={handleFormSubmit}> */}
              <div className="mx-4 lg:mx-8 my-4 flex-wrap items-center justify-between md:flex">
                <EmailCreate />
                <div className="mt-3 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setAppCreate(false)}
                  >
                    Cancel
                  </button>
                  <button
                    // disabled={createAppLoading}
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Submit
                    {/* {createAppLoading ? "Loading..." : "Submit"} */}
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
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
                From Email
              </th>
              <th
                scope="col"
                className="hidden py-2 text-right font-semibold  sm:table-cell sm:text-center "
              >
                To Email
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
            <tr className="relative justify-between gap-x-6 px-4 py-5 sm:px-6">
              <td className=" py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href="#">
                      <span className="absolute inset-x-0 -top-px bottom-0" />
                      {"first@last.com"}
                    </Link>
                  </p>
                </div>
              </td>
              <td className="hidden py-4 text-sm sm:table-cell sm:text-center">
                {session?.user?.email}
                {/* <time dateTime={"item.dateTime"}>
                  {"item.date"}
                  </time> */}
              </td>
              <td className="py-4 pr-4 pl-0 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
                <div className="flex items-center justify-end gap-x-2 sm:justify-end">
                  <div className="text-blue-500">Not Active</div>
                  <div className={"flex-none rounded-full p-1"}>
                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
    </>
  );
};

export default Page;

{
  /* <div {...props}>
<ul
    role="list"
    className="divide-y divide-gray-200 overflow-hidden bg-white drop-shadow-sm sm:rounded-xl"
>
    <div className="md:flex md:items-center md:justify-between text-sm font-medium text-gray-500 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6">
        <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Apps
            </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
            {!appCreate && (
                <button
                    onClick={() => setAppCreate(true)}
                    type="button"
                    className="ml-3 inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    Create Application
                </button>
            )}
        </div>
    </div>
    {appCreate && (
        <form className="p-4" onSubmit={handleFormSubmit}>
            <div className="col-span-full">
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    Application Name
                </label>
                <input
                    id="text"
                    type="text"
                    name="text"
                    onChange={(event) => setApplicationName(event.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-sky-500 sm:text-sm"
                    placeholder="My Application"
                    maxLength={32}
                    required
                />
            </div>
            <div className="mt-3 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setAppCreate(false)}
                >
                    Cancel
                </button>
                <button
                    disabled={createAppLoading}
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                    {createAppLoading ? "Loading..." : "Submit"}
                </button>
            </div>
        </form>
    )}
    {dataApps?.apps && dataApps.apps.length > 0 ? (
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
                        <td className="hidden py-4 text-sm sm:table-cell sm:text-center">
                            0
                        </td>
                        <td className="py-4 pr-4 pl-0 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
                            <div className="flex items-center justify-end gap-x-2 sm:justify-end">
                                <div
                                    className={classNames(
                                        // statuses[appdat?.status],
                                        "text-sky-500"
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
    )}
</ul>
</div> */
}
