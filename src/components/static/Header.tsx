// import SigninButton from "./SigninButton";

import Link from "next/link";
import SigninButton from "../SigninButton";
import { Logo } from "../Logo";
import CustomLink from "@/components/custom-link";
import { FullLogo } from "../FullLogo";

const navigation = [
  { name: "Pricing", href: "#pricing" },
  { name: "Services", href: "https://www.halfnine.com" },
  // { name: "Company", href: "#" },
];

const Appbar = () => {
  return (
    <nav
      className="mx-auto flex max-w-8xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">YourNameIs</span>
          <FullLogo className="h-8 w-auto" />
        </Link>
      </div>
      {/* <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <CustomLink
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </CustomLink>
        ))}
      </div> */}
      <SigninButton />
    </nav>
  );
};

export default Appbar;
