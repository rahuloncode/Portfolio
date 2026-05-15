"use client";

import React from "react";
import { motion } from "motion/react";
const Projects = () => {
  const list = [
    {
      name: "Addicor Technologies Pvt Ltd (Company)",
      link: "https://addicortechnologies.com/",
    },
    { name: "Chhvio (MLM Based)", link: "https://chhvio.com/" },
    { name: "Volochain (MLM)", link: "https://volochainmlmsoftware.com/" },
    {
      name: "Umbrella Shield Foundation (NGO) - Under Process",
      link: "https://umbrellashield.org/",
    },
    { name: "Signisys", link: "https://www.signisys.com/" },
    { name: "S. N. Montessori School", link: "https://snmontessori.com/" },
  ];

  return (
    <motion.section
      id="projects"
      className="py-8 bg-gray-50/50"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-6xl mb-24">Project</h2>

        <div className="space-y-1">
          {list.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between py-6 px-4 border-b border-gray-100 hover:bg-white transition-all group"
            >
              <span className="text-lg font-medium group-hover:text-navy transition-colors">
                {item.name}
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-navy">
                Look Here{" "}
                <span className="text-blue-500 font-bold group-hover:translate-x-1 transition-transform">
                  goto ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
