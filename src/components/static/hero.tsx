"use client";

import Image from "next/image";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineAlternateEmail } from "react-icons/md";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const domains = [
  { id: 1, name: "nibarger.com" },
  { id: 2, name: "witner.com" },
  { id: 3, name: "brigidi.com" },
  { id: 4, name: "ilges.com" },
  { id: 5, name: "rudicil.com" },
  { id: 6, name: "ellifritz.com" },
  { id: 7, name: "englett.com" },
  { id: 8, name: "maddry.com" },
  { id: 9, name: "padgette.com" },
  { id: 10, name: "barklow.com" },
  { id: 11, name: "ahmad.top" },
];
export default function Hero() {
  const [selected, setSelected] = useState(domains[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? domains
      : domains.filter((domain) =>
          domain.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-12 lg:items-start">
      <div className="lg:px-0 lg:pr-4 py-16 lg:py-0 lg:pt-32 col-span-7">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center lg:text-start">
            Business email for individuals
          </h1>

          <div className="flex gap-2 mt-6 lg:mx-0 mx-auto">
            <div className="relative ">
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
            <div className="flex items-center text-xl">
              <MdOutlineAlternateEmail />
            </div>
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative">
                <div className="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm">
                  <Combobox.Label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                  >
                    Last
                  </Combobox.Label>
                  <Combobox.Input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    placeholder="Smith"
                    onFocus={(event) => event.target.select()}
                    onChange={(event) => setQuery(event.target.value)}
                    displayValue={(person: { name: string }) =>
                      (person as { name: string }).name
                    }
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((domain) => (
                      <Combobox.Option
                        key={domain.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-sky-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={domain}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {domain.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-sky-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
        </div>
        <div className="mt-4">
          Didn't find your last name? Make a request and get it within a day
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
