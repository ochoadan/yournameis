"use client";

import { FaGoogle, FaMicrosoft } from "react-icons/fa6";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

export default async function Example() {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled
                  className="cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  disabled
                  className="cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  href="#"
                  className="font-semibold text-sky-600 hover:text-sky-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled
                className="cursor-not-allowed flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Sign in
              </button>
            </div>
          </form>

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
              {/* <Link
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#333333] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <FaMicrosoft className="h-5 w-5" />
                <span className="text-sm font-semibold leading-6">
                  Microsoft
                </span>
              </Link> */}

              {/* <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                > */}
              <button
                onClick={() => signIn("google")}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#333333] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
              >
                <FaGoogle className="h-5 w-5" />
                <span className="text-sm font-semibold leading-6">Google</span>
              </button>
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