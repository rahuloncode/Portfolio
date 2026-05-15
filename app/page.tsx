"use client";

import React, { useEffect, useState } from "react";
import "./styles/custom.css";
import Image from "next/image";
import About from "@/components/About";
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

    // set initial image
    getRandomImage();

    const interval = setInterval(getRandomImage, 10000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="bg-(--primary)">
      <div className="container m-auto homepage_grid place-items-center min-h-screen">
        <div className="lf">
          <h1 className="text-7xl pb-8">
            Crafting Code, <br /> Designing Dreams.
          </h1>
          <p className="text-5xl pb-16  ">
            Hi, I am Rahul, focus on where code meets creativity.
          </p>
          <Link
            href="mailto:docoderahul@gmail.com"
            className="p-6 pr-8 pl-8 border border-black text-xl cursor-pointer transition-all duration-300 hover:bg-black hover:text-white"
          >
            HIRE ME
          </Link>
        </div>
        <div
          className="rt"
          style={{ position: "relative", width: "100%", height: "500px" }}
        >
          <Image
            className="image"
            src={loadImg || "/1.png"}
            alt="Banner Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
