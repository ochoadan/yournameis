"use client";

import Link from "next/link";
import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Domain {
  id: number;
  name: string;
}

interface Route {
  id: number;
  name: string;
  fromEmail: string;
  toEmail: string;
}

interface EmailFormsProps {
  domainsData: Domain[];
  routesData: Route[];
}

const CreateEmail = ({
  domainsData: domains,
  routesData: routes,
}: EmailFormsProps) => {
  const [appCreate, setAppCreate] = useState(false);
  const [selected, setSelected] = useState(domains[0]);
  const [query, setQuery] = useState("");

  const filteredDomains =
    query === ""
      ? domains
      : domains.filter((domain) =>
          domain.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
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
        <form>
          <div className="mx-4 lg:mx-8 my-4 flex-wrap items-center justify-between md:flex">
            <div className="flex space-x-2 mt-4">
              <div className="w-1/2 min-w-0 flex-1 relative">
                <label
                  htmlFor="name"
                  className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  First
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  placeholder="Jane"
                />
              </div>
              <div className="flex items-center">
                <MdOutlineAlternateEmail />
              </div>
              <Combobox value={selected} onChange={setSelected}>
                <div className="min-w-0 flex-1 relative z-50">
                  <div className="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm">
                    <Combobox.Label
                      htmlFor="name"
                      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Last
                    </Combobox.Label>
                    <Combobox.Input
                      type="text"
                      name="domain"
                      id="domain"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      placeholder="Smith"
                      onClick={(event) =>
                        (event.target as HTMLInputElement).select()
                      }
                      onFocus={(event) => event.target.select()}
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(person: { name: string }) =>
                        (person as { name: string }).name
                      }
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filteredDomains.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredDomains.map((domain) => (
                        <Combobox.Option
                          key={domain.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? "bg-sky-600 text-white" : "text-gray-900"
                            }`
                          }
                          value={domain}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {domain.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-sky-600"
                                  }`}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </div>
              </Combobox>
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
      )}
      {routes.length === 0 ? (
        <>
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 lg:px-8 py-4">
            You have no email routes. Start by creating one.
          </div>
        </>
      ) : (
        routes.map((route) => (
          <div
            key={route.fromEmail}
            className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 lg:px-8 py-4"
          >
            {route.fromEmail}
          </div>
        ))
      )}
    </>
  );
};

export default CreateEmail;
// <table className="w-full whitespace-nowrap text-left">
//   <colgroup>
//     <col className="w-full sm:w-1/3" />
//     <col className="lg:w-1/3" />
//     <col className="lg:w-1/3" />
//   </colgroup>
//   <thead className=" bg-gray-400/5 border-b border-gray-200 text-sm leading-6 text-black">
//     <tr>
//       <th
//         scope="col"
//         className="py-2 pl-4 font-semibold sm:pl-6 lg:pl-8"
//       >
//         From Email
//       </th>
//       <th
//         scope="col"
//         className="hidden py-2 text-right font-semibold  sm:table-cell sm:text-center "
//       >
//         To Email
//       </th>
//       <th
//         scope="col"
//         className="py-2 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
//       >
//         Status
//       </th>
//     </tr>
//   </thead>
//   <tbody className="divide-y divide-black/5">
//     <tr className="relative justify-between gap-x-6 px-4 py-5 sm:px-6">
//       <td className=" py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 flex gap-x-4">
//         <div className="min-w-0 flex-auto">
//           <p className="text-sm font-semibold leading-6 text-gray-900">
//             <Link href="#">
//               <span className="absolute inset-x-0 -top-px bottom-0" />
//               {"first@last.com"}
//             </Link>
//           </p>
//         </div>
//       </td>
//       <td className="hidden py-4 text-sm sm:table-cell sm:text-center">
//         {/* {session?.user?.email} */}
//         {/* <time dateTime={"item.dateTime"}>
//           {"item.date"}
//           </time> */}
//       </td>
//       <td className="py-4 pr-4 pl-0 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
//         <div className="flex items-center justify-end gap-x-2 sm:justify-end">
//           <div className="text-blue-500">Not Active</div>
//           <div className={"flex-none rounded-full p-1"}>
//             <div className="h-1.5 w-1.5 rounded-full bg-current" />
//           </div>
//         </div>
//       </td>
//     </tr>
//   </tbody>
// </table>
