import Header from "@/components/static/Header";
import Footer from "@/components/static/footer";
import Hero from "@/components/static/hero";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";
import {
  CurrencyDollarIcon,
  FunnelIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import Faq from "@/components/pages/faq";
import Image from "next/image";

const features = [
  {
    name: "Email Encryption",
    description:
      "All email is encrypted in transit and at rest. We take your privacy seriously",
    icon: LockClosedIcon,
  },
  {
    name: "Spam Filtering",
    description:
      "All your email is filtered through gmail or your choice of provider.",
    icon: FunnelIcon,
  },
  {
    name: "Competitive Pricing",
    description:
      "We offer a competitive pricing over competitors or alternatives",
    icon: CurrencyDollarIcon,
  },
];
export const metadata: Metadata = {
  title: "YourNameIs - Business Email for Individuals",
  description: "YourNameIs is a business email service for individuals.",
};

const stats = [
  { id: 1, name: "Email Transactions a month", value: "1,000+" },
  { id: 2, name: "Exceptionally Competitive Pricing", value: "2x Value" },
  { id: 3, name: "Uptime Guarantee", value: "99.9%" },
  // { id: 4, name: "Existing Email Routes", value: "400+" },
];
const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="py-8 md:py-12 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <div className="bg-white py-24">
        <div className="mx-auto max-w-8xl">
          <div className="relative isolate overflow-hidden sm:px-6 lg:px-8 py-20 sm:rounded-3xl sm:py-24 lg:py-12 xl:pr-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
                  {/* Directly into your personal inbox. */}
                  Deliver into personal inbox.
                  {/* <br />
                  Start using our app today. */}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  No need to check multiple email accounts. Get all your email
                  in one place.
                </p>
              </div>
              <Image
                src="/img/capture.png"
                alt="Product screenshot"
                className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
                quality={81}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-700 dark:text-gray-300 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-black dark:text-white">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-sky-500"
                          aria-hidden="true"
                        />
                        {feature.name} -
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <div className="py-24 md:py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by entrepreneurs worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We provide an Exeptional pricing over competitors or alternatives,
              with a proven track record of 99.9% uptime.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="py-8 md:py-12 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
