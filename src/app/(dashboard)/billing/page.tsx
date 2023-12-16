import { auth } from "auth";
import CheckoutButton from "@/components/CheckoutButton";
import { CheckIcon } from "@heroicons/react/20/solid";
import PortalButton from "@/components/PortalButton";

interface PricingTier {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  tier: number;
}
const pricingTiers: PricingTier[] = [
  {
    title: "Freelancer",
    description: "The essentials to get you started",
    price: "$20",
    features: [
      "1 Email Forwarding",
      "Support from friendly humans",
      "Spam & Virus protection",
      "Redirect Subdomain (Planned)",
    ],
    buttonText: "Buy plan",
    tier: 1,
  },
  {
    title: "Partnership",
    description: "For one to three family members",
    price: "$35",
    features: [
      "3 Emails Forwarding",
      "Mailbox (Planned)",
      "Support from friendly humans",
      "Spam & Virus protection",
      "3 Redirect Subdomains (Planned)",
    ],
    buttonText: "Buy plan",
    tier: 2,
  },
  {
    title: "Family",
    description: "For one to ten family members",
    price: "$60",
    features: [
      "10 Emails Forwarding",
      "Mailbox (Planned)",
      "10 GB Storage (Planned)",
      "Support from friendly humans",
      "Spam & Virus protection",
      "10 Redirect Subdomains (Planned)",
    ],
    buttonText: "Buy plan",
    tier: 3,
  },
];

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  return (
    <div className="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10">
      <h3 className="text-gray-900 text-lg font-semibold leading-8">
        {tier.title}
      </h3>
      <p className="text-gray-600 mt-4 text-sm leading-6">{tier.description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-gray-900 text-4xl font-bold tracking-tight">
          {tier.price}
        </span>
        <span className="text-gray-600 text-sm font-semibold leading-6">
          /year
        </span>
      </p>
      <CheckoutButton
        tier={tier.tier}
        className="bg-sky-600 w-full text-white shadow-sm hover:bg-sky-500 focus-visible:outline-sky-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {tier.buttonText}
      </CheckoutButton>
      <ul
        role="list"
        className="text-gray-600 mt-8 space-y-3 text-sm leading-6 xl:mt-10"
      >
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              className="text-sky-600 h-6 w-5 flex-none"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Billing = async () => {
  const session = await auth();

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 shadow rounded-lg">
        {session?.user.isActive ? (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-02 flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="mx-auto max-w-3xl sm:text-center">
              <PortalButton className="bg-sky-600 w-full text-white shadow-sm hover:bg-sky-500 focus-visible:outline-sky-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Manage Subscription
              </PortalButton>
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
                Pick the plan that’s right for you
              </h2>
            </div>
            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.title} tier={tier} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Billing;
