import Link from "next/link";
import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import SignUpAuthUserForm from "@/components/auth/SignUpAuthUserForm";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account.",
};

export default async function Example() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="mx-auto h-12 w-auto text-sky-600" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
        <div className="rounded-md bg-yellow-50 p-4 mt-2">
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Please use Google to Sign Up
              </h3>
            </div>
          </div>
        </div>
      </div>

      <SignUpAuthUserForm />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
          >
            Log In
          </Link>
        </p>
      </div>
    </>
  );
}
