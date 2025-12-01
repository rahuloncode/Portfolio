import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 bg-[var(--primary)]"
      style={{ padding: "0 3rem" }}
    >
      <div className="flex justify-between p-1">
        <div className="logo">
          <Image src="/Rahul-logo.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="links">
          <ul className="flex text-xl">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
