import { GlobeAltIcon } from "@heroicons/react/24/outline";
import prisma from "@/utils/prisma";

const Page = async () => {
  const response = await prisma.domains.findMany();

  const res = response.map((item: any) => ({
    id: item.id,
    domain: item.domain,
  }));

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow rounded-lg ">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">
          Domains
        </h2>
        <form>
          <div className="mt-2 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <GlobeAltIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Add Domain
            </button>
          </div>
        </form>
      </div>
      <div className="lg:col-span-2 border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow rounded-lg">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">
          Domains List
        </h2>
        <ul>
          {res.map((item: any) => (
            <div key={item.id}>{item.domain}</div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
