"use client";

import { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

function SvgComputerHands(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 518.77 518.77"
      {...props}
    >
      <circle cx="259.38" cy="259.38" r="259.38" fill="#cfe0ff" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M138.42 243.95h241.93c4.28 0 9.86 3.51 12.39 7.79l66.16 112.03c2.53 4.29 1.09 7.79-3.19 7.79H63.06c-4.29 0-5.72-3.51-3.19-7.79l66.16-112.03c2.53-4.29 8.11-7.79 12.39-7.79Z"
      />
      <path
        fill="#4d4d4d"
        fill-rule="evenodd"
        d="M138.42 235.94h241.93c4.28 0 9.86 3.51 12.39 7.79l66.16 112.03c2.53 4.29 1.09 7.79-3.19 7.79H63.06c-4.29 0-5.72-3.5-3.19-7.79l66.16-112.03c2.53-4.29 8.11-7.79 12.39-7.79Z"
      />
      <path
        fill="#333"
        fill-rule="evenodd"
        d="m300.45 308 6.52 32.54H211.8l6.52-32.54h82.13zM155.34 256.15h18.4c-1.17 3.1-2.34 6.19-3.54 9.29h-19.17c1.45-3.1 2.86-6.19 4.31-9.29Zm5.66-12.21h17.42c-1.2 3.1-2.37 6.2-3.54 9.3h-18.19c1.45-3.1 2.86-6.19 4.31-9.3Zm-22.37 0h17.36l-4.52 9.3h-18.13l5.29-9.3Zm44.77 0h17.42c-.86 3.1-1.69 6.2-2.55 9.3h-18.19c1.14-3.1 2.22-6.19 3.32-9.3Zm22.4 0h17.42c-.52 3.1-1.05 6.2-1.57 9.3h-18.19c.8-3.1 1.57-6.19 2.34-9.3Zm22.43 0h17.39c-.19 3.1-.37 6.2-.58 9.3h-18.16c.46-3.1.89-6.19 1.35-9.3Zm22.4 0h17.39c.15 3.1.28 6.2.4 9.3h-18.16c.12-3.1.25-6.19.37-9.3Zm22.4 0h17.42l1.38 9.3h-18.19c-.21-3.1-.4-6.19-.62-9.3Zm22.4 0h17.42c.8 3.1 1.57 6.2 2.37 9.3h-18.19c-.52-3.1-1.08-6.19-1.6-9.3Zm22.4 0h17.42c1.14 3.1 2.25 6.2 3.35 9.3h-18.19c-.86-3.1-1.72-6.19-2.59-9.3Zm22.43 0h17.39c1.48 3.1 2.89 6.2 4.34 9.3h-18.16c-1.2-3.1-2.4-6.19-3.57-9.3Zm22.4 0h17.42l5.32 9.3h-18.19l-4.55-9.3Zm-213.01 24.41h19.42c-1.17 3.1-2.34 6.19-3.54 9.29h-20.19c1.45-3.1 2.86-6.19 4.31-9.29Zm-5.63 12.2h20.4c-1.2 3.1-2.37 6.19-3.57 9.29h-21.17c1.45-3.1 2.86-6.19 4.34-9.29Zm-5.66 12.2h21.42c-1.2 3.1-2.37 6.19-3.57 9.29h-22.19c1.45-3.1 2.86-6.19 4.34-9.29Zm-27.54 0h21.39l-4.55 9.29H105.5l5.32-9.29Zm55.12 0h21.42l-2.58 9.29h-22.19c1.11-3.1 2.22-6.19 3.35-9.29Zm27.54 0h21.45c-.55 3.1-1.08 6.19-1.6 9.29h-22.19c.77-3.1 1.57-6.19 2.34-9.29Zm27.57 0h21.45c-.21 3.1-.4 6.19-.61 9.29H219.7c.46-3.1.92-6.19 1.35-9.29Zm27.57 0h21.45c.12 3.1.25 6.19.37 9.29h-22.19c.12-3.1.25-6.19.37-9.29Zm27.57 0h21.45c.46 3.1.89 6.19 1.35 9.29H276.8c-.22-3.1-.4-6.19-.62-9.29Zm27.57 0h21.45c.77 3.1 1.57 6.19 2.34 9.29h-22.19c-.52-3.1-1.05-6.19-1.6-9.29Zm27.57 0h21.45c1.11 3.1 2.22 6.19 3.32 9.29h-22.19c-.86-3.1-1.69-6.19-2.58-9.29Zm27.57 0h21.45c1.45 3.1 2.86 6.19 4.31 9.29h-22.19c-1.2-3.1-2.37-6.19-3.57-9.29Zm27.57 0h21.45l5.29 9.29h-22.19l-4.55-9.29Zm-268.71-12.2h20.37c-1.54 3.1-3.02 6.19-4.55 9.29h-21.14c1.78-3.1 3.54-6.19 5.32-9.29Zm52.53 0h20.4c-.86 3.1-1.72 6.19-2.59 9.29h-21.17c1.11-3.1 2.22-6.19 3.35-9.29Zm26.28 0h20.4c-.52 3.1-1.05 6.19-1.6 9.29H194.2c.8-3.1 1.57-6.19 2.37-9.29Zm26.28 0h20.4c-.18 3.1-.4 6.19-.62 9.29h-21.17c.46-3.1.92-6.19 1.39-9.29Zm26.28 0h20.4c.12 3.1.28 6.19.37 9.29h-21.17c.12-3.1.28-6.19.4-9.29Zm26.28 0h20.4c.46 3.1.92 6.19 1.35 9.29h-21.17c-.18-3.1-.4-6.19-.58-9.29Zm26.28 0h20.4c.8 3.1 1.57 6.19 2.34 9.29h-21.17c-.52-3.1-1.05-6.19-1.57-9.29Zm26.28 0h20.4c1.14 3.1 2.25 6.19 3.32 9.29h-21.17c-.83-3.1-1.69-6.19-2.55-9.29Zm26.28 0h20.4c1.48 3.1 2.89 6.19 4.31 9.29h-21.17c-1.17-3.1-2.34-6.19-3.54-9.29Zm26.28 0h20.43c1.79 3.1 3.54 6.19 5.29 9.29h-21.2c-1.51-3.1-2.98-6.19-4.52-9.29Zm-255.85-12.2h19.39c-1.51 3.1-3.02 6.19-4.55 9.29h-20.13c1.79-3.1 3.54-6.19 5.29-9.29Zm49.94 0h19.42c-.86 3.1-1.69 6.19-2.55 9.29H171.3c1.11-3.1 2.22-6.19 3.32-9.29Zm24.99 0h19.42c-.52 3.1-1.05 6.19-1.57 9.29h-20.19c.8-3.1 1.57-6.19 2.34-9.29Zm24.99 0h19.42c-.18 3.1-.37 6.19-.59 9.29h-20.19c.46-3.1.92-6.19 1.35-9.29Zm25.02 0h19.42c.12 3.1.25 6.19.37 9.29h-20.19c.15-3.1.25-6.19.4-9.29Zm24.99 0h19.42c.43 3.1.92 6.19 1.35 9.29h-20.19c-.18-3.1-.4-6.19-.58-9.29Zm24.99 0h19.42c.77 3.1 1.57 6.19 2.34 9.29h-20.19c-.49-3.1-1.05-6.19-1.57-9.29Zm24.99 0h19.42c1.11 3.1 2.25 6.19 3.33 9.29h-20.19c-.83-3.1-1.69-6.19-2.55-9.29Zm24.99 0H369c1.45 3.1 2.89 6.19 4.31 9.29h-20.16c-1.17-3.1-2.4-6.19-3.57-9.29Zm24.99 0h19.45c1.75 3.1 3.54 6.19 5.29 9.29h-20.19c-1.51-3.1-3.05-6.19-4.55-9.29Zm-242.92-12.2h18.37c-1.51 3.1-2.99 6.19-4.52 9.29h-19.14c1.78-3.1 3.54-6.19 5.29-9.29Zm47.36 0h18.43c-.86 3.1-1.69 6.19-2.58 9.29h-19.17c1.14-3.1 2.22-6.19 3.32-9.29Zm23.7 0h18.43c-.52 3.1-1.05 6.19-1.6 9.29h-19.17c.8-3.1 1.57-6.19 2.34-9.29Zm23.73 0h18.4c-.18 3.1-.37 6.19-.58 9.29h-19.2c.49-3.1.92-6.19 1.38-9.29Zm23.7 0h18.4c.12 3.1.28 6.19.4 9.29h-19.2c.15-3.1.28-6.19.4-9.29Zm23.7 0h18.43c.43 3.1.92 6.19 1.35 9.29h-19.17c-.18-3.1-.4-6.19-.62-9.29Zm23.7 0h18.43c.77 3.1 1.57 6.19 2.34 9.29h-19.17c-.52-3.1-1.08-6.19-1.6-9.29Zm23.73 0h18.4c1.11 3.1 2.25 6.19 3.32 9.29h-19.17c-.83-3.1-1.72-6.19-2.55-9.29Zm23.7 0h18.4c1.45 3.1 2.89 6.19 4.31 9.29h-19.17c-1.17-3.1-2.37-6.19-3.54-9.29Zm23.7 0h18.43c1.75 3.1 3.54 6.19 5.29 9.29h-19.2c-1.48-3.1-3.02-6.19-4.52-9.29Z"
      />
      <path
        fill="#333"
        d="M138.42 73.38h241.93c6.84 0 12.39 5.55 12.39 12.39v137.77c0 6.84-5.55 12.39-12.39 12.39H138.42c-6.84 0-12.39-5.55-12.39-12.39V85.77c0-6.84 5.55-12.39 12.39-12.39Z"
      />
      <path fill="#76a3f7" d="M134.08 81.43h250.61v146.45H134.08z" />
      <path
        fill="#666"
        fill-rule="evenodd"
        d="M147.25 234.08h224.26c1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.06-2.07 2.06H147.25c-1.14 0-2.06-.93-2.06-2.06 0-1.14.93-2.07 2.06-2.07Z"
      />
      <g fill-rule="evenodd">
        <path
          fill="#f93"
          d="M190.91 332.22c3.76-5.1 9.23-9.07 15.73-11.3 2.03-.7 3.47-2.34 3.73-4.27.26-1.93-.7-3.82-2.5-4.93-9.83-6.05-23.23-4.33-30.74 3.94-1.5 1.65-3.99 2.29-6.24 1.6s-3.79-2.55-3.84-4.67c-.24-9.83 4.62-21.98 11.17-29.9 4.57-5.53 12.29-9.05 19.67-10.18 4.84-.74 9.45-2.38 13.53-4.82 3.35-2 4.87-5.7 3.75-9.16-1.12-3.45-4.63-5.86-8.66-5.95l-5.9-4.38c-5.15-3.82-12.57-4-17.95-.44l-5.66-.22c-8.37-.32-16.69 1.34-24.1 4.82l-9.59 5.91c-4.68 2.89-8.08 7.15-9.59 12.04v-6.35c0-3.22 1.62-6.28 4.43-8.32l11.31-6.79c2.42-1.45 3.73-3.99 3.4-6.57-.34-2.58-2.27-4.79-5-5.71-2.73-.92-5.81-.41-7.99 1.33l-12.54 6.79c-6.29 3.4-9.82 9.45-10.33 15.99l-1.99 25.56-47.03 77.29c-13.6 25.11 35.97 50.31 49.83 25.31l17.24-31.09c17.01 1.88 27.64-1.55 38.24-8.66 7.15-4.79 12.54-9.95 17.65-16.88Z"
        />
        <path
          fill="#fff"
          d="M72.54 350.2c23.59-27.72 74.09 1.86 57.68 33.21L91.6 457.18a260.813 260.813 0 0 1-54.95-64.81l35.88-42.17Z"
        />
        <path
          fill="#1a1a1a"
          stroke="#000"
          stroke-miterlimit="22.93"
          stroke-width=".57"
          d="M58.1 364.24c26.75-31.43 84.02 2.11 65.41 37.66l-29.85 57.02a260.861 260.861 0 0 1-58.03-68.28l22.47-26.4Z"
        />
        <path
          fill="#f93"
          d="M327.86 332.22c-3.76-5.1-9.24-9.07-15.73-11.3-2.03-.7-3.47-2.34-3.73-4.27-.26-1.93.7-3.82 2.5-4.93 9.83-6.05 23.23-4.33 30.74 3.94 1.5 1.65 3.99 2.29 6.24 1.6s3.79-2.55 3.84-4.67c.24-9.83-4.62-21.98-11.17-29.9-4.57-5.53-12.29-9.05-19.67-10.18-4.84-.74-9.45-2.38-13.53-4.82-3.35-2-4.87-5.7-3.75-9.16 1.12-3.45 4.63-5.86 8.66-5.95l5.9-4.38c5.15-3.82 12.57-4 17.95-.44l5.66-.22c8.37-.32 16.69 1.34 24.1 4.82l9.59 5.91c4.68 2.89 8.08 7.15 9.59 12.04v-6.35c0-3.22-1.62-6.28-4.43-8.32l-11.31-6.79c-2.42-1.45-3.73-3.99-3.4-6.57.34-2.58 2.26-4.79 5-5.71 2.73-.92 5.82-.41 7.99 1.33l12.54 6.79c6.29 3.4 9.82 9.45 10.33 15.99l1.99 25.56 47.03 77.29c13.6 25.11-35.97 50.31-49.83 25.31l-17.24-31.09c-17.01 1.88-27.64-1.55-38.24-8.66-7.15-4.79-12.54-9.95-17.65-16.88Z"
        />
        <path
          fill="#fff"
          d="M446.23 350.2c-23.59-27.72-74.09 1.86-57.68 33.21l38.61 73.77a260.813 260.813 0 0 0 54.95-64.81l-35.88-42.17Z"
        />
        <path
          fill="#1a1a1a"
          stroke="#000"
          stroke-miterlimit="22.93"
          stroke-width=".57"
          d="M460.67 364.24c-26.75-31.43-84.02 2.11-65.41 37.66l29.85 57.02a260.672 260.672 0 0 0 58.03-68.28l-22.47-26.4Z"
        />
      </g>
      <path fill="#fff" d="M134.08 81.43h250.61v8.69H134.08z" />
      <path
        fill="#4679d6"
        fill-rule="evenodd"
        d="M237.23 97.35h44.3c2.39 0 4.34 1.96 4.34 4.35 0 2.39-1.96 4.35-4.34 4.35h-44.3c-2.39 0-4.35-1.96-4.35-4.35 0-2.39 1.96-4.35 4.35-4.35Z"
      />
      <path
        fill="#a6c5ff"
        fill-rule="evenodd"
        d="M338.08 171.81v42.77H168.15l20.45-13.54 11.75 3.71 18.91-9.38 13.86 2.1 19.65-11.32 31.27 7.11 17.72-12.34 18.67 1.48 17.65-10.59z"
      />
      <g fill-rule="evenodd">
        <path
          fill="#4679d6"
          d="M188.99 109.55c11.79 0 21.35 9.56 21.35 21.35s-9.56 21.35-21.35 21.35-21.35-9.56-21.35-21.35 9.56-21.35 21.35-21.35Zm0 10.73c-5.87 0-10.62 4.75-10.62 10.62s4.75 10.62 10.62 10.62 10.62-4.75 10.62-10.62-4.75-10.62-10.62-10.62Z"
        />
        <path
          fill="#fff"
          d="M191.1 152.15a21 21 0 0 1-2.11.1c-8.43 0-15.71-4.88-19.18-11.97l9.64-4.71c1.73 3.53 5.35 5.96 9.54 5.96.35 0 .7-.02 1.05-.05l1.06 10.68Z"
        />
        <path
          fill="#4679d6"
          d="M259.57 109.55c11.79 0 21.35 9.56 21.35 21.35s-9.56 21.35-21.35 21.35-21.35-9.56-21.35-21.35 9.56-21.35 21.35-21.35Zm0 10.73c-5.87 0-10.62 4.75-10.62 10.62s4.75 10.62 10.62 10.62 10.62-4.75 10.62-10.62-4.75-10.62-10.62-10.62Z"
        />
        <path
          fill="#fff"
          d="M259.57 109.55c6.8 0 12.86 3.18 16.77 8.14l-8.43 6.64c-1.95-2.46-4.96-4.05-8.34-4.05-5.16 0-9.46 3.68-10.42 8.56l-10.53-2.08c1.93-9.81 10.57-17.21 20.95-17.21Z"
        />
        <path
          fill="#4679d6"
          d="M330.15 109.55c11.79 0 21.35 9.56 21.35 21.35s-9.56 21.35-21.35 21.35-21.35-9.56-21.35-21.35 9.56-21.35 21.35-21.35Zm0 10.73c-5.87 0-10.62 4.75-10.62 10.62s4.75 10.62 10.62 10.62 10.62-4.75 10.62-10.62-4.75-10.62-10.62-10.62Z"
        />
        <path
          fill="#fff"
          d="M338.61 150.51a21.386 21.386 0 0 1-17.72-.35l4.65-9.67c1.39.67 2.95 1.05 4.6 1.05 1.5 0 2.92-.31 4.21-.87l4.25 9.85Z"
        />
      </g>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M167.12 171.37c0-.29.23-.52.52-.52s.52.23.52.52v42.18h178.42c.28 0 .52.23.52.52s-.23.52-.52.52H167.13v-43.22Z"
      />
      <path
        fill="#4679d6"
        d="M244.21 162.67h30.36c2.4 0 4.34 1.95 4.34 4.34 0 2.4-1.95 4.35-4.34 4.35h-30.36c-2.4 0-4.35-1.95-4.35-4.35 0-2.4 1.95-4.35 4.35-4.35Z"
      />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M167.9 214.51c-.25.14-.56.06-.71-.18a.531.531 0 0 1 .18-.71l21.23-12.59 11.64 2.64 19.02-8.3 14.21 1.09 19.3-10.31 31.07 6.02 17.91-11.25 18.4.44 17.39-10.43c.24-.15.56-.07.71.18.15.24.07.56-.18.71l-17.65 10.59-18.39-.44-18 11.3-31.12-6.03-19.24 10.28-14.25-1.1-19.09 8.34-11.57-2.62-20.88 12.38Z"
      />
    </svg>
  );
}

