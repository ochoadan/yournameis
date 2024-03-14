import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import SigninAuthUserForm from "@/components/auth/SigninAuthUserForm";
import { FullLogo } from "@/components/FullLogo";
import Link from "next/link";

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
    <div className="flex min-h-screen flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <FullLogo className="mx-auto h-12 w-auto text-sky-600 opacity-85" />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {/* Sign-in & Create an Account */}
          {/* Sign-in or Create an Account */}
          Sign in / Create account
        </h2>
        <p className="mt-4 text-center text-sm leading-5 text-gray-600 max-w-[300px] mx-auto">
          By accessing our services, you agree to our{" "}
          <a
            href="/terms"
            className="font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Privacy Policy
          </a>
        </p>
      </div>
      <SigninAuthUserForm />
    </div>
  );
}
