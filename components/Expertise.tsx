"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Server, Smartphone } from "lucide-react";

const Expertise = () => {
  const cards = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5" />,
      color: "bg-gray-900 text-white",
      description: [
        "I am a passionate Frontend Developer with hands-on experience in building modern, responsive, and user-friendly web applications. My skill set spans HTML, CSS, JavaScript, React, Next.js, and TypeScript. I specialize in creating clean, efficient interfaces using Tailwind CSS, Bootstrap, and scalable state management with Redux.",
        "I also integrate animation libraries like GSAP and Framer Motion to create smooth, engaging user experiences while ensuring accessibility and performance.",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      color: "bg-gray-900 text-white",
      description: [
        "I build secure and scalable backend applications using Node.js, Express.js, and Mongoose, often integrated with Next.js for full-stack solutions. I work extensively with MongoDB, Firebase, Appwrite, MongoDB Atlas, and MockAPI.",
        "I have experience developing RESTful APIs, authentication systems using JWT, NextAuth, OTP verification, email workflows, Cloudinary integration, and complete CRUD applications.",
      ],
    },
    {
      title: "Git, GitHub & SEO",
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-gray-900 text-white",
      description: [
        "I use Git and GitHub daily for version control, collaboration, branching strategies, pull requests, and maintaining clean development workflows in team environments.",
        "I also optimize websites for search engines through Technical SEO, On-Page SEO, metadata optimization, semantic HTML, performance improvements, and Core Web Vitals.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gray-50/40 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-black">
            My
          </h2>

          <span className="bg-brand px-4 py-2 font-serif font-bold text-black text-3xl sm:text-4xl md:text-5xl rounded-md">
            Expertise
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Mobile Tabs */}
          <div className="lg:hidden flex flex-col gap-3 mb-6">
            {cards.map((card, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full rounded-xl px-5 py-4 text-left text-sm font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? `${card.color} shadow-lg`
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-col gap-5">
            {cards.map((card, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveTab(idx)}
                className={`w-full rounded-2xl p-6 xl:p-8 text-left transition-all duration-300 ${
                  activeTab === idx
                    ? `${card.color} shadow-2xl`
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs opacity-60 font-mono">
                    0{idx + 1}
                  </span>

                  <h3 className="font-serif text-xl xl:text-2xl">
                    {card.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-8 lg:p-10"
              >
                <div className="inline-flex items-center gap-2 bg-navy text-brand rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  {cards[activeTab].icon}
                  {cards[activeTab].title}
                </div>

                <p className="text-gray-600 leading-8 text-base md:text-lg mb-5">
                  {cards[activeTab].description[0]}
                </p>

                <p className="text-gray-600 leading-8 text-base md:text-lg">
                  {cards[activeTab].description[1]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
