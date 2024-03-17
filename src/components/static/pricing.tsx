import { CheckIcon } from "@heroicons/react/20/solid";
import CheckoutButton from "@/components/CheckoutButton";
import Link from "next/link";

interface PricingTier {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  tier: number;
}

const includedFeatures = [
  "Fast domain transfer",
  "24/7 support from friendly humans",
];

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
    price: "$80",
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

export default function Pricing() {
  return (
    <div className="bg-white pt-12 sm:pt-24" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A plan that fits your needs
          </h2>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 bg-gray-900 ring-gray-900 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-bold tracking-tight text-white">
              Buy Domain Only
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-300">
              If there aren&apos;t any routes on the domain, we can sell it to you
              for a fixed price.
            </p>
            <div className="mt-8 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-white">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 text-gray-300">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-800 py-10 text-center ring-1 ring-inset ring-white/5 lg:flex lg:flex-col lg:justify-center lg:py-8">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-200">
                  One time payment
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    $200 USD
                  </span>
                </p>
                <Link
                  href="https://www.halfnine.com/contact"
                  target="_blank"
                  className="mt-10 block w-full rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Request Domain
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
