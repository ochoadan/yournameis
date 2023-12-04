"use client";

import { FaGoogle } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import GoogleButton from "./googlebutton";
import { useState } from "react";
import { clsx } from "clsx";

export default function Example() {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] mb-24">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div
            className="space-y-6"
            // action="#"
            // method="POST"
          >
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
                  // type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className={clsx(
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6",
                    {
                      "ring-red-300 focus:ring-red-500": isClicked,
                      "focus:ring-sky-600": !isClicked,
                    }
                  )}
                />
              </div>
            </div>

            <div>
              <button
                // type="submit"
                onClick={() => {
                  if (emailRegex.test(email)) {
                    // signIn("email", { email, callbackUrl: "/" });
                    signIn("email", { email });
                  } else {
                    setIsClicked(true);
                    setEmail("");
                  }
                }}
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Sign in
              </button>
            </div>
            {isClicked && (
              <p className="text-xs text-red-500">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            {/* <div className="mt-6 grid grid-cols-2 gap-4"> */}
            <div className="mt-6 grid gap-4">
              {/* <button
                // href="#"
                disabled
                className="cursor-not-allowed flex w-full items-center justify-center gap-3 rounded-md bg-[#333333] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <FaMicrosoft className="h-5 w-5" />
                <span className="text-sm font-semibold leading-6">
                  Microsoft
                </span>
              </button> */}

              {/* <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                > */}
              <GoogleButton />
              {/* </form> */}
              {/* <button
                  onClick={() => signIn()}
                  className="flex w-full items-center justify-center gap-3 rounded-md bg-[#333333] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                >
                  <FaGoogle className="h-5 w-5" />
                  <span className="text-sm font-semibold leading-6">Google</span>
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
