"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutFooter = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="py-16 bg-white flex flex-col items-center container"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className=" m-auto">
          <Image
            src="/Potrait.jpg"
            alt="Rahul Picture"
            className=" grayscale group-hover:grayscale-0 transition-all duration-700 "
            width={450}
            height={450}
          />
        </div>
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="font-serif text-5xl">About</h2>
            <span className="bg-brand text-4xl font-serif italic px-3 py-1 font-bold">
              Myself
            </span>
          </div>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            👋 Hello! I'm Rahul Singh, a passionate frontend developer dedicated
            to crafting captivating and user-centric web experiences. With a
            keen eye for design and a knack for coding, I specialize in bringing
            ideas to life through clean, efficient, and visually stunning
            interfaces.
          </p>
          <motion.button
            onClick={() => setOpen(true)}
            className="px-10 py-3 border-2 border-navy text-sm font-bold uppercase tracking-wider rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            More Info
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  ref={modalRef}
                  className="bg-white p-8 rounded-lg max-w-lg w-full shadow-xl max-h-[80vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold mb-4">More About Me</h3>
                  <p className="text-gray-600 mb-4">
                    👋 Hello! I'm Rahul a passionate frontend developer
                    dedicated to crafting captivating and user-centric web
                    experiences. With a keen eye for design and a knack for
                    coding, I specialize in bringing ideas to life through
                    clean, efficient, and visually stunning interfaces.
                  </p>
                  <p className="text-gray-600 mb-4">
                    💻 Armed with expertise in HTML, CSS, and JavaScript, I
                    thrive on transforming concepts into functional and
                    intuitive websites. Whether it's building responsive
                    layouts, optimizing performance, or implementing interactive
                    features, I'm committed to delivering seamless experiences
                    across devices and platforms.
                  </p>
                  <p className="text-gray-600 mb-4">
                    🚀 Continuously honing my skills and staying abreast of
                    emerging technologies, I strive to push the boundaries of
                    creativity and innovation in every project I undertake.
                    Collaborative by nature and driven by a passion for
                    problem-solving, I thrive in dynamic environments where I
                    can collaborate with like-minded professionals to turn
                    visions into reality.
                  </p>
                  <p className="text-gray-600 mb-4">
                    ✨ Let's connect and explore how we can create impactful
                    digital experiences together!
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 px-6 py-2 bg-black text-white rounded"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutFooter;
