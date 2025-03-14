import Image from "next/image";
import EmailAvailableForm from "@/components/app/EmailInput/EmailAvailableForm";
import { getDomainData } from "@/utils/prisma-calls";

export default async function Hero() {
  // TODO: Fetch data from API
  // const response = await fetch(\
  //   `${process.env.NEXTAUTH_URL}/api/app/email-available-check`,
  //   { cache: "no-store" }
  // );

  // const res = await response.json();
  const domainsData = await getDomainData();

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:items-start">
      <div className="lg:px-0 lg:pr-4 py-16 lg:py-0 lg:pt-32 col-span-7">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center lg:text-start">
            Business email for individuals
          </h1>
        </div>
        <EmailAvailableForm domainsData={domainsData} />
        <div className="flex mt-4 justify-center lg:justify-start">
          Sign in to create an email route.
        </div>
      </div>
      <div className="col-span-5 hidden lg:block">
        <Image
          src="/email-capture-animate.svg"
          alt="Email Magnet Animation"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
