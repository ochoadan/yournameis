import { auth, signOut } from "auth";
import Link from "next/link";

export default async function SigninButton() {
  const session = await auth();
  if (session && session.user) {
    return (
      <div className="flex flex-1 items-center justify-end gap-x-6">
        <p className="text-gray-900 text-sm lg:font-semibold">
          {session.user.name}
        </p>
        <Link
          href="/dashboard"
          className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
        >
          Dashboard
        </Link>
        {/* <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="text-red-600">Sign Out</button>
        </form> */}
      </div>
    );
  }
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <Link
        href="/signin"
        className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Sign In
      </Link>
    </div>
  );
}
