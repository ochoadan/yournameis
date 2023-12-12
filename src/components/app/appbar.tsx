"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Logo";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const PagesNav = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const Linkx = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
        pathname === href
          ? "border-sky-500 text-gray-900"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <>
      <Linkx href="/dashboard">Dashboard</Linkx>
      <Linkx href="/billing">Billing</Linkx>
      {session?.user?.isAdmin && <Linkx href="/admin">Admin</Linkx>}
    </>
  );
};

const DisclosureNav = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const Linkx = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Disclosure.Button
      href={href}
      as="a"
      className={clsx("block border-l-4 py-2 pl-3 pr-4 text-base font-medium", {
        "border-sky-500 bg-sky-50 text-sky-700": pathname === href,
        "border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 text-gray-600":
          pathname !== href,
      })}
    >
      {children}
    </Disclosure.Button>
  );
  return (
    <>
      <Linkx href="/dashboard">Dashboard</Linkx>
      <Linkx href="/billing">Billing</Linkx>
      {session?.user?.isAdmin && <Linkx href="/admin">Admin</Linkx>}
    </>
  );
};

const AppBarNav = () => {
  const { data: session } = useSession();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Logo className="h-8 w-auto" />
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <PagesNav session={session} />
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
                      Account
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-3">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="truncate text-sm font-medium text-gray-900">
                          {session?.user?.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/request"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Request
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/affiliates"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Referalls
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="https://www.halfnine.com/contact"
                              target="_blank"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/settings"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              onClick={() => signOut()}
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <DisclosureNav session={session} />
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div>
                  <p className="text-base font-medium text-gray-800">
                    Signed in as
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {session?.user?.email}
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/request"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Request
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/affiliates"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Referalls
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="https://www.halfnine.com/contact"
                  target="_blank"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Support
                </Disclosure.Button>
                <div className="border-t border-gray-200 pt-1">
                  <Disclosure.Button
                    type="submit"
                    onClick={() => signOut()}
                    as="a"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AppBarNav;
