"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Portfolio", url: "#experience" },
  { name: "Contact", url: "#contact" },
  { name: "Hire Me", url: "mailto:docoderahul@gmail.com" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="home"
      className="sticky top-0 z-50 bg-[var(--primary)] backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/Rahul-logo.png"
            alt="Logo"
            width={90}
            height={90}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.url} className="hover:text-gray-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--primary)] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 border-b border-gray-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
