import { MdOutlineAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:items-start">
          <div className="lg:px-0 lg:pr-4 py-16 lg:py-0 lg:pt-32 col-span-7">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center lg:text-start">
                Business email for individuals
              </h1>

              <div className="flex gap-2 mt-6 max-w-sm lg:mx-0 mx-auto">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    First
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex items-center font-bold text-xl">
                  @
                </div>
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    Last
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder="Smith"
                  />
                </div>
                <div className="flex items-center font-bold text-xl">.com</div>
              </div>
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
      </div>
    </div>
  );
}
