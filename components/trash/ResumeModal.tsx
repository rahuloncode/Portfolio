import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, Mail, MapPin, Globe, Award, BookOpen, Printer, Download, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const printableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container border border-white/10 rounded-2xl overflow-y-auto shadow-2xl z-10 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-surface-lowest/80 hover:bg-surface-lowest hover:text-primary rounded-full border border-white/10 hover:border-primary/25 transition-all text-on-surface-variant cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Top Actions */}
        <div className="sticky top-0 bg-surface-container border-b border-white/5 px-6 py-4 flex justify-between items-center z-10 shrink-0">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5">
            <Sparkles size={13} />
            Alex Dev — Curriculum Vitae
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-white/25 rounded-lg text-[10px] sm:text-xs font-semibold text-on-surface flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Printer size={13} />
              <span>Print CV</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div
          ref={printableRef}
          className="p-6 sm:p-10 space-y-8 select-text overflow-y-auto print:bg-white print:text-black"
        >
          {/* Header */}
          <div className="border-b border-white/5 print:border-black/10 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h1 className="text-3xl font-sans font-extrabold text-on-surface print:text-black">
                  Alex Dev
                </h1>
                <p className="text-sm font-mono text-primary font-semibold tracking-wider uppercase mt-1">
                  Senior Software Engineer & UI Architect
                </p>
              </div>
              <div className="grid grid-cols-1 gap-1.5 text-xs font-mono text-on-surface-variant print:text-black/70">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-primary shrink-0" />
                  <span>docoderahul@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-primary shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={13} className="text-primary shrink-0" />
                  <span>https://alex.dev</span>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-sans text-on-surface-variant print:text-black/80 leading-relaxed max-w-2xl">
              Systems-minded product engineer with 4+ years of experience constructing high-concurrency real-time charts, zero-latency desktop synchronization algorithms, and rendering pipelines using WebGPU, React, Next.js, and WASM. Dedicated to perfect performance metrics and accessible, elegant visual details.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase border-b border-white/5 print:border-black/10 pb-2">
              Professional Milestones
            </h2>
            <div className="space-y-8">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base font-sans font-bold text-on-surface print:text-black">
                        {exp.company}
                      </h3>
                      <span className="text-xs text-on-surface-variant font-mono print:text-black/70">
                        — {exp.role}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-on-surface-variant print:text-black/65">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-on-surface-variant print:text-black/75 italic">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5 pl-4 list-disc print:list-none print:pl-0">
                    {exp.bulletPoints.map((point, ptIdx) => (
                      <li
                        key={ptIdx}
                        className="text-xs font-sans text-on-surface-variant print:text-black/80 leading-relaxed print:before:content-['•_'] print:before:mr-1"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase border-b border-white/5 print:border-black/10 pb-2">
                Education
              </h2>
              <div className="flex gap-3">
                <BookOpen size={16} className="text-primary shrink-0 mt-1 print:hidden" />
                <div>
                  <h3 className="text-xs sm:text-sm font-sans font-bold text-on-surface print:text-black">
                    B.S. in Computer Science & Engineering
                  </h3>
                  <p className="text-xs font-mono text-on-surface-variant print:text-black/70 mt-0.5">
                    Stanford University — GPA 3.92
                  </p>
                  <p className="text-[11px] font-sans text-on-surface-variant print:text-black/60 mt-1 leading-relaxed">
                    Specialized in Graphics Architecture and Human-Computer Interaction systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Awards */}
            <div className="space-y-4">
              <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase border-b border-white/5 print:border-black/10 pb-2">
                Recognitions & Accolades
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Award size={16} className="text-primary shrink-0 mt-0.5 print:hidden" />
                  <div>
                    <h3 className="text-xs font-sans font-bold text-on-surface print:text-black">
                      Vercel Contributor Award (2022)
                    </h3>
                    <p className="text-[11px] font-sans text-on-surface-variant print:text-black/70">
                      Honored for outstanding contributions to open-source Turbopack UI visualizations.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Award size={16} className="text-primary shrink-0 mt-0.5 print:hidden" />
                  <div>
                    <h3 className="text-xs font-sans font-bold text-on-surface print:text-black">
                      Stripe Accessibility Champion (2020)
                    </h3>
                    <p className="text-[11px] font-sans text-on-surface-variant print:text-black/70">
                      Recognized for driving the company-wide migration to full keyboard and screen-reader accessibility.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="border-t border-white/5 px-6 py-4 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 rounded-xl text-xs font-semibold cursor-pointer transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
