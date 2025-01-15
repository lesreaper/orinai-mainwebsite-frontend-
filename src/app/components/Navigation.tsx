"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

type MenuItem = {
  id: number;
  title: string;
  href: string;
  current?: boolean;
  dropdown?: boolean;
  dropdownItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Features",
    href: "/features",
  },
  {
    id: 2,
    title: "Agents Directory",
    href: "fintech-agent-directory",
  },
  {
    id: 3,
    title: "Use Cases",
    href: "/blog",
  },
  {
    id: 4,
    title: "Company",
    href: "/company",
  },
];

export const Navigation: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Disclosure
        as="nav"
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
          hasScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        {({ open }: { open: boolean }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 md:h-24 items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Logo />
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-x-6">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-brand-dark-gray"
                          : "text-brand-dark-gray hover:text-brand-green",
                        "text-lg font-bold px-3 py-2"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="hidden lg:inline">
                  <button
                    className="bg-transparent hover:bg-brand-green text-brand-green font-semibold hover:text-white py-2 px-4 border border-brand-green hover:border-transparent rounded"
                    aria-label="Get Demo"
                    onClick={() => setShowLoginModal(!showLoginModal)}
                  >
                    Get Demo
                  </button>
                </div>

                {/* Mobile Menu (Centered Demo Button and Hamburger Icon) */}
                <div className="lg:hidden flex items-center justify-center w-full">
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <button
                      className="bg-transparent hover:bg-brand-green text-brand-green font-semibold hover:text-white py-2 px-4 border border-brand-green hover:border-transparent rounded"
                      aria-label="Get Demo"
                      onClick={() => setShowLoginModal(!showLoginModal)}
                    >
                      Get Demo
                    </button>
                  </div>
                  <DisclosureButton className="absolute right-0 inline-flex items-center justify-center rounded-md p-2 text-brand-green hover:bg-brand-green hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <DisclosurePanel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-brand-dark-gray hover:text-brand-green",
                      "block rounded-md px-3 py-2 text-base font-bold"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navigation;
