"use client";
import Home from "@/components/Home";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/trash/Experience";
import Projects from "@/components/Projects";
import AboutFooter from "@/components/AboutFooter";
import { Project } from "./types";
import "./styles/custom_style.css";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import Evolution from "@/components/Evolution";

const page = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <Home />
      <About />
      <Expertise />
      {/* <Experience /> */}
      <Evolution />
      <Projects onSelectProject={(project) => setSelectedProject(project)} />
      <AboutFooter />

      {/* Case Study Deep-Dive Overlays */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default page;
