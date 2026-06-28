import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES } from "../app/data";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import "../app/styles/custom_style.css";

export default function Evolution() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-linear");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience">
      <section
        id="work"
        className="py-24 max-w-6xl mx-auto px-6 md:px-12 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left column info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl font-sans font-bold tracking-tight text-on-surface mb-6">
              Professional <br />
              Evolution
            </h2>
            <p className="text-sm md:text-base font-sans text-on-surface-variant leading-relaxed mb-8">
              Three nodes of deep impact across leading design-first engineering
              organizations. Click any station to inspect core contributions.
            </p>

            {/* Micro-badge */}
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-primary bg-primary/5 border border-primary/10 rounded-xl p-4">
              <Briefcase size={16} />
              <span>4+ years building design-driven software engines.</span>
            </div>
          </motion.div>

          {/* Right column timeline */}
          <div className="md:col-span-8 relative">
            {/* Vertical central timeline line */}
            <div className="absolute left-[9px] md:left-12 top-2 bottom-6 w-[1px] timeline-line" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => {
                const isExpanded = expandedId === exp.id;
                const isActiveNode = index === 0;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-24 group cursor-pointer"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Timeline point */}
                    <div
                      className={`absolute left-0 md:left-10 top-2.5 w-[19px] h-[19px] rounded-full border-4 ${
                        isExpanded
                          ? "bg-primary border-primary/20 ring-4 ring-primary/15"
                          : "bg-surface-container border-white/10 group-hover:border-primary/50"
                      } transition-all duration-300 z-10`}
                    />

                    <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300">
                      <div className="flex justify-between items-start w-full">
                        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                          {exp.period}
                        </span>
                        {isExpanded ? (
                          <ChevronUp
                            size={16}
                            className="text-on-surface-variant"
                          />
                        ) : (
                          <ChevronDown
                            size={16}
                            className="text-on-surface-variant"
                          />
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-sans font-bold text-on-surface">
                          {exp.company}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono font-semibold tracking-wider text-on-surface-variant">
                          {exp.tag}
                        </span>
                      </div>

                      <p className="text-sm font-sans text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable achievements */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-3.5 border-t border-white/5 pt-4">
                              {exp.bulletPoints.map((point, ptIndex) => (
                                <motion.li
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: ptIndex * 0.05 }}
                                  key={ptIndex}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-on-surface-variant leading-relaxed"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                  <span>{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
