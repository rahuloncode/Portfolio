"use client";

import React from "react";
import { motion } from "motion/react";

import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-brand-bg"
    >
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-sm md:text-base font-medium tracking-[0.2em] uppercase"
          >
            Get in touch
          </motion.span>

          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight"
          >
            Let's work <br />
            <span className="italic">together</span>
          </motion.h3>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-subtext text-lg md:text-xl max-w-md font-light leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="mailto:docoderahul@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-brand-accent hover:bg-[#d6ac7d] transition-colors duration-300 py-4 px-8 md:px-12 text-brand-bg font-medium uppercase tracking-wider text-sm md:text-base mt-4"
          >
            <Mail className="w-5 h-5 transition-transform group-hover:-rotate-12" />
            docoderahul@gmail.com
          </motion.a>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-8 md:gap-12 pt-8"
          >
            {[
              {
                Icon: CiTwitter,
                href: "https://x.com/docoderahul",
                label: "Twitter",
              },
              { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
              {
                Icon: FiGithub,
                href: "https://github.com/rahuloncode",
                label: "GitHub",
              },
              { Icon: FaInstagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  href={href}
                  className="text-brand-subtext hover:text-brand-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 mx-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-brand-subtext/60 text-sm md:text-base tracking-wide"
        >
          <p>
            copyright© 2026 — Designed with intention, Designed by Codex Rahul
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
