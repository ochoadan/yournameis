import Link from "next/link";
import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import SignUpAuthUserForm from "@/components/auth/SignUpAuthUserForm";

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
      <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto h-12 w-auto text-sky-600" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
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
      </div>
    </>
  );
}