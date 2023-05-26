import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { IconButton } from "@mui/material";
import Language from "./Language";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ navigation, setLanguage }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleItemClick = (item) => {
    setCurrentItem({ ...currentItem, current: false });
    setCurrentItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed duration-300 w-full h-1 animate-fade-down animate-once z-50 bg-gray-900 ${
        isScrolled ? "bg-lightBackground shadow-md bg-gray-900" : ""
      }`}
    >
      {({ open }) => (
        <div
          className={`z-50 relative duration-300  ${
            (open || isScrolled) && " bg-lightBackground shadow-md bg-black"
          }`}
        >
          <div className="mx-auto max-w-5xl px-4">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="flex w-full justify-end sm:hidden ">
                <div className="absolute inset-y-0 left-0 flex items-center  ">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-paragraph hover:bg-background hover:text-headline focus:outline-none focus:ring-2 focus:ring-inset focus:ring-headline ">
                    <span className="sr-only">
                      {open ? "Close main menu" : "Open main menu"}
                    </span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="block  sm:hidden">
                  <Language setLanguage={setLanguage} />
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-paragraph hover:bg-background hover:text-headline focus:outline-none focus:ring-2 focus:ring-inset focus:ring-headline ">
                  <span className="sr-only">
                    {open ? "Close main menu" : "Open main menu"}
                  </span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-8 w-auto sm:block rounded-shape shadow-sm"
                    src="https://i.postimg.cc/J4brMKmD/Avatar-Maker.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex flex-1 w-full justify-between">
                    <div>
                      {navigation?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          scroll={false}
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            item === currentItem
                              ? "underline underline-offset-2 text-headline"
                              : "text-paragraph hover:text-headline"
                          }`}
                          onClick={() => handleItemClick(item)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <Language setLanguage={setLanguage} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-background  border-b-2 border-greenText ">
              {navigation?.map((item) => (
                <a
                  scroll={false}
                  href={item.href}
                  key={item.name}
                  className={
                    "flex items-center text-lg gap-2 cursor-pointer " +
                    classNames(
                      item.current
                        ? "bg-background text-headline hover:bg-lightBackground"
                        : "text-paragraph hover:text-headline hover:bg-lightBackground",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )
                  }
                >
                  <IconButton className="text-white p-2">
                    {item.icon}
                  </IconButton>
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
