import { motion } from "motion/react";
import { Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../app/data";
import { Project } from "../app/types";
import "../app/styles/custom_style.css";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-surface-container-low/25 relative overflow-hidden project"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 ">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-sans font-bold tracking-tight text-on-surface mb-4">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base font-sans text-on-surface-variant max-w-md leading-relaxed">
              Selective works demonstrating technical depth and aesthetic rigor.
              Click a case study to read architectural details.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onClick={() => onSelectProject(PROJECTS[0])} // opens first as reference
            className="font-mono text-xs font-semibold tracking-wider text-primary hover:text-on-surface hover:underline underline-offset-8 flex items-center gap-2 group transition-all cursor-pointer"
          >
            VIEW CASE STUDY SPEC{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </motion.button>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => onSelectProject(project)}
              className="group relative glass p-6 sm:p-7 rounded-[24px] overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(11,14,21,0.65)] bg-surface-container-low/25 z-10 border-[1px] border-zinc-800"
            >
              {/* Inner Glowing Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-xl h-44 sm:h-48 bg-surface-container relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-surface-lowest/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-sans font-bold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-on-surface-variant mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Link CTA */}
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase text-primary group-hover:text-on-surface transition-all duration-300">
                <span>View Case Study</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
