import { CheckIcon } from "@heroicons/react/20/solid";
import FreelancerCheckoutButton from "../FreelancerCheckoutButton";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A plan that fits your needs
          </h2>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 className={"text-gray-900 text-lg font-semibold leading-8"}>
              Freelancer
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-6">
              The essentials for a better digital experience
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-gray-900 text-4xl font-bold tracking-tight">
                $10
              </span>
              <span className="text-gray-600 text-sm font-semibold leading-6">
                {"/year"}
              </span>
            </p>
            <FreelancerCheckoutButton className="bg-sky-600 w-full text-white shadow-sm hover:bg-sky-500 focus-visible:outline-sky-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Buy plan
            </FreelancerCheckoutButton>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Email Forwarding
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Support from friendly humans
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Spam & Virus protection (Coming soon)
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Redirect Subdomain (Coming soon)
              </li>
            </ul>
          </div>
          <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 className={"text-gray-900 text-lg font-semibold leading-8"}>
              Businessman
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-6">Coming soon!</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-gray-900 text-4xl font-bold tracking-tight">
                $50
              </span>
              <span className="text-gray-600 text-sm font-semibold leading-6">
                /year
              </span>
            </p>
            <button
              // href={tier.href}
              // aria-describedby={tier.id}
              className="opacity-50 cursor-not-allowed w-full bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline-sky-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled
            >
              Coming soon!
            </button>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Mailbox Included
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                5 GB Storage
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Support from friendly humans
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                2nd level subdomain
              </li>
            </ul>
          </div>
          <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
            <h3 className={"text-gray-900 text-lg font-semibold leading-8"}>
              Executive
            </h3>
            <p className="text-gray-600 mt-4 text-sm leading-6">Coming soon!</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-gray-900 text-4xl font-bold tracking-tight">
                $200
              </span>
              <span className="text-gray-600 text-sm font-semibold leading-6">
                /year
              </span>
            </p>
            <button
              className="opacity-50 cursor-not-allowed w-full bg-sky-600 text-white shadow-sm hover:bg-sky-500 focus-visible:outline-sky-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled
            >
              Coming soon!
            </button>
            <ul
              role="list"
              className="text-gray-600 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                3 Adresses Included
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Mailbox Included
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                1TB+ Storage
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Root, blog and www Access
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                SMTP Access
              </li>
              <li className="flex gap-x-3">
                <CheckIcon
                  className="text-sky-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                />
                Support from friendly humans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
