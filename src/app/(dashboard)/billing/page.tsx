import FreelancerCheckoutButton from "@/components/FreelancerCheckoutButton";
import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Email Forwarding",
  "Support from friendly humans",
  "Spam & Virus protection (Coming soon)",
  "Redirect Subdomain (Coming soon)",
];

import { auth } from "auth";

const Billing = async () => {
  const session = await auth();

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow rounded-lg">
        {session?.user.isActive ? (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-02 flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="mx-auto max-w-3xl sm:text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Your account is active, no action required.
              </h2>
              <p className="mt-6 leading-5 text-gray-600">
                Application is still in development. Contact support for any
                account changes, or to cancel your account.
              </p>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-02 flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Activate your account
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Freelancer membership
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  The essentials for a better digital experience
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-sky-600">
                    What&apos;s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
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
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Yearly billing
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        $10
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span>
                    </p>
                    <FreelancerCheckoutButton className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                      Get access
                    </FreelancerCheckoutButton>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Application is still in development. Contact support for
                      any account changes, or to cancel your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Billing;
