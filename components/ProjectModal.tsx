import { useEffect } from "react";
import { motion } from "motion/react";
import "../app/styles/custom_style.css";
import {
  X,
  Calendar,
  User,
  CheckCircle,
  Flame,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Project } from "../app/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-surface-lowest/90 backdrop-blur-md cursor-zoom-out"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container border border-white/10 rounded-2xl overflow-y-auto shadow-2xl z-10 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-surface-lowest/80 hover:bg-surface-lowest hover:text-primary rounded-full border border-white/10 hover:border-primary/25 transition-all text-on-surface-variant cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Hero image and Header header */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 overflow-hidden shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-on-surface drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Metadata chips */}
          <div className="flex flex-wrap gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <Calendar size={14} className="text-primary" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant">
              <User size={14} className="text-primary" />
              <span>{project.role}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 ml-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-primary/10 border border-primary/15 text-primary rounded text-[10px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Core details */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-base font-sans font-semibold text-on-surface tracking-wide uppercase mb-3">
                  Summary
                </h3>
                <p className="text-sm font-sans text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base font-sans font-semibold text-on-surface tracking-wide uppercase mb-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary" />
                  Key Implementations
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-on-surface-variant leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance and Challenges */}
            <div className="md:col-span-5 space-y-6">
              {/* Engineering Challenge */}
              <div className="p-5 rounded-xl bg-red-900/5 border border-red-500/10">
                <h3 className="text-xs font-mono font-bold text-red-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Flame size={14} />
                  Technical Challenge
                </h3>
                <div className="space-y-2">
                  <p className="text-[11px] font-mono text-red-300 font-semibold">
                    {project.challenges[0]}
                  </p>
                  <p className="text-xs font-sans text-on-surface-variant leading-relaxed">
                    {project.challenges[1]}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-xs font-mono font-bold text-primary tracking-wider uppercase mb-3 flex items-center gap-2">
                  <TrendingUp size={14} />
                  Key Metrics
                </h3>
                <ul className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-mono text-on-surface font-semibold flex items-center gap-2"
                    >
                      <span className="text-primary">→</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div className="flex justify-end gap-3 border-t border-white/5 pt-6">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-xl text-xs font-semibold cursor-pointer transition-all duration-100"
            >
              Close
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-on-primary hover:bg-white/90 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all duration-200 hover:shadow-[0_0_15px_rgba(173,198,255,0.25)]"
            >
              <span>Launch Demo</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
