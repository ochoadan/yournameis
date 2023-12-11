import Image from "next/image";
import EmailCreate from "@/components/app/EmailInput/EmailForms";

export default function Hero() {
  // TODO: Fetch data from API
  // const response = await fetch(\
  //   `${process.env.NEXTAUTH_URL}/api/app/email-available-check`,
  //   { cache: "no-store" }
  // );

  // const res = await response.json();

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:items-start">
      <div className="lg:px-0 lg:pr-4 py-16 lg:py-0 lg:pt-32 col-span-7">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center lg:text-start">
            Business email for individuals
          </h1>
        </div>
        {/* TODO: ADD form and errors on empty button */}
        <form className="flex mt-2">
          <EmailCreate availabilityButton={true} />
        </form>
        <div className="flex mt-4">
          Sign in to Create your email or request a new domain.
        </div>
      </div>
      <div className="col-span-5 hidden lg:block">
        <Image
          src="/email-capture-animate.svg"
          alt="Email Magnet Animation"
          width={500}
          height={500}
          // className="-my-16 lg:pt-8"
        />
      </div>
    </div>
  );
}
