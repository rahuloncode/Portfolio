"use client";

import React from "react";
import { motion } from "motion/react";

import { Download } from "lucide-react";
import Stacks from "./Stacks";

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
    <>
      <section id="about" className="py-16 bg-white container text-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading centered>
            I'm a Creative Frontend Developer based in Noida, who loves clean,
            simple & unique coding skills. I also enjoy crafting...
          </SectionHeading>

          <div className="flex justify-center mb-12">
            <motion.a
              href="/Rahul Singh Resume.pdf" // path to your file
              download // tells browser to download instead of open
              whileHover={{ y: -5 }}
              className="px-8 py-4 bg-brand font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </div>
        </div>
      </section>
      <Stacks />
    </>
  );
};

export default About;
