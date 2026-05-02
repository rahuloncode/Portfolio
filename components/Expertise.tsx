"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Code2, Server, Smartphone } from "lucide-react";

const Expertise = () => {
  const cards = [
    {
      title: "Frontend Development",
      icon: <Code2 />,
      color: "bg-brand",
      description: [
        "I am a passionate Frontend Developer with hands-on experience in building modern, responsive, and user-friendly web applications. My skill set spans a wide range of technologies including HTML, CSS, JavaScript, and frameworks like React, Next.js, and TypeScript. I specialize in creating clean, efficient user interfaces using Tailwind CSS, Bootstrap, and scalable state management with Redux.",
        "I also incorporate animation libraries such as GSAP to deliver interactive, visually engaging experiences.",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server />,
      color: "bg-gray-100",
      description: [
        "I build secure and scalable server-side applications using Node.js, Express.js, and Mongoose, often integrated with Next.js for full-stack functionality. I work extensively with MongoDB, both locally and through cloud platforms like MongoDB Atlas, Firebase, Appwrite, and MockAPI.",
        "I have experience developing and consuming RESTful APIs, performing full CRUD operations, and implementing authentication systems using JWT, NextAuth, OTP verification, and email-based login flows (e.g., resend mail features). I also use Cloudinary for media handling and storage.",
      ],
    },
    {
      title: "Git, GitHub and SEO",
      icon: <Smartphone />,
      color: "bg-gray-200",
      description: [
        "As a seasoned Git/GitHub practitioner, I am proficient in version control and collaborative software development workflows. With a strong foundation in Git principles and extensive experience with GitHub's platform, I excel in managing code repositories, facilitating team collaboration, and ensuring the integrity and stability of software projects",
        "As an SEO specialist, I possess a deep understanding of search engine optimization principles and techniques, enabling me to enhance the visibility and ranking of websites in search engine results pages (SERPs). On-Page Optimization, Technical SEO.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" bg-gray-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-20 text-center justify-center">
          <h2 className="font-serif text-5xl md:text-6xl italic">My</h2>
          <span className="bg-brand text-4xl md:text-5xl font-serif font-bold px-4 py-1">
            Expertise
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {cards.map((card, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-10 transition-all ${activeTab === idx ? card.color + " shadow-xl scale-[1.02]" : "bg-white hover:bg-gray-50"}`}
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm font-mono opacity-50">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    {card.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-6 text-brand bg-navy p-2 w-fit px-4 text-xs font-bold rounded-full">
              {cards[activeTab].icon} {cards[activeTab].title}
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-2">
              {cards[activeTab].description[0]}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {cards[activeTab].description[1]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
