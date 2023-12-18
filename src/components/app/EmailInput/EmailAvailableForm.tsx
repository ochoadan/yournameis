"use client";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { EmailInput, EmailCombobox } from "./ECInputs";
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Combobox } from "@headlessui/react";

interface Domain {
  id: number;
  name: string;
}

interface EmailFormsProps {
  domainsData: Domain[];
}

const EmailAvailableForm = ({ domainsData: domains }: EmailFormsProps) => {
  const [selected, setSelected] = useState(domains[0]);
  const [query, setQuery] = useState("");
  const [availability, setAvailability] = useState<string | null>(null);
  const [responseStatus, setResponseStatus] = useState<number>(0);

  const filteredDomains =
    query === ""
      ? domains
      : domains.filter((domain) =>
          domain.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  async function handleSubmit(formData: FormData) {
    const rawFormData = {
      name: formData.get("name"),
      domain: formData.get("domain"),
    };
    const response = await fetch("/api/app/email-available-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });
    const res = await response;
    if (res.status === 200) {
      setAvailability(
        `Email ${rawFormData.name}@${rawFormData.domain} is available.`
      );
      setResponseStatus(200);
      return;
    } else if (res.status === 409) {
      setAvailability(
        `Email ${rawFormData.name}@${rawFormData.domain} is not available.`
      );
      setResponseStatus(409);
      return;
    } else {
      setAvailability("An error occurred. Please try again.");
      setResponseStatus(res.status);
      return;
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <div className="flex space-x-2 mt-4 max-w-2xl mx-auto lg:mx-0">
          <div className="w-1/2 min-w-0 flex-1 relative">
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
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              placeholder="Jane"
            />
          </div>
          <div className="flex items-center">
            <MdOutlineAlternateEmail />
          </div>
          <Combobox value={selected} onChange={setSelected}>
            <div className="min-w-0 flex-1 relative z-50">
              <div className="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm">
                <Combobox.Label
                  htmlFor="name"
                  className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  Last
                </Combobox.Label>
                <Combobox.Input
                  type="text"
                  name="domain"
                  id="domain"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  placeholder="Smith"
                  onClick={(event) =>
                    (event.target as HTMLInputElement).select()
                  }
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
                {filteredDomains.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredDomains.map((domain) => (
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
          <button
            type="submit"
            className="hidden lg:inline-flex items-center gap-x-1.5 rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Verify Availability
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="lg:hidden inline-flex mt-4 items-center gap-x-1.5 rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Verify Availability
          </button>
        </div>
      </form>
      {availability && (
        <div
          className={`flex mt-2 justify-center lg:justify-start ${
            responseStatus === 200
              ? "text-green-600"
              : responseStatus === 409
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          <div className="flex items-center">{availability}</div>
        </div>
      )}
    </>
  );
};

export default EmailAvailableForm;
