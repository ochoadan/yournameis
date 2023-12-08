import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import SigninAuthUserForm from "@/components/auth/SigninAuthUserForm";
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
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="mx-auto h-12 w-auto text-sky-600" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Continue to your account
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
                Please use Google to sign-in
              </h3>
            </div>
          </div>
        </div>
      </div>
      <SigninAuthUserForm />
    </div>
  );
}
