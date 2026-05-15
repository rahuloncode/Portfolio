"use client";

import React, { useEffect, useState } from "react";
import "./styles/custom.css";
import Image from "next/image";
import Link from "next/link";

const imgList = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
];

const Home = () => {
  const [loadImg, setImage] = useState("");

  useEffect(() => {
    const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * imgList.length);
      setImage(imgList[randomIndex]);
    };

    getRandomImage();

    const interval = setInterval(getRandomImage, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--primary)] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
              pb-6
            "
            >
              Crafting Code,
              <br />
              Designing Dreams.
            </h1>

            <p
              className="
              text-lg
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              leading-relaxed
              pb-10
              text-gray-700
            "
            >
              Hi, I am Rahul, focused on where code meets creativity.
            </p>

            <Link
              href="mailto:docoderahul@gmail.com"
              className="
                inline-block
                px-8
                py-4
                border
                border-black
                text-base
                sm:text-lg
                font-medium
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
              "
            >
              HIRE ME
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[550px]">
            <Image
              className="object-cover rounded-2xl"
              src={loadImg || "/1.png"}
              alt="Banner Image"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
