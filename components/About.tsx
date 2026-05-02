"use client";

import React from "react";
import { motion } from "motion/react";

import { Download } from "lucide-react";

const SectionHeading = ({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4 block"
    >
      About Myself
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="font-serif text-4xl md:text-5xl leading-snug"
    >
      {children}
    </motion.h2>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-32 bg-white container">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading centered>
          I'm a Creative Web Developer based in Noida, who loves clean, simple &
          unique coding skills. I also enjoy crafting...
        </SectionHeading>

        <div className="flex justify-center mb-24">
          <motion.a
            href="/Rahul Singh Resume.pdf" // path to your file
            download // tells browser to download instead of open
            whileHover={{ y: -5 }}
            className="px-8 py-4 bg-brand font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:shadow-lg transition-all"
          >
            Download Resume <Download size={18} />
          </motion.a>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-200 p-12 rounded-sm border border-gray-100">
          <h3 className="font-serif text-3xl mb-8">
            Skill that <span className="bg-brand px-2">MATTERS</span>
          </h3>

          <div className="space-y-6 text-sm md:text-base">
            <p>
              <strong>• Front-end Technologies:</strong> JavaScript, Bootstrap,
              React, Redux, Tailwind, Next JS, TypeScript, GSAP.
            </p>
            <p>
              <strong>• Backend Technologies:</strong> Node, Express, Mongoose,
              NEXT JS.
            </p>
            <p>
              <strong>• API Consuming:</strong> REST API, CRUD Operation with
              Authentication, NextAuth, Resend Mail, OTP and JWT.
            </p>
            <p>
              <strong>• DataBase:</strong> MongoDB.
            </p>
            <p>
              <strong>• Online DataBase:</strong> MongoDB Atlas, Firebase,
              Appwrite, Cloudinary and MockAPI.
            </p>
          </div>

          <p className="mt-12 text-gray-600 leading-relaxed max-w-4xl m-auto text-center">
            Creative web developer skilled in HTML, CSS, and JavaScript, with a
            focus on crafting responsive and visually engaging user interfaces.
            I bring ideas to life by seamlessly blending design and
            functionality. Passionate about clean code, I strive to create
            intuitive web experiences that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
