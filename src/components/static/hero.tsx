"use client";

import Image from "next/image";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { MdOutlineAlternateEmail } from "react-icons/md";
import EmailCreate from "../EmailCreate";

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
        </div>
        <div className="flex mt-2">
          <EmailCreate />
        </div>
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
