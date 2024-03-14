"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import GoogleButton from "./googlebutton";
import { clsx } from "clsx";

export default function SigninAuthUserForm() {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSignIn = () => {
    if (emailRegex.test(email)) {
      signIn("email", { email });
    } else {
      setIsClicked(true);
      setEmail("");
    }
  };

  return (
    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-[480px] mb-24">
      <div className="px-6 py-12 sm:rounded-lg sm:px-12">
        <div className="space-y-6">
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className={clsx(
                  " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                  {
                    "ring-red-300 focus:ring-red-500": isClicked,
                    "focus:ring-sky-600": !isClicked,
                  }
                )}
              />
            </div>
          </div>
            <button
              onClick={handleSignIn}
              className=" flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Continue
            </button>
          {isClicked && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex justify-center">
                <div className="flex-shrink-0">
                  <XCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Please enter a valid email address
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="relative mt-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-gray-50 px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <GoogleButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
