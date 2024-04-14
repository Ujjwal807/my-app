"use client";
import { useState } from "react";
import "../styles.css";
import Link from "next/link";
import { RiHome5Fill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });

const navItems = [
  { name: "home", icon: <RiHome5Fill /> },
  { name: "about", icon: <IoPeople /> },
  { name: "privacy-policy", icon: <MdPrivacyTip /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={` ${lato.className} sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <div className="flex flex-col gap-1">
                <div className="w-8 h-0.5 bg-white rounded-full"></div>
                <div className="w-8 h-0.5 bg-white rounded-full"></div>
                <div className="w-8 h-0.5 bg-white rounded-full"></div>
              </div>
            ) : (
              <div>
                <div className="w-6 h-1 bg-white rounded-full rotate-45 translate-y-1"></div>
                <div className="w-6 h-1 bg-white rounded-full -rotate-45"></div>
              </div>
            )}
          </button>
          <h1 className="text-3xl font-semibold text-white">Counter</h1>
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item, i) => (
            <button key={i} type="button" className="sidebar-button">
              <Link
                href={item.name === "home" ? "/" : `/${item.name}`}
                className="flex"
              >
                <span className="mr-4">{item.icon}</span>
                <p className={`${lato.className} font-semibold`}>{item.name}</p>
              </Link>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
}
