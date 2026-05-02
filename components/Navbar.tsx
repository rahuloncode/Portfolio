import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  { name: "Home", url: "#home" },
  { name: "About", url: "#about" },
  { name: "Portfolio", url: "#experience" },
  { name: "Contact", url: "#contact" },
  { name: "Fire me an Email", url: "mailto:docoderahul@gmail.com" },
];

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 bg-(--primary) items-center"
      id="home"
      style={{ padding: "1rem 3rem" }}
    >
      <div className="flex justify-between p-1 container mx-auto">
        <Link href="#home" className="logo">
          <Image src="/Rahul-logo.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className="links">
          <ul className="flex text-xl">
            {links.map((link, index) => (
              <li key={link.name} className=" mr-3">
                <Link href={link.url} className="p-2">
                  {link.name}
                </Link>
                {/* {index !== links.length - 1 && " | "} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
