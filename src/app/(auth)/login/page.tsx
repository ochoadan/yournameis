import Link from "next/link";
import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import LoginAuthUserForm from "@/components/auth/LoginAuthUserForm";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign up for an account.",
};

export default async function Example() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="mx-auto h-12 w-auto text-sky-600" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log in to your account
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
                Please use Google to Sign In
              </h3>
              {/* <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <LoginAuthUserForm />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-sky-600 hover:text-sky-500"
          >
            Create Account
          </Link>
        </p>
      </div>
    </>
  );
}
