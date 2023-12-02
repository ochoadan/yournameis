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
        <div className="space-y-12 sm:space-y-16 ">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Current Subscriptions
          </h2>
        </div>
        <div className="max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:flex lg:max-w-none bg-white">
          <div className="my-auto p-4 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Hobby
            </h3>
            <p className="mt-2 text-md leading-7 text-gray-600">
              The hobby plan allows you to manage a single application. However,
              you may still create monitors.
            </p>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-4 text-sm leading-6 text-stone-600 sm:grid-cols-1 sm:gap-2"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-sky-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
              <li className="pt-2 pb-4 text-xs flex gap-x-3">
                <ArrowPathRoundedSquareIcon
                  className="h-4 w-4 flex-none text-gray-600/80"
                  aria-hidden="true"
                />
                {
                  "Your payment method will be charged automatically for each billing period."
                }
              </li>
            </ul>
            <Link href={"#"}>
              <button className="rounded bg-sky-50 px-2 py-1 text-sm font-bold text-sky-600 shadow-sm hover:bg-sky-100">
                CHANGE SUBSCRIPTION PLAN
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Payment method
          </h2>
        </div>
        <div className="p-4 sm:flex sm:items-start sm:justify-between max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:flex lg:max-w-none bg-white">
          <h4 className="sr-only">Visa</h4>
          <div className="sm:flex sm:items-start">
            <svg
              className="h-8 w-auto sm:h-6 sm:flex-shrink-0"
              viewBox="0 0 36 24"
              aria-hidden="true"
            >
              <rect width={36} height={24} fill="#224DBA" rx={4} />
              <path
                fill="#fff"
                d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
              />
            </svg>
            <div className="mt-3 sm:ml-4 sm:mt-0">
              <div className="text-sm font-medium text-gray-900">
                Ending with 4242
              </div>
              <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                <div>Expires 12/27</div>
                <span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
                  &middot;
                </span>
                <div className="mt-1 sm:mt-0">Last updated on 22 Jun 2023</div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Edit
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Apply a Coupon
          </h2>
        </div>
        <div className="p-4 max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:flex lg:max-w-none bg-white">
          <h4 className="sr-only">
            Cupons will be applied but wont be visible on the billing page
            yet...
          </h4>
          <form className="sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="text" className="sr-only">
                Cupon
              </label>
              <input
                type="text"
                name="cupon"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                placeholder="5-USD-OFF"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Save
            </button>
          </form>
        </div>

        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Billing Information
          </h2>
        </div>
        <div className="p-4 max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:max-w-none bg-white">
          <p className="text-sm text-gray-600 max-w-3xl">
            If you need to add specific contact or tax information to your
            receipts, like your full business name, VAT identification number,
            or address of record, you may add it here.
          </p>
          <div className="min-w-0 flex-1 mt-3">
            <form action="#" className="relative">
              <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-sky-600">
                <label htmlFor="comment" className="sr-only">
                  Add your comment
                </label>
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Extra Billing Information..."
                  defaultValue={""}
                />

                <div className="py-2" aria-hidden="true">
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 mt-3">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Receipt Email Addresses
          </h2>
        </div>
        <div className="p-4 max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:max-w-none bg-white">
          <div className="max-w-3xl text-sm text-gray-500">
            <p>
              {" "}
              We will send a receipt download link to the email addresses that
              you specify below. You may separate multiple email addresses using
              commas.
            </p>
          </div>
          <form className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Save
            </button>
          </form>
        </div>
        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Payments
          </h2>
        </div>
        <dl className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-xl bg-white p-4 drop-shadow-sm lg:mx-0 lg:max-w-none"
            >
              <dt className="truncate text-sm font-bold text-gray-500/90">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
        {/* </div> */}
        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Cancel Subscription
          </h2>
        </div>
        <div className="p-4 max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:flex lg:max-w-none bg-white">
          {/* <p className="text-sm text-gray-600 max-w-3xl">
                        You may cancel your subscription at any time. Once your subscription has been cancelled, you will have the option to resume the subscription until the end of your current billing cycle.
                    </p> */}
          <div className="sm:flex sm:items-start sm:justify-between">
            <div className="max-w-4xl text-sm text-gray-500">
              <p>
                You may cancel your subscription at any time. Once your
                subscription has been cancelled, you will have the option to
                resume the subscription until the end of your current billing
                cycle.
              </p>
            </div>
            <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
              <button
                type="button"
                // className="rounded bg-white px-2 py-1 text-xs font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
              >
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-12 sm:space-y-16">
          <h2 className="text-2xl font-bold leading-7 text-gray-900">
            Receipts
          </h2>
        </div>
        <div className="p-4 max-w-2xl rounded-2xl ring-1 ring-gray-100 drop-shadow-sm mt-4 lg:mx-0 lg:flex lg:max-w-none bg-white"></div>
      </div>
    </>
  );
};

export default Billing;
