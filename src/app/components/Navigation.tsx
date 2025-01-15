"use client";

import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import cx from "classnames";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  Transition,
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

type MobileNavigationProps = {
  title: string;
  items: MenuItem[];
};

type CalloutProps = {
  desktop: boolean;
  handleClick: () => void;
};

type ChevronProps = {
  open: boolean;
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

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  title,
  items,
}) => {
  return (
    <Disclosure>
      {({ open }: { open: boolean }) => (
        <>
          <DisclosureButton
            key={`mobileButton-${title}`}
            className="text-brand-dark-gray hover:text-brand-green rounded-md text-lg font-bold x-spacing-8 px-3 py-2 flex flex-row items-center"
          >
            {title}
            <Chevron open={open} />
          </DisclosureButton>
          <DisclosurePanel>
            {items.map((item) => (
              <div key={`subItem-${item.title}`}>
                <Link
                  aria-label={`Link to ${item.title}`}
                  key={`subMenu-${item.title}`}
                  href={item.href}
                  className={
                    "block px-4 py-2 text-sm text-brand-green hover:text-brand-green"
                  }
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

const Callout: React.FC<CalloutProps> = ({ desktop, handleClick }) => (
  <div
    className={cx("flex-row items-center", {
      "hidden lg:flex": desktop,
      "flex px-3": !desktop,
    })}
  >
    <div className="flex flex-col ml-0 md:ml-2 leading-tight mx-4">
      <button
        className="bg-transparent hover:bg-brand-green text-brand-green font-semibold hover:text-white py-2 px-4 border border-brand-green hover:border-transparent rounded"
        aria-label="Login to your account"
        onClick={handleClick}
      >
        Get Demo
      </button>
    </div>
  </div>
);

const Chevron: React.FC<ChevronProps> = ({ open }) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-4 h-4 ml-2"
      >
        {open ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        )}
      </svg>
    </span>
  );
};

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
