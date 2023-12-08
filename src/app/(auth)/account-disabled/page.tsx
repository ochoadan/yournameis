import Link from "next/link";

const Page = () => {
  return (
    <div>
      Your account has been disabled by an administrator. Please{" "}
      <Link target="_blank" className="text-blue-600" href={"https://www.halfnine.com/contact"}>
        contact support
      </Link>{" "}
      for more information.
    </div>
  );
};

export default Page;
