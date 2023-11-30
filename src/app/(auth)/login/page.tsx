import Link from "next/link";
import { Logo } from "@/components/Logo";
import { auth } from "auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import LoginAuthUserForm from "@/components/auth/LoginAuthUserForm";

export const metadata: Metadata = {
  title: "Sign In",
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
          Log in to your account
        </h2>
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
