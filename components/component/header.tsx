"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../ui/mode-toggler";
import { Button } from "../ui/button";
import { FloatingNav } from "../ui/floating-navbar";
const navItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Contact",
    id: "contact",
  },
];
const Header = () => {
  const scrollToPage = (id: string) => {
    const element = document.getElementById(id) as HTMLElement;
    if (element)
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
  };
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-0 sm:gap-4 ">
        <FloatingNav className="!opacity-80 ">
          {navItems.map(({ name, id }, idx) => (
            <Button
              key={name + "" + idx}
              variant={"link"}
              onClick={(e) => scrollToPage(id)}
              className="text-sm font-medium hover:underline underline-offset-4 "
            >
              {name}
            </Button>
          ))}
        </FloatingNav>
        {navItems.map(({ name, id }, idx) => (
          <Button
            key={name + "" + idx}
            variant={"link"}
            onClick={(e) => scrollToPage(id)}
            className="text-sm font-medium hover:underline underline-offset-4 pl-0 lg:p-2 sm:p-2 md:p-2 xl:p-2"
          >
            {name}
          </Button>
        ))}
        <div className="text-sm font-medium">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
