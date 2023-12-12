import Header from "@/components/static/Header";
import Footer from "@/components/static/footer";
import Hero from "@/components/static/hero";
import Pricing from "@/components/static/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtuabyte - Business Email for Individuals",
  description: "Virtuabyte is a business email service for individuals.",
};

const stats = [
  { id: 1, name: "Email Transactions a day", value: "1,000+" },
  { id: 2, name: "Exceptional Competitive Pricing", value: "-73.5%" },
  { id: 3, name: "Uptime Guarantee", value: "99.9%" },
  { id: 4, name: "Existing Email Routes", value: "200+" },
];
const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="py-8 md:py-12 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <div className="py-8 md:py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
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
      <Pricing />
      <Footer />
    </div>
  );
};

export default Page;
