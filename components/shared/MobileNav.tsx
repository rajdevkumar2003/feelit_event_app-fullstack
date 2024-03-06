import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"

import Image from "next/image";
import NavItems from "./NavItems";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
           src={'/assets/icons/menu.svg'}
           alt='menu'
           width={24}
           height={24}
           className=""
          /></SheetTrigger>
        <SheetContent className=" flex flex-col gap-6 bg-white md:hidden">
          <div className="w-36 flex justify-start items-center gap-2 flex-start">
          <Image
           src={'assets/images/logo.svg'}
           alt="logo"
           width={38}
           height={38}
          />
          <h2 className="p-medium-16 whitespace-nowrap">Feelit</h2>
          </div>
        <Separator className="border border-gray-50" />
        <NavItems/>
        <Separator className="border border-gray-50" />
        <SignedIn>
          <Link href={'/sign-in'} className=" bg-primary-500 text-white px-5 py-3 text-center flex justify-center items-center rounded-md">
           Log In
          </Link>
        </SignedIn>
        <SignedIn>
          <Link href={'/sign-up'} className=" bg-primary text-white px-5 py-3 text-center flex justify-center items-center rounded-md">
           Sign up
          </Link>
        </SignedIn>

        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
