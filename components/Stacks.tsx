"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { TECH_STACKS } from "../app/data";
import { Cpu, Database, Cpu as SystemIcon, Wrench } from "lucide-react";
import "../app/styles/custom_style.css";

export default function Stacks() {
  const [activeCategory, setActiveCategory] = useState<
    "frontend" | "backend" | "systems" | "tools"
  >("frontend");

  const categories = [
    { id: "frontend", name: "Frontend", icon: Cpu },
    { id: "backend", name: "Backend & APIs", icon: Database },
    { id: "systems", name: "Systems & Graphics", icon: SystemIcon },
    { id: "tools", name: "Build & Workflow", icon: Wrench },
  ];

  const filteredItems = TECH_STACKS.filter(
    (item) => item.category === activeCategory,
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="stack">
      <section
        id="stacks"
        className="py-18 max-w-6xl mx-auto px-6 md:px-12 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column heading info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-sans font-bold tracking-tight text-on-surface mb-4">
              Technical <br />
              Armament
            </h2>
            <p className="text-sm md:text-base font-sans text-on-surface-variant leading-relaxed mb-8">
              An opinionated collection of frameworks and systems configured for
              low runtime overhead and instant state synchronization.
            </p>

            {/* Interactive tabs */}
            <div className="flex flex-row lg:flex-col flex-wrap gap-2.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer w-auto lg:w-full border ${
                      isSelected
                        ? "bg-primary/10 border-primary/25 text-primary shadow-[0_0_15px_rgba(173,198,255,0.05)]"
                        : "bg-transparent border-transparent text-on-surface-variant hover:text-on-surface hover:bg-white/[0.02]"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right column items display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="glass p-5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm sm:text-base font-sans font-bold text-on-surface">
                          {item.name}
                        </h4>

                        {/* Profiency Visualizer (Dots) */}
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`w-1.5 h-1.5 rounded-full ${
                                dot <= item.proficiency
                                  ? "bg-primary shadow-[0_0_6px_#adc6ff]"
                                  : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-sans text-on-surface-variant leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </section>
  );
}
