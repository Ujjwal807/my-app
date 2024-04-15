"use client";
import { Inter, Cedarville_Cursive, Montserrat, Lato } from "next/font/google";

const lato = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

import { useState } from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";

function Navbar() {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="text-white bg-blue-secondary pt-6 pb-4">
      <div className="max-w-[1200px] flex justify-between items-center mx-auto px-8 min-[320px]:pl-[1rem]">
        <div>
          <h1 className={`text-2xl ${lato.className}`}>
            {" "}
            <Link href="/">Online Sentence Counter</Link>
          </h1>
        </div>
        <div className=" flex lg:flex hidden gap-12">
          <ul className="flex font-medium text-xl">
            <Link href="/">Home</Link>
          </ul>
          <ul className="flex font-medium text-xl">
            <Link href="/about">About Us</Link>
          </ul>
          <ul className="flex font-medium  text-xl">
            <Link href="/contact-us">Contact Us</Link>
          </ul>
          <ul className="flex font-medium   text-xl">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </ul>
        </div>
        <div className="lg:hidden flex flex-col justify-center gap-1 cursor-pointer">
          {clicked ? (
            <div
              className="gap-1 flex flex-col justify-center transition-all"
              onClick={() => setClicked((prev) => !prev)}
            >
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-white rounded-full"></div>
            </div>
          ) : (
            <MobileNav setClicked={setClicked} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