interface Domain {
  id: number;
  name: string;
}

interface Route {
  id: number;
  name: string;
  fromEmail: string;
  toEmail: string;
}

interface EmailFormsProps {
  domainsData: Domain[];
  routesData: Route[];
  session: any;
}

const CreateEmail = ({
  domainsData: domains,
  routesData: routes,
  session,
}: EmailFormsProps) => {
  const router = useRouter();
  const [appCreate, setAppCreate] = useState(false);
  const [selected, setSelected] = useState(domains[0]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    try {
      setLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      const rawFormData = {
        name: formData.get("name"),
        domain: formData.get("domain"),
        toEmail: formData.get("toEmail"),
      };
      const response = await fetch("/api/app/create-email-route", {
        method: "POST",
        body: JSON.stringify(rawFormData),
      });

      if (response.status === 201) {
        console.log("Success:", await response);
        setAppCreate(false);
        router.refresh();
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set the error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again."); // Set a generic error message
    } finally {
      setLoading(false); // Set loading state to false
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 py-5 sm:px-6">
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Email Routes
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Here you have the ability to create, delete and manage your email
            routes.
          </p>
          {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
        </div>
        <div className="flex-shrink-0">
          {/* TODO: Investigate: Somehow this doens't do what i desire but > does: session?.user.addressesCount >= session?.user.allowedAddressesCount */}
          {!appCreate &&
            session?.user.addressesCount <
              session?.user.allowedAddressesCount && (
              <button
                onClick={() => setAppCreate(true)}
                type="button"
                className="mt-2 md:mt-0 relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Create Email
              </button>
            )}
        </div>
      </div>
      {/* TODO: Investigate: Somehow this doens't do what i desire but > does: session?.user.addressesCount >= session?.user.allowedAddressesCount */}
      {appCreate &&
        session?.user.addressesCount < session?.user.allowedAddressesCount && (
          <form action={handleSubmit}>
            <div className="mx-4 lg:mx-8 my-4 flex-wrap items-center justify-between md:flex">
              <div className="flex space-x-2 mt-4">
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
                    pattern="^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){0,2}$"
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
                                active
                                  ? "bg-sky-600 text-white"
                                  : "text-gray-900"
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
              {/* {session.user.addressesCount < 0 && (
                <div className="flex mt-3 items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => setAppCreate(false)}
                  >
                    Cancel
                  </button>
                  <button
                    // disabled={createAppLoading}
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Submit
                  </button>
                </div>
              )} */}
            </div>

            <div className="mt-2 mx-4 lg:mx-8 my-4 flex-wrap items-center justify-between md:flex">
              <div className="md:max-w-[442px] min-w-0 flex-1 relative">
                <label
                  htmlFor="toEmail"
                  className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
                >
                  Send To
                </label>
                <input
                  type="text"
                  name="toEmail"
                  id="toEmail"
                  pattern="^[a-zA-Z0-9.]{2,}@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  placeholder={`Leave empty for: ${session.user.email}`}
                />
              </div>
              <div className="flex mt-3 items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => setAppCreate(false)}
                >
                  Cancel
                </button>
                <button
                  disabled={loading}
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
            {/* )} */}
          </form>
        )}

      {routes.length === 0 ? (
        <div className="text-sm font-medium text-gray-500 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6">
          <div className="max-h-fit mx-auto">
            <SvgComputerHands className="max-w-[256px] max-h-[256px] mx-auto" />
            <p className="text-center my-4">
              Get started by creating an Email Route.
            </p>
          </div>
        </div>
      ) : (
        // <div className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 lg:px-8 py-4">
        //   You have no email routes. Start by creating one.
        // </div>
        <>
          <table className="w-full whitespace-nowrap text-left">
            <colgroup>
              <col className="w-full sm:w-1/3" />
              <col className="lg:w-1/3" />
              <col className="lg:w-1/3" />
            </colgroup>
            <thead className="bg-gray-400/5 border-b border-gray-200 text-sm leading-6 text-black">
              <tr>
                <th
                  scope="col"
                  className="py-2 pl-4 font-semibold sm:pl-6 lg:pl-8"
                >
                  From Email
                </th>
                <th
                  scope="col"
                  className="hidden py-2 text-right font-semibold sm:table-cell sm:text-center"
                >
                  To Email
                </th>
                <th
                  scope="col"
                  className="py-2 pr-4 text-right font-semibold sm:pr-6 lg:pr-8"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {routes.map((route) => (
                <tr
                  key={route.id}
                  className="relative justify-between gap-x-6 px-4 py-5 sm:px-6"
                >
                  <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8 flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        <Link href="#">
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {route.fromEmail}
                        </Link>
                      </p>
                    </div>
                  </td>
                  <td className="hidden py-4 text-sm sm:table-cell sm:text-center">
                    {route.toEmail}
                  </td>
                  <td className="py-4 pr-4 pl-0 text-right text-sm leading-6 text-gray-400 sm:pr-6 lg:pr-8">
                    <div className="flex items-center justify-end gap-x-2 sm:justify-end">
                      <div className="text-green-500">Active</div>
                      <div className={"flex-none rounded-full p-1"}>
                        <div className="h-1.5 w-1.5 rounded-full bg-current text-green-500" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default CreateEmail;

// <div
//   key={route.fromEmail}
//   className="flex flex-wrap items-center justify-between md:flex-nowrap px-4 lg:px-8 py-4"
// >
//   {route.fromEmail}
// </div>
